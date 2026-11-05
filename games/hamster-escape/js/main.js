import * as THREE from 'three';
import { scene, renderer, game, clock, camera } from './game.js';
import { buildWorld, clearWorld, CAGE, HW } from './world.js';
import { player, updatePlayer } from './player.js';
import { makeGuard, guardAI } from './guards.js';
import { addPickup, updatePickups } from './pickups.js';
import { updateHud, setDoorTriggers } from './hud.js';
import { sfx } from './sfx.js';
import { updateWeapons, WEAPONS, current, setWeapon, resetAmmo, switchWeapon, startReload, fire } from './weapons.js';

// ---------- level data ----------
const LEVELS = [
  { theme: 'home', name: 'The House' },
  { theme: 'petshop', name: 'The Pet Shop' },
];

// [x, z, waypoints, size] — identical in both levels
// Six guinea pigs roam the house + one in the garden… and ONE GIANT guards the seed.
const GUARD_LIST = [
  [-15, -8, [[-15, -8], [-5, -8], [-5, -15], [-15, -15]], 1],
  [-6, 12, [[-6, 12], [-6, 17], [3, 17], [3, 12]], 1.1],
  [-13, 3, [[-13, 3], [-13, 8], [-3, 8]], 1.1],
  [8, -8, [[8, -8], [14, -8], [14, -2]], 1.2],
  [3, -12, [[3, -12], [7, -12], [7, -16], [3, -16]], 1.2],
  [5, 14, [[5, 14], [2, 14], [2, 8]], 1.1],
  [-12, 26, [[-12, 26], [12, 26], [12, 44], [-12, 44]], 1.3],
  // THE BIG ONE — size 4: 100 hp, 24 dmg/hit, fast, huge attack reach
  [0, 30, [[0, 30], [8, 36], [0, 42], [-8, 36]], 4],
];

// [type, x, z]
const PICKUP_LIST = [
  ['food', -6, -12], ['ammo', -8, -1],
  ['food', 12, -4], ['ammo', 3, -6],
  ['food', -2, 16], ['ammo', 12, 6],
  ['food', -16, 24], ['ammo', 16, 42], ['food', 0, 44],
];

let level = 0;

setDoorTriggers(
  new THREE.Vector3(CAGE.x + CAGE.size / 2, 1, CAGE.z),
  new THREE.Vector3(0, 1, HW)
);

function startLevel(i) {
  level = i;
  const L = LEVELS[i];

  // remove dynamic objects from the scene
  for (const g of game.guards) scene.remove(g.group);
  for (const p of game.pickups) scene.remove(p.mesh);
  for (const p of game.projectiles) scene.remove(p.mesh);
  for (const e of game.explosions) scene.remove(e.mesh);

  clearWorld();
  buildWorld(L.theme);

  for (const [x, z, wp, size] of GUARD_LIST) makeGuard(x, z, wp, size);
  for (const [t, x, z] of PICKUP_LIST) addPickup(t, x, z);

  // reset player + weapons
  setWeapon('spitter');
  resetAmmo();
  player.pos.set(CAGE.x, 0.4, CAGE.z);
  player.vel.set(0, 0, 0);
  player.health = player.maxHealth;
  player.alive = true;
  player.kills = 0;
  player.yaw = -Math.PI / 2;
  player.pitch = 0;
  game.won = false;

  document.getElementById('levelTag').textContent =
    `LEVEL ${i + 1}/${LEVELS.length} — ${L.name}`;
  ['startScreen', 'winScreen', 'deadScreen', 'levelScreen'].forEach(id =>
    document.getElementById(id).classList.add('hidden'));
  updateHud();
}

// ---------- input ----------
const keys = {};
addEventListener('keydown', (e) => {
  keys[e.code] = true;
  // start the game on any movement key too (in case the click never landed)
  if (!game.started && ['KeyW', 'KeyA', 'KeyS', 'KeyD', 'Space', 'KeyE'].includes(e.code)) tryStart();
  if (e.code === 'Digit1') switchWeapon('nibbler');
  if (e.code === 'Digit2') switchWeapon('spitter');
  if (e.code === 'Digit3') switchWeapon('blaster');
  if (e.code === 'Digit4') switchWeapon('wheel');
  if (e.code === 'KeyR') {
    if (!player.alive || game.won) location.reload();
    else startReload();
  }
  if (e.code === 'KeyE') tryUseDoor();
});
addEventListener('keyup', (e) => keys[e.code] = false);

let mouseDown = false;
addEventListener('mousedown', (e) => {
  if (!game.started || !player.alive) return;
  mouseDown = true;
  if (!WEAPONS[current].auto) fire();
});
addEventListener('mouseup', () => mouseDown = false);

const startScreen = document.getElementById('startScreen');
const levelScreen = document.getElementById('levelScreen');
const mouseHint = document.getElementById('mouseHint');

function tryLock() {
  try {
    const r = renderer.domElement.requestPointerLock();
    if (r && r.catch) r.catch(() => {}); // Firefox: promise, may be denied
  } catch (e) { /* pointer lock unavailable — drag-look still works */ }
}

