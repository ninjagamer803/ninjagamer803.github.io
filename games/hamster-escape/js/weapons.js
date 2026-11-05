import * as THREE from 'three';
import { scene, game, clock, camera } from './game.js';
import { player, viewmodel } from './player.js';
import { damageGuard } from './guards.js';
import { sfx } from './sfx.js';

export const WEAPONS = {
  nibbler: { name: 'Nibbler 🦷', dmg: 18, range: 1.4, rate: 0.45, auto: false, melee: true,
             ammo: Infinity, reserve: Infinity, speed: 0, spread: 0, sound: 'melee' },
  spitter: { name: 'Seed Spitter', dmg: 11, rate: 0.28, auto: false, mag: 20,
             ammo: 20, reserve: 60, speed: 30, spread: 0.01, sound: 'spit', tracer: 0xd8ff7a },
  blaster: { name: 'Pellet Blaster', dmg: 8, rate: 0.11, auto: true, mag: 30,
             ammo: 30, reserve: 90, speed: 60, spread: 0.03, sound: 'blast', tracer: 0xffe082 },
  wheel:   { name: 'Wheel of Doom', dmg: 60, rate: 1.1, auto: false, mag: 1,
             ammo: 1, reserve: 2, speed: 14, spread: 0, explosive: true, blast: 3, sound: 'wheel', tracer: 0xffa040 },
};

export let current = 'spitter'; // start with basic weapon
let fireTimer = 0;
let reloadTimer = 0;

const _ray = new THREE.Raycaster();

function rebuildViewmodel() {
  viewmodel.clear();
  viewmodel.add(buildGunModel(current));
}

export function setWeapon(key) {
  current = key;
  fireTimer = 0.25;
  reloadTimer = 0;
  rebuildViewmodel();
}

export function resetAmmo() {
  WEAPONS.spitter.ammo = 20; WEAPONS.spitter.reserve = 60;
  WEAPONS.blaster.ammo = 30; WEAPONS.blaster.reserve = 90;
  WEAPONS.wheel.ammo = 1; WEAPONS.wheel.reserve = 2;
}

export function switchWeapon(key) {
  if (!WEAPONS[key] || key === current) return;
  setWeapon(key);
}

export function buildGunModel(key) {
  const g = new THREE.Group();
  const dark = new THREE.MeshLambertMaterial({ color: 0x5d4037 });
  const orange = new THREE.MeshLambertMaterial({ color: 0xff8f3c });
  if (key === 'nibbler') {
    const tooth = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.18, 8),
      new THREE.MeshLambertMaterial({ color: 0xfffbe8 }));
    tooth.rotation.x = -Math.PI / 2;
    tooth.position.set(0, 0, -0.35);
    g.add(tooth);
  } else if (key === 'spitter') {
    const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.06, 0.4, 10), orange);
    tube.rotation.x = Math.PI / 2;
    tube.position.set(0, -0.02, -0.32);
    g.add(tube);
  } else if (key === 'blaster') {
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.14, 0.45), dark);
    body.position.set(0, -0.02, -0.35);
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.3, 10), orange);
    barrel.rotation.x = Math.PI / 2;
    barrel.position.set(0, 0.02, -0.55);
    g.add(body, barrel);
  } else { // wheel
    const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.04, 10, 20), orange);
    wheel.position.set(0, -0.05, -0.35);
    g.add(wheel);
  }
  return g;
}

export function startReload() {
  const w = WEAPONS[current];
  if (w.melee || reloadTimer > 0) return;
  if (w.ammo >= w.mag || w.reserve <= 0) return;
  reloadTimer = 1.2;
  sfx('reload');
}

function finishReload() {
  const w = WEAPONS[current];
  const take = Math.min(w.mag - w.ammo, w.reserve);
  w.ammo += take;
  w.reserve -= take;
}

