// main game: player, weapons, camera, level flow, loop
import * as THREE from 'three';
import { S, W, LEVEL_DEFS, rand, randInt, clamp, terrainH, world, addScore } from './state.js';
import { Sfx } from './audio.js';
import { Music } from './music.js';
import { buildHermy, buildBlasterFP, buildMech, buildGunFP, POWERUP_TYPES, POWERUP_KEYS } from './models.js';
import { Enemy, Friend, Turtle, Powerup, Treasure, Ink, LavaBolt, FlamePuff, CrabSwarm, LostCrab, spawnBurst, updateParticles, fireBeam, updateBeams } from './entities.js';
import { buildLevelScenery, updateScenery } from './scenery.js';
import { updateHUD, drawMinimap, drawRadar, ensureBossBar } from './hud.js';

// ---------------- renderer / scene ----------------
const canvas = document.getElementById('game-canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x2f8fb8, 0.008);
scene.background = new THREE.Color(0x2f8fb8);

const camera = new THREE.PerspectiveCamera(72, innerWidth / innerHeight, 0.1, 900);
scene.add(camera);

const hemi = new THREE.HemisphereLight(0xbfefff, 0x1a3a4a, 1.1);
scene.add(hemi);
const sun = new THREE.DirectionalLight(0xfff2cc, 1.5);
sun.position.set(80, 140, 60);
scene.add(sun);

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

// expose to other modules
S.scene = scene;

// ---------------- ui helpers ----------------
const msgEl = document.getElementById('msg');
let msgTimer = 0;
function showMsg(text, ms = 2200) {
  msgEl.textContent = text;
  msgEl.style.opacity = 1;
  msgTimer = ms / 1000;
}
S.showMsg = showMsg;

// ---------------- overlay / flow ----------------
const overlay = document.getElementById('overlay');
const overlayBtn = document.getElementById('start-btn');
function showOverlay(title, sub, btnText) {
  overlay.classList.remove('hidden');
  overlay.querySelector('h1').textContent = title;
  overlay.querySelector('h2').textContent = sub;
  overlayBtn.textContent = btnText;
}
function hideOverlay() { overlay.classList.add('hidden'); }

// level selector (start screen) — default level 1
let chosenLevel = 1;
const lvSel = document.getElementById('level-select');
if (lvSel) {
  for (let i = 0; i < LEVEL_DEFS.length; i++) {
    const b = document.createElement('button');
    b.className = 'lv-btn' + (i === 0 ? ' on' : '');
    b.textContent = i + 1;
    b.title = LEVEL_DEFS[i].name;
    b.onclick = () => {
      chosenLevel = i + 1;
      for (const c of lvSel.children) c.classList.remove('on');
      b.classList.add('on');
      Sfx.blip(300, 520, 0.08, 'square', 0.15);
    };
    lvSel.appendChild(b);
  }
}

let gameStarted = false, paused = false, dead = false;
let thirdPerson = false;
let mmVisible = true;
let locked = false;

// ---------------- input ----------------
const keys = {};
addEventListener('keydown', (e) => {
  keys[e.code] = true;
  if (!gameStarted || paused || dead) return;
  if (e.code === 'Digit1') setWeapon(0);
  if (e.code === 'Digit2') setWeapon(1);
  if (e.code === 'Digit3') setWeapon(2);
  if (e.code === 'KeyC') { thirdPerson = !thirdPerson; showMsg(thirdPerson ? '👀 Third-person view' : '🎯 First-person view', 1200); }
  if (e.code === 'Digit4') setWeapon(3);
  if (e.code === 'Digit5') setWeapon(4);
  if (e.code === 'Digit6') setWeapon(5);
  if (e.code === 'KeyJ') testBoss();
  if (e.code === 'KeyR') superAttack();
  if (e.code === 'KeyM') { mmVisible = !mmVisible; document.getElementById('top-right').style.visibility = mmVisible ? 'visible' : 'hidden'; }
  if (e.code === 'KeyN') { const on = Music.toggle(); showMsg(on ? '🎵 Music on' : '🔇 Music off', 1200); }
  if (e.code === 'KeyE') { if (!rescueCrab()) tryPortal(true); }
});
addEventListener('keyup', (e) => keys[e.code] = false);

let mouseDown = false;
canvas.addEventListener('mousedown', () => mouseDown = true);
addEventListener('mouseup', () => mouseDown = false);
canvas.addEventListener('click', () => {
  if (!gameStarted || paused || dead) return;
  if (!locked) canvas.requestPointerLock();
  else fireWeapon();
});
document.addEventListener('pointerlockchange', () => {
  locked = document.pointerLockElement === canvas;
  if (!locked && gameStarted && !dead) {
    paused = true;
    Music.stop();
    showOverlay('PAUSED', 'The tide waits for no one…', 'CLICK TO RESUME');
    overlayBtn.onclick = () => { hideOverlay(); canvas.requestPointerLock(); };
  }
  if (locked) { paused = false; overlayBtn.onclick = startGame; setMusicTrack('game'); }
});
addEventListener('mousemove', (e) => {
  if (!locked) return;
  S.yaw -= e.movementX * 0.0021;
  S.pitch = clamp(S.pitch - e.movementY * 0.0021, -1.45, 1.45);
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden && gameStarted && !dead) {
    paused = true;
    Music.stop();
    showOverlay('PAUSED', '', 'CLICK TO RESUME');
    overlayBtn.onclick = () => { hideOverlay(); canvas.requestPointerLock(); };
  }
});