function tryStart() {
  if (game.started) return;
  game.started = true;
  player.start = clock.elapsedTime;
  startScreen.classList.add('hidden');
  tryLock();
}

startScreen.addEventListener('click', () => { tryStart(); tryLock(); });
// click the world to (re)grab the mouse if the lock was released
renderer.domElement.addEventListener('click', () => {
  if (game.started && !game.won && player.alive && !game.locked) tryLock();
});
levelScreen.addEventListener('click', () => {
  if (game.won && level < LEVELS.length - 1) {
    startLevel(level + 1);
    tryLock();
  }
});
renderer.domElement.addEventListener('pointerlockerror', () => {
  if (game.started) {
    // keep playing in drag-look mode; just tell the user
    if (mouseHint) mouseHint.classList.remove('hidden');
    return;
  }
  const t = startScreen.querySelector('h1');
  if (t) t.textContent = 'POINTER LOCK UNAVAILABLE';
  const ps = startScreen.querySelectorAll('p');
  if (ps.length) ps[ps.length - 1].innerHTML =
    'Click to play anyway — <b>click and drag</b> to look around.';
});
document.addEventListener('pointerlockchange', () => {
  game.locked = document.pointerLockElement === renderer.domElement;
  if (mouseHint) mouseHint.classList.toggle('hidden', game.locked || !game.started);
  if (!game.started) {
    if (game.locked) { game.started = true; player.start = clock.elapsedTime; startScreen.classList.add('hidden'); }
    return;
  }
  // lock released (Esc / alt-tab): keep playing — drag-look stays live, hint asks to click
});
document.addEventListener('mousemove', (e) => {
  if (!game.started) return;
  if (game.locked || mouseDown) { // locked: always; unlocked: click-drag to look
    player.yaw -= e.movementX * 0.0022;
    player.pitch = Math.max(-1.45, Math.min(1.45, player.pitch - e.movementY * 0.0022));
  }
});

// ---------- doors ----------
function tryUseDoor() {
  if (!player.alive || game.won || !game.started) return;
  if (!game.cageDoorOpen &&
      player.pos.distanceTo(new THREE.Vector3(CAGE.x + CAGE.size / 2, 1, CAGE.z)) < 1.6) {
    game.cageDoorOpen = true;
    sfx('door');
    removeDoorBlock(game.cage);
    game.doors.push({ mesh: game.cage.door, t: 0 });
  }
  if (!game.frontDoorOpen &&
      player.pos.distanceTo(new THREE.Vector3(0, 1, HW)) < 1.8) {
    game.frontDoorOpen = true;
    sfx('door');
    removeDoorBlock(game.frontDoor);
    game.doors.push({ mesh: game.frontDoor.door, t: 0 });
  }
}
function removeDoorBlock({ door, box }) {
  game.colliders.splice(game.colliders.indexOf(box), 1);
  game.blockers.splice(game.blockers.indexOf(door), 1);
}

// ---------- main loop ----------
function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = clock.elapsedTime;

  if (game.started && player.alive && !game.won) {
    updatePlayer(dt, keys);
    if (mouseDown && WEAPONS[current].auto) fire();
  }

  for (const g of game.guards) guardAI(g, dt);

  for (const d of game.doors) {
    d.t = Math.min(1, d.t + dt * 2.2);
    d.mesh.rotation.y = -d.t * Math.PI * 0.6;
    if (d.t >= 1) d.mesh.visible = false;
  }

  if (game.seed) {
    const s = 1 + Math.sin(t * 2) * 0.05;
    game.seed.scale.set(s, 1.8 * s, s);
    game.seed.rotation.y += dt * 0.5;
    game.seedLight.intensity = 1.6 + Math.sin(t * 3) * 0.6;
    if (game.seedGlow) game.seedGlow.rotation.z += dt;
  }

  updateWeapons(dt);
  updatePickups(dt);

  // level complete?
  if (player.alive && !game.won &&
      Math.hypot(player.pos.x - game.seedPos.x, player.pos.z - game.seedPos.z) < 2.5 &&
      player.pos.y < 3) {
    game.won = true;
    sfx('win');
    const L = LEVELS[level];
    const total = t - player.start;
    const m = (total / 60) | 0, s = (total % 60) | 0;
    if (level < LEVELS.length - 1) {
      document.getElementById('levelName').textContent =
        `${L.name} complete — ${m}:${String(s).padStart(2, '0')}`;
      document.getElementById('levelNext').textContent =
        `Next: ${LEVELS[level + 1].name}  (click to continue)`;
      levelScreen.classList.remove('hidden');
    } else {
      document.getElementById('winStats').innerHTML =
        `Time: ${m}:${String(s).padStart(2, '0')} &nbsp;•&nbsp; Guards bonked: ${player.kills} / ${game.guards.length}`;
      document.getElementById('winScreen').classList.remove('hidden');
    }
    document.exitPointerLock();
  }

  updateHud();
  renderer.render(scene, camera);
}

startLevel(0);
animate();