export function fire() {
  const w = WEAPONS[current];
  if (fireTimer > 0 || reloadTimer > 0 || !player.alive) return;
  if (w.ammo <= 0) { startReload(); return; }
  fireTimer = w.rate;
  if (!w.melee) w.ammo--;

  const dir = new THREE.Vector3(0, 0, -1)
    .applyEuler(new THREE.Euler(player.pitch, player.yaw, 0, 'YXZ'));
  dir.x += (Math.random() - 0.5) * w.spread;
  dir.y += (Math.random() - 0.5) * w.spread;
  dir.normalize();

  sfx(w.sound);
  game.lastNoise = { pos: player.pos.clone(), time: clock.elapsedTime, loud: w.explosive ? 40 : 22 };

  if (w.melee) {
    const origin = player.pos.clone().add(new THREE.Vector3(0, 0.9, 0));
    for (const g of game.guards) {
      if (g.dead) continue;
      const toG = g.group.position.clone().add(new THREE.Vector3(0, 0.5 * g.size, 0)).sub(origin);
      const dist = toG.length();
      if (dist < w.range + g.size && toG.normalize().dot(dir) > 0.55) {
        damageGuard(g, w.dmg);
      }
    }
    return;
  }

  let mesh;
  if (w.explosive) {
    mesh = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.06, 8, 16),
      new THREE.MeshBasicMaterial({ color: w.tracer }));
  } else {
    // bright glowing tracer streak, oriented along the flight direction
    const len = Math.min(3, w.speed * 0.05);
    mesh = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, len),
      new THREE.MeshBasicMaterial({ color: w.tracer, transparent: true, opacity: 0.95 }));
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir);
  }
  mesh.position.copy(player.pos).add(new THREE.Vector3(0, 1.2, 0)).addScaledVector(dir, 0.4);
  scene.add(mesh);
  game.projectiles.push({ mesh, vel: dir.clone().multiplyScalar(w.speed), w, life: 5, spin: w.explosive ? 14 : 2 });
}

export function updateWeapons(dt) {
  fireTimer = Math.max(0, fireTimer - dt);
  if (reloadTimer > 0) {
    reloadTimer -= dt;
    if (reloadTimer <= 0) finishReload();
  }

  // projectiles
  for (let i = game.projectiles.length - 1; i >= 0; i--) {
    const p = game.projectiles[i];
    p.life -= dt;
    if (!p.w.explosive) {
      p.vel.y -= 3 * dt; // seeds arc a little
      p.mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), p.vel.clone().normalize());
    }
    if (p.w.explosive) p.mesh.rotation.y += p.spin * dt;

    const from = p.mesh.position.clone();
    p.mesh.position.addScaledVector(p.vel, dt);
    const to = p.mesh.position.clone();

    let hit = p.life <= 0 || to.y < 0.02;

    if (!hit) {
      // hit a guard?
      for (const g of game.guards) {
        if (g.dead) continue;
        const gp = g.group.position.clone().add(new THREE.Vector3(0, 0.5 * g.size, 0));
        if (to.distanceTo(gp) < 0.7 * g.size + 0.4) { hit = true; p.hitGuard = g; break; }
      }
    }
    if (!hit && p.vel.lengthSq() > 0) {
      // hit world?
      const dir = to.clone().sub(from);
      const len = dir.length();
      if (len > 0) {
        _ray.set(from, dir.normalize());
        _ray.far = len;
        if (_ray.intersectObjects(game.blockers, false).length > 0) hit = true;
      }
    }

    if (hit) {
      if (p.w.explosive) explode(to, p.w);
      else if (p.hitGuard) damageGuard(p.hitGuard, p.w.dmg);
      scene.remove(p.mesh);
      game.projectiles.splice(i, 1);
    }
  }

  // explosion flashes
  for (let i = game.explosions.length - 1; i >= 0; i--) {
    const e = game.explosions[i];
    e.t += dt;
    const k = e.t / 0.35;
    if (k >= 1) { scene.remove(e.mesh); game.explosions.splice(i, 1); }
    else e.mesh.scale.setScalar(0.5 + k * e.w.blast * 1.6);
  }
}

function explode(pos, w) {
  sfx('boom');
  game.lastNoise = { pos: pos.clone(), time: clock.elapsedTime, loud: 45 };
  const flash = new THREE.Mesh(new THREE.SphereGeometry(1, 12, 10),
    new THREE.MeshBasicMaterial({ color: 0xffc94d, transparent: true, opacity: 0.9 }));
  flash.position.copy(pos);
  scene.add(flash);
  game.explosions.push({ mesh: flash, t: 0, w });
  for (const g of game.guards) {
    if (g.dead) continue;
    const gp = g.group.position.clone().add(new THREE.Vector3(0, 0.5 * g.size, 0));
    if (gp.distanceTo(pos) < w.blast + g.size) damageGuard(g, w.dmg);
  }
}