// ---------------- player ----------------
const player = {
  pos: new THREE.Vector3(0, 5, 12),
  vel: new THREE.Vector3(),
  hp: 100, shield: 0,
  radius: 0.8,
  buffs: { rapid: 0, speed: 0 },
  shellCharges: 3,
  weapon: 0,
  lastHurt: -99,
  hurtFlash: 0,
  inHouse: false,
  mesh: buildHermy(),
  spawn: new THREE.Vector3(),
};
S.player = player;
S.yaw = 0; S.pitch = 0;
scene.add(player.mesh);

const blasterFP = buildBlasterFP();
camera.add(blasterFP);

const weapons = [
  { name: 'Shrimp Blaster', cd: 0, maxCd: 0.25 },
  { name: 'Bubble Burst', cd: 0, maxCd: 1.0 },
  { name: 'Crab Shell', cd: 0, maxCd: 1.5 },
  { name: 'Lava Blaster', cd: 0, maxCd: 0.5 },
  { name: 'Laser Gun', cd: 0, maxCd: 0.28 },
  { name: 'Flame Thrower', cd: 0, maxCd: 0.06 },
];

function setWeapon(i) {
  if (!S.mech && (i === 3 || i === 4)) { showMsg('Mech weapons locked — defeat a MEGALODON to unlock', 1500); return; }
  if (player.weapon === i) return;
  player.weapon = i;
  Sfx.blip(300, 500, 0.08, 'square', 0.15);
}

function playerForward(out) {
  const cp = Math.cos(S.pitch);
  return out.set(-Math.sin(S.yaw) * cp, Math.sin(S.pitch), -Math.cos(S.yaw) * cp);
}

function fireWeapon() {
  const w = weapons[player.weapon];
  if (w.cd > 0) return;
  const fwd = playerForward(new THREE.Vector3());
  const origin = thirdPerson ? player.pos.clone() : camera.position.clone().addScaledVector(fwd, 1);
  const muzzle = origin.clone().addScaledVector(fwd, 0.8);

  if (player.weapon === 0) {
    // shrimp blaster laser
    const cdMul = player.buffs.rapid > 0 ? 0.45 : 1;
    w.cd = w.maxCd * cdMul;
    Sfx.laser();
    // math ray vs enemies
    let best = null, bestT = 90;
    for (const e of S.enemies) {
      const rel = new THREE.Vector3().copy(e.pos).sub(origin);
      const t = rel.dot(fwd);
      if (t < 0 || t > bestT) continue;
      const perp = rel.clone().addScaledVector(fwd, -t).length();
      if (perp < e.radius + 0.6) { best = e; bestT = t; }
    }
    const end = origin.clone().addScaledVector(fwd, best ? bestT : 90);
    if (best) {
      best.takeDamage(12, player.pos);
      if (best.stun === undefined || best.type !== 'squid') best.stun = Math.max(best.stun, 0.15);
      spawnBurst(best.pos, 0x9dff6a, 6, 4, 0.35);
    } else spawnBurst(end, 0x9dff6a, 3, 2, 0.25);
    fireBeam(muzzle, end, 0xaaff44);
  } else if (player.weapon === 1) {
    // bubble burst: short-range AoE
    w.cd = w.maxCd;
    Sfx.bubbleBurst();
    const center = origin.clone().addScaledVector(fwd, 13);
    center.y = clamp(center.y, terrainH(center.x, center.z) + 0.5, W.yTop);
    const bubble = new THREE.Mesh(new THREE.SphereGeometry(1, 14, 10),
      new THREE.MeshBasicMaterial({ color: 0x9fe8ff, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false }));
    bubble.position.copy(center);
    scene.add(bubble);
    S.beams.push({ obj: bubble, life: 0.5, max: 0.5, grow: true, center });
    for (const e of S.enemies) {
      if (e.pos.distanceTo(center) < 7 + e.radius) {
        e.takeDamage(25, player.pos);
        e.stun = Math.max(e.stun, 1.5);
      }
    }
  } else if (player.weapon === 2) {
    // crab shell: summon hermit crab buddies
    if (player.shellCharges <= 0) { w.cd = 0.4; showMsg('No shells left! Find Spare Shells', 1200); return; }
    player.shellCharges--;
    w.cd = w.maxCd;
    Sfx.summon();
    showMsg('🐚 HERMIT CRAB SQUAD, ENGAGE! (30s)', 1600);
    const right = new THREE.Vector3(-Math.cos(S.yaw), 0, Math.sin(S.yaw));
    for (const s of [-1, 1]) {
      const fp = new THREE.Vector3(-Math.sin(S.yaw), 0, -Math.cos(S.yaw));
      const p = player.pos.clone().addScaledVector(fp, 1.5).addScaledVector(right, s * 1.4);
      S.friends.push(new Friend(p, 30));
      spawnBurst(p, 0xffd23d, 10, 4, 0.5);
    }
  } else if (player.weapon === 3) {
    // lava blaster: arcing lava bomb, explodes on impact
    w.cd = w.maxCd;
    Sfx.lava();
    S.projectiles.push(new LavaBolt(muzzle, fwd, 45));
    spawnBurst(muzzle, 0xff7722, 3, 2, 0.3);
  } else if (player.weapon === 4) {
    // laser gun: heavy long-range beam
    const cdMul = player.buffs.rapid > 0 ? 0.5 : 1;
    w.cd = w.maxCd * cdMul;
    Sfx.laserGun();
    let best = null, bestT = 220;
    for (const e of S.enemies) {
      const rel = new THREE.Vector3().copy(e.pos).sub(origin);
      const t = rel.dot(fwd);
      if (t < 0 || t > bestT) continue;
      const perp = rel.clone().addScaledVector(fwd, -t).length();
      if (perp < e.radius + 0.7) { best = e; bestT = t; }
    }
    const end = origin.clone().addScaledVector(fwd, best ? bestT : 220);
    if (best) {
      best.takeDamage(32, player.pos);
      if (best.stun === undefined || (best.type !== 'squid' && best.type !== 'megalodon')) best.stun = Math.max(best.stun, 0.2);
      spawnBurst(best.pos, 0xff66aa, 8, 5, 0.4);
    } else spawnBurst(end, 0xff66aa, 3, 2, 0.25);
    fireBeam(muzzle, end, 0xff55aa);
  } else if (player.weapon === 5) {
    // flame thrower: continuous stream of short-range fire puffs
    const cdMul = player.buffs.rapid > 0 ? 0.55 : 1;
    w.cd = w.maxCd * cdMul;
    Sfx.flame();
    for (let i = 0; i < 3; i++) S.projectiles.push(new FlamePuff(muzzle.clone(), fwd, 7));
  }
}

// ---------------- mech & boss testing ----------------
let mechObj = null;
function grantMech() {
  if (S.mech) return;
  S.mech = true;
  mechObj = buildMech();
  player.mesh.add(mechObj);
  player.radius = 0.9;
  player.hp = 100;
  player.shield = Math.min(50, player.shield + 50);
  Sfx.mech();
  showMsg('🤖 MECH HERMY ONLINE! [4] Lava Blaster · [5] Laser Gun · Propeller engaged', 5200);
  spawnBurst(player.pos, 0x88ddff, 24, 8, 1);
}
let superCd = 0;
let houseMsgT = 0;
let musicState = null;
let bossCheckT = 0;

function setMusicTrack(name) {
  if (musicState === name) return;
  musicState = name;
  Music.play(name);
}
function superAttack() {
  if (!gameStarted || paused || dead) return;
  if (superCd > 0) { showMsg(`🦀 Swarm recharging… ${Math.ceil(superCd)}s`, 1200); return; }
  superCd = 45;
  Sfx.roar();
  Sfx.summon();
  showMsg('🦀🦀🦀 100,000 HERMIT CRABS, CRUSH THEM! 🦀🦀🦀', 3600);
  S.swarms.push(new CrabSwarm(player.pos.clone()));
}

function testBoss() {
  if (!gameStarted || paused || dead) return;
  setMusicTrack('boss');
  grantMech();
  if (S.enemies.some(e => e.type === 'megalodon')) { showMsg('Megalodon already swimming…', 1200); return; }
  const fwd = playerForward(new THREE.Vector3());
  fwd.y = 0; fwd.normalize();
  const p = player.pos.clone().addScaledVector(fwd, 55);
  p.x = clamp(p.x, W.xMin + 15, W.xMax - 15);
  p.z = clamp(p.z, W.zMin + 15, W.zMax - 15);
  p.y = clamp(p.y, terrainH(p.x, p.z) + 4, W.yTop - 2);
  S.enemies.push(new Enemy('megalodon', p, S.scale));
}

function checkPortal() {
  if (!world.portalActive && S.kills >= world.def.kills) {
    const gate = world.def.bossGate;
    if (gate && S.enemies.some(e => e.type === gate)) return;   // mini-boss still alive
    world.portalActive = true;
    Sfx.portal();
    showMsg('✨ PORTAL OPEN — swim to the glowing gate! ✨', 3000);
  }
}
S.checkPortal = checkPortal;

function rescueCrab() {
  if (!S.player) return false;
  let best = null, bd = 8;
  for (const c of S.lostCrabs) {
    if (c.dead) continue;
    const d = c.pos.distanceTo(S.player.pos);
    if (d < bd) { bd = d; best = c; }
  }
  if (!best) return false;
  best.rescue();
  return true;
}

function tryPortal(key = false) {
  if (!world.portalActive) {
    if (key) showMsg(`Defeat the foes first! (${S.kills}/${world.def.kills})`, 1400);
    return;
  }
  if (player.pos.distanceTo(world.portal.pos) < 11) nextLevel();
}

function nextLevel() {
  Sfx.portal();
  Music.sting('fanfare');
  generateLevel(S.level + 1);
}

function respawn() {
  player.hp = 100; player.shield = 0;
  player.buffs.rapid = 0; player.buffs.speed = 0;
  player.shellCharges = 3;
  player.vel.set(0, 0, 0);
  player.pos.copy(player.spawn);
  dead = false;
  hideOverlay();
  canvas.requestPointerLock();
}

overlayBtn.onclick = startGame;
function startGame() {
  Sfx.init();
  if (Sfx.ctx) Sfx.ctx.resume();
  Music.init();
  if (Music.ctx) Music.ctx.resume();
  if (!gameStarted) {
    try {
      generateLevel(chosenLevel);
    } catch (err) {
      console.error('Failed to build level ' + chosenLevel, err);
      showOverlay('🦀 SOMETHING BROKE', 'See console for the error', 'TRY AGAIN');
      return;
    }
    gameStarted = true;
  } else if (dead) {
    respawn(); // hides overlay + re-locks pointer itself
    return;
  }
  hideOverlay();
  canvas.requestPointerLock();
}

// ---------------- level generation ----------------
let levelGroup = new THREE.Group();
scene.add(levelGroup);
let scenery = null;

function clearGroup(g) {
  scene.remove(g);
  g.traverse(o => {
    if (o.geometry) o.geometry.dispose();
    if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => m.dispose());
  });
}

function spawnPoint() {
  if (world.def.beach) return new THREE.Vector3(0, terrainH(0, 12) + 0.8, 12);
  const z = 25;
  return new THREE.Vector3(0, terrainH(0, z) + 3, z);
}

function generateLevel(n) {
  S.level = n; world.level = n;
  const idx = (n - 1) % LEVEL_DEFS.length;
  const loops = Math.floor((n - 1) / LEVEL_DEFS.length);
  world.def = { ...LEVEL_DEFS[idx] };
  world.def.name = loops > 0 ? `${LEVEL_DEFS[idx].name} ${loops + 1}` : LEVEL_DEFS[idx].name;
  world.def.kills = Math.max(1, Math.round(LEVEL_DEFS[idx].kills * (1 + loops * 0.5)));
  S.scale = 1 + 0.32 * (n - 1);
  S.scaleSpd = 1 + 0.07 * (n - 1);
  S.kills = 0;
  world.portalActive = false;

  // wipe entities
  for (const e of [...S.enemies]) { scene.remove(e.mesh); }
  S.enemies.length = 0;
  for (const f of [...S.friends]) { scene.remove(f.mesh); } S.friends.length = 0;
  for (const s of [...S.swarms]) { scene.remove(s.mesh); s.mesh.dispose?.(); } S.swarms.length = 0;
  for (const c of [...S.lostCrabs]) scene.remove(c.mesh); S.lostCrabs.length = 0;
  superCd = 0;
  for (const p of [...S.powerups]) scene.remove(p.mesh); S.powerups.length = 0;
  for (const t of [...S.turtles]) scene.remove(t.mesh); S.turtles.length = 0;
  for (const t of [...S.treasures]) scene.remove(t.mesh); S.treasures.length = 0;
  for (const p of [...S.projectiles]) scene.remove(p.mesh); S.projectiles.length = 0;
  for (const b of [...S.beams]) scene.remove(b.obj); S.beams.length = 0;
  for (const p of [...S.particles]) scene.remove(p.mesh); S.particles.length = 0;

  // rebuild scenery
  clearGroup(levelGroup);
  levelGroup = new THREE.Group();
  scene.add(levelGroup);
  scenery = buildLevelScenery(world.def, levelGroup);
  world.cave = scenery.cave;
  world.portal = scenery.portal;
  world.house = scenery.house;

  // treasures in the cave
  for (const t of scenery.caveTreasures) {
    S.treasures.push(new Treasure(new THREE.Vector3(t.x, terrainH(t.x, t.z) + 1, t.z)));
  }

  // fog / lights by depth
  const depth = -world.def.sandY;
  scene.fog.color.setHex(world.def.fog);
  scene.fog.density = world.def.fogD;
  scene.background.setHex(world.def.fog);
  const bright = clamp(1.15 - depth * 0.0032, 0.55, 1.15);
  hemi.intensity = bright;
  sun.intensity = world.def.beach ? 1.6 : clamp(1.2 - depth * 0.0038, 0.4, 1.2);

  // enemy spawns
  const counts = {};
  for (const [type, count] of Object.entries(LEVEL_DEFS[idx].spawn)) {
    counts[type] = count + (loops > 0 ? Math.floor(count * 0.5 * loops) : 0);
  }
  for (const [type, count] of Object.entries(counts)) {
    for (let i = 0; i < count; i++) {
      let x, z;
      if (type === 'squid' || type === 'megalodon' || type === 'greatwhite' || type === 'lavamega') { x = rand(-40, 40); z = rand(-340, -280); }
      else if (world.def.beach) { x = rand(-90, 90); z = rand(-210, -40); }
      else { x = rand(-160, 160); z = rand(W.zMin + 40, W.zMax - 20); }
      S.enemies.push(new Enemy(type, new THREE.Vector3(x, terrainH(x, z) + rand(2, 8), z), S.scale));
    }
  }
  // scattered power-ups
  for (let i = 0; i < world.def.power; i++) {
    const x = rand(-150, 150), z = rand(W.zMin + 30, W.zMax - 15);
    S.powerups.push(new Powerup(new THREE.Vector3(x, 1, z), POWERUP_KEYS[randInt(0, POWERUP_KEYS.length - 1)]));
  }
  // friendly sea turtles
  for (let i = 0; i < 3; i++) {
    const x = rand(-120, 120), z = rand(W.zMin + 60, W.zMax - 30);
    S.turtles.push(new Turtle(new THREE.Vector3(x, 1, z)));
  }
  // lost hermit crabs to rescue (2-4, scattered, away from the spawn)
  const lostCount = randInt(2, 4);
  for (let i = 0; i < lostCount; i++) {
    let x, z;
    do { x = rand(-150, 150); z = rand(W.zMin + 50, W.zMax - 40); }
    while (Math.hypot(x - spawnPoint().x, z - spawnPoint().z) < 25);
    S.lostCrabs.push(new LostCrab(new THREE.Vector3(x, terrainH(x, z) + 1, z)));
  }
  // player reset
  player.spawn = spawnPoint();
  player.pos.copy(player.spawn);
  player.vel.set(0, 0, 0);
  player.hp = 100; player.shield = 0;
  if (scenery.house) showMsg('🏠 Hermy’s pineapple house is in these waters — inside, NOTHING can hurt you', 4200);
  if (musicState !== null) setMusicTrack(world.def.boss ? 'boss' : 'game');
  player.shellCharges = Math.max(3, player.shellCharges);
  player.lastHurt = -99;
  for (const w of weapons) w.cd = 0;
  superCd = 0;
  S.yaw = 0; S.pitch = 0;
  ensureBossBar();
  Sfx.setAmbient(0);
  showMsg(`— Level ${S.level}: ${world.def.name} —`, 3200);
  if (world.def.beach) setTimeout(() => showMsg('Dive into the sea, Hermy! The monsters are waiting…', 3400), 3500);
  if (world.def.boss) {
    grantMech();
    setTimeout(() => showMsg('A colossal presence stirs in the deep…', 3000), 6000);
  }
}

// ---------------- player physics ----------------
function updatePlayer(dt, t) {
  const p = player;
  p.buffs.rapid = Math.max(0, p.buffs.rapid - dt);
  p.buffs.speed = Math.max(0, p.buffs.speed - dt);
  p.hurtFlash = Math.max(0, p.hurtFlash - dt * 2.2);
  for (const w of weapons) w.cd = Math.max(0, w.cd - dt);
  if (t - p.lastHurt > 5 && p.hp < 100) p.hp = Math.min(100, p.hp + 3 * dt);

  const underwater = p.pos.y < -0.5;
  S.underwater = underwater;

  let fw = 0, st = 0;
  if (keys['KeyW']) fw += 1;
  if (keys['KeyS']) fw -= 1;
  if (keys['KeyD']) st += 1;
  if (keys['KeyA']) st -= 1;
  const fx = -Math.sin(S.yaw), fz = -Math.cos(S.yaw);
  const rx = Math.cos(S.yaw), rz = -Math.sin(S.yaw);
  let wx = fx * fw + rx * st, wz = fz * fw + rz * st;
  const wl = Math.hypot(wx, wz);
  if (wl > 0) { wx /= wl; wz /= wl; }

  const burst = keys['ShiftLeft'] || keys['ShiftRight'];
  const speedMul = (burst ? 1.6 : 1) * (p.buffs.speed > 0 ? 1.4 : 1);
  const grounded = !underwater && p.pos.y <= terrainH(p.pos.x, p.pos.z) + 0.62;
  const accel = underwater ? 22 : (grounded ? 30 : 8);
  const drag = underwater ? 1.7 : (grounded ? 8 : 0.05);
  const maxSpd = (underwater ? 8 : 6) * speedMul * (S.mech ? 1.5 : 1);

  p.vel.x += wx * accel * dt;
  p.vel.z += wz * accel * dt;
  p.vel.multiplyScalar(Math.exp(-drag * dt));
  const hsp = Math.hypot(p.vel.x, p.vel.z);
  if (hsp > maxSpd) { p.vel.x *= maxSpd / hsp; p.vel.z *= maxSpd / hsp; }

  if (underwater) {
    if (keys['Space']) p.vel.y += 20 * dt;
    if (keys['ControlLeft'] || keys['KeyX']) p.vel.y -= 18 * dt;
    p.vel.y = clamp(p.vel.y, -8, 8);
  } else {
    p.vel.y -= 24 * dt;
    if (grounded && keys['Space']) p.vel.y = 9;
  }

  p.pos.addScaledVector(p.vel, dt);
  p.pos.x = clamp(p.pos.x, W.xMin + 2, W.xMax - 2);
  p.pos.z = clamp(p.pos.z, W.zMin + 2, W.zMax - 2);
  const th = terrainH(p.pos.x, p.pos.z);
  if (p.pos.y < th + 0.6) { p.pos.y = th + 0.6; if (p.vel.y < 0) p.vel.y = 0; }
  const ceilY = W.yTop + (world.def.beach ? 12 : 0);
  if (p.pos.y > ceilY) p.pos.y = ceilY;

  // hermy model animation
  p.mesh.visible = thirdPerson;
  p.mesh.position.copy(p.pos);
  if (hsp > 0.5) {
    p.mesh.rotation.y = Math.atan2(wx, wz) + Math.PI;
    p.mesh.position.y += Math.sin(t * 9) * 0.06 * clamp(hsp / 8, 0, 1);
  }
  p.mesh.userData.legs.forEach((leg, i) => {
    leg.rotation.x = Math.sin(t * 10 + i * Math.PI / 2) * 0.5 * clamp(hsp / 6, 0, 1);
  });
  // mech: propeller spin + bubble trail
  if (mechObj) {
    mechObj.userData.prop.rotation.z -= dt * (16 + hsp * 9);
    mechObj.userData.core.material.emissiveIntensity = 1.2 + Math.sin(t * 5) * 0.5;
    if (underwater && hsp > 1 && Math.random() < dt * 9) {
      const rear = p.pos.clone().addScaledVector(_fwdTmp.set(-wx / (wl || 1), 0, -wz / (wl || 1)), 1.1);
      spawnBurst(rear, 0xbfefff, 1, 1.2, 0.5);
    }
  }
  blasterFP.visible = !thirdPerson && player.weapon === 0;
  lavaFP.visible = !thirdPerson && player.weapon === 3;
  laserFP.visible = !thirdPerson && player.weapon === 4;
  flameFP.visible = !thirdPerson && player.weapon === 5;
}
const _fwdTmp = new THREE.Vector3();
const lavaFP = buildGunFP('lava');
const laserFP = buildGunFP('laser');
const flameFP = buildGunFP('flame');
camera.add(lavaFP); camera.add(laserFP); camera.add(flameFP);

// ---------------- damage / death ----------------
player.hurt = function(dmg, src) {
  if (dead) return;
  if (player.inHouse) return;   // the pineapple house is a true safe zone
  const p = player;
  if (p.shield > 0) {
    const s = Math.min(p.shield, dmg);
    p.shield -= s; dmg -= s;
  }
  if (dmg <= 0.1) return;
  p.hp -= dmg;
  p.lastHurt = S.t;
  p.hurtFlash = 1;
  Sfx.hurt();
  const kb = p.pos.clone().sub(src || p.pos).normalize().multiplyScalar(4);
  p.vel.add(kb);
  for (const tu of S.turtles) tu.react();
  if (p.hp <= 0) doDeath();
};

function doDeath() {
  dead = true;
  Sfx.death();
  Music.stop();
  Music.sting('sad');
  Music.play('menu');
  document.exitPointerLock();
  showOverlay('💀 DEVoured BY THE DEEP', `${world.def.name} — Score: ${S.score}`, 'RISE AGAIN');
  overlayBtn.onclick = () => { respawn(); setMusicTrack('game'); };
}

// ---------------- camera ----------------
const _fwd = new THREE.Vector3();
function updateCamera() {
  playerForward(_fwd);
  if (thirdPerson) {
    const back = _fwd.clone(); back.y = 0; back.normalize();
    const camPos = player.pos.clone().addScaledVector(back, -6.5);
    camPos.y += 2.2;
    camPos.y = Math.max(camPos.y, terrainH(camPos.x, camPos.z) + 0.4);
    camera.position.copy(camPos);
    camera.lookAt(player.pos.clone().addScaledVector(_fwd, 4).add(new THREE.Vector3(0, 1.1, 0)));
  } else {
    camera.position.copy(player.pos);
    camera.rotation.order = 'YXZ';
    camera.rotation.set(S.pitch, S.yaw, 0);
  }
}

// ---------------- main loop ----------------
let last = performance.now();
let ambState = -1;
renderer.setAnimationLoop((now) => {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  if (gameStarted && !paused && !dead && scenery) {
    S.t += dt;
    // music: switch to boss track while a mini-boss is alive
    if (bossCheckT <= 0) {
      bossCheckT = 0.8;
      const bossPresent = S.enemies.some(e => ['squid', 'megalodon', 'greatwhite', 'lavamega'].includes(e.type) && !e.dead);
      setMusicTrack(bossPresent ? 'boss' : 'game');
    }
    bossCheckT -= dt;
    updatePlayer(dt, S.t);
    if (mouseDown && player.weapon === 5) fireWeapon();   // hold to keep the flames going
    for (const e of [...S.enemies]) e.update(dt, S.t);
    for (const f of [...S.friends]) f.update(dt, S.t);
    for (const tu of S.turtles) tu.update(dt, S.t);
    for (const pw of [...S.powerups]) pw.update(dt, S.t);
    for (const tr of S.treasures) tr.update(dt, S.t);
    for (const c of [...S.lostCrabs]) c.update(dt, S.t);
    for (const sw of [...S.swarms]) sw.update(dt, S.t);
    if (superCd > 0) superCd -= dt;
    S.superCd = superCd;
    for (const pr of [...S.projectiles]) pr.update(dt);
    updateParticles(dt);
    updateBeams(dt);
    for (const b of S.beams) if (b.grow) b.obj.scale.setScalar(1 + (1 - b.life / b.max) * 6);
    updateScenery(scenery, S.t, dt);
    updateCamera();
    // ambient audio
    const stNow = S.underwater ? 1 : 0;
    if (stNow !== ambState) { ambState = stNow; Sfx.setAmbient(stNow); }
    if (S.underwater && Math.random() < dt * 0.8) Sfx.bubble();
    tryPortal();
    // pineapple house: true safe zone — nothing can hurt you inside
    if (world.house) {
      const inHouse = player.pos.distanceTo(world.house.position) < 7;
      if (inHouse !== player.inHouse) {
        player.inHouse = inHouse;
        if (inHouse) { houseMsgT = 0; showMsg('🏠 SAFE! You are home — nothing can hurt you here', 2400); Sfx.blip(300, 520, 0.2, 'sine', 0.18); }
      }
      if (inHouse) {
        houseMsgT -= dt;
        if (player.hp < 100) player.hp = Math.min(100, player.hp + 15 * dt);
        if (player.shield < 100) player.shield = Math.min(100, player.shield + 10 * dt);
        if (houseMsgT <= 0) { houseMsgT = 5; showMsg('🔥 Cozy! Resting by the fire… (TV on low)', 1800); }
      } else houseMsgT = 0;
    } else player.inHouse = false;
  }
  if (gameStarted) {
    updateHUD();
    drawMinimap();
    drawRadar();
    if (msgTimer > 0) { msgTimer -= dt; if (msgTimer <= 0) msgEl.style.opacity = 0; }
  }
  renderer.render(scene, camera);
});

// initial state
showOverlay('🦀 ATTACK OF THE SEA MONSTERS', 'Hermy the Hermit Crab vs. the deep', 'DIVE IN');
console.log('Hermy loaded. Awaiting the dive…');