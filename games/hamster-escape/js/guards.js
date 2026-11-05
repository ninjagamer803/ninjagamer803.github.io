import * as THREE from 'three';
import { scene, game, clock } from './game.js';
import { player, hurt as playerHurt } from './player.js';
import { sfx } from './sfx.js';
import { HW } from './world.js';

const mats = {
  body:  new THREE.MeshLambertMaterial({ color: 0x8d6e63 }),
  white: new THREE.MeshLambertMaterial({ color: 0xf5f0e6 }),
  nose:  new THREE.MeshLambertMaterial({ color: 0xff8fa3 }),
  cap:   new THREE.MeshLambertMaterial({ color: 0x37474f }),
};

export function makeGuard(x, z, waypoints, size = 1) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.7 * size, 0.5 * size, 1.1 * size), mats.body);
  body.position.y = 0.35 * size;
  body.castShadow = true;
  const patch = new THREE.Mesh(new THREE.BoxGeometry(0.5 * size, 0.52 * size, 0.6 * size), mats.white);
  patch.position.set(0, 0.36 * size, 0.1);
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.45 * size, 0.45 * size, 0.5 * size), mats.body);
  head.position.set(0, 0.5 * size, 0.75 * size);
  const nose = new THREE.Mesh(new THREE.BoxGeometry(0.14 * size, 0.12 * size, 0.1 * size), mats.nose);
  nose.position.set(0, 0.48 * size, 1.03 * size);
  const earL = new THREE.Mesh(new THREE.BoxGeometry(0.12 * size, 0.16 * size, 0.1 * size), mats.white);
  earL.position.set(-0.18 * size, 0.8 * size, 0.7 * size);
  const earR = earL.clone(); earR.position.x = 0.18 * size;
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.26 * size, 0.26 * size, 0.14 * size, 12), mats.cap);
  cap.position.set(0, 0.76 * size, 0.75 * size);
  g.add(body, patch, head, nose, earL, earR, cap);
  g.position.set(x, 0.15, z);
  scene.add(g);

  const guard = {
    group: g,
    parts: [body, patch, head, nose, earL, earR, cap],
    size,
    health: Math.round(25 * size),
    maxHealth: Math.round(25 * size),
    state: 'patrol',
    stateTimer: 0,
    waypoints,
    wp: 0,
    speed: 1.6 + 0.25 * (size - 1),   // regulars 1.6, giants get quicker
    attackCd: 0,
    dead: false,
    deathT: 0,
    investigatePos: null,
  };
  body.userData.guard = guard;
  head.userData.guard = guard;
  game.blockers.push(body, head);
  game.guards.push(guard);
  return guard;
}

const _rc = new THREE.Raycaster();

export function guardAI(g, dt) {
  if (g.dead) {
    g.deathT += dt;
    g.group.rotation.x = -Math.PI / 2 * Math.min(1, g.deathT * 2);
    g.group.position.y = Math.max(0.02, 0.15 - g.deathT * 0.3);
    return;
  }

  const eye = g.group.position.clone().add(new THREE.Vector3(0, 0.6 * g.size, 0));
  const pPos = player.pos.clone().add(new THREE.Vector3(0, 0.9, 0));
  const toPlayer = pPos.clone().sub(eye);
  const dist = toPlayer.length();

  // sight: cone + LOS raycast (crouched players are harder to spot)
  let sees = false;
  if (player.alive && dist < (player.crouched ? 5 : 11)) {
    const fwd = new THREE.Vector3(0, 0, 1).applyQuaternion(g.group.quaternion);
    if (fwd.dot(toPlayer.clone().normalize()) > Math.cos(THREE.MathUtils.degToRad(60))) {
      _rc.set(eye, toPlayer.clone().normalize());
      _rc.far = dist;
      sees = _rc.intersectObjects(game.blockers, false).length === 0;
    }
  }
  if (sees && g.state !== 'chase') { g.state = 'chase'; sfx('alert'); }

  // hearing
  const noiseAge = clock.elapsedTime - game.lastNoise.time;
  if (!sees && noiseAge < 1.2 && dist < game.lastNoise.loud && g.state === 'patrol') {
    g.state = 'investigate';
    g.investigatePos = game.lastNoise.pos.clone();
    g.stateTimer = 4;
  }

  g.attackCd -= dt;

  switch (g.state) {
    case 'patrol': {
      if (sees) { g.state = 'chase'; sfx('alert'); break; }
      const wp = g.waypoints[g.wp];
      moveToward(g, new THREE.Vector3(wp[0], 0.15, wp[1]), g.speed, dt);
      if (g.group.position.distanceTo(new THREE.Vector3(wp[0], 0.15, wp[1])) < 0.3) {
        g.wp = (g.wp + 1) % g.waypoints.length;
      }
      break;
    }
    case 'investigate': {
      if (sees) { g.state = 'chase'; sfx('alert'); break; }
      if (g.investigatePos) {
        moveToward(g, g.investigatePos, g.speed * 1.5, dt);
        if (g.group.position.distanceTo(g.investigatePos) < 0.6) g.investigatePos = null;
      }
      g.stateTimer -= dt;
      if (g.stateTimer <= 0 || !g.investigatePos) g.state = 'patrol';
      break;
    }
    case 'chase': {
      if (!sees) { g.state = 'patrol'; break; }
      moveToward(g, pPos, 2.8 + 0.25 * g.size, dt); // giants close in faster
      if (dist < 1.1 + g.size * 0.35 && g.attackCd <= 0) {
        g.attackCd = 1.2;
        sfx('playerhurt');
        playerHurt(8 + g.size * 4);
      }
      break;
    }
  }

  // hop bob
  g.group.position.y = 0.15 + Math.abs(Math.sin(clock.elapsedTime * 8 + g.wp * 2)) * 0.05;
}

function resolveGuardCollision(g) {
  // sphere vs world boxes: guards can't walk through walls, cages, furniture
  const p = g.group.position;
  const rr = 0.45 * g.size;
  const top = p.y + 0.9 * g.size;
  for (let it = 0; it < 2; it++) {
    for (const bb of game.colliders) {
      if (p.y > bb.max.y || top < bb.min.y) continue;
      const px = Math.max(bb.min.x, Math.min(p.x, bb.max.x));
      const pz = Math.max(bb.min.z, Math.min(p.z, bb.max.z));
      const dx = p.x - px, dz = p.z - pz;
      const d2 = dx * dx + dz * dz;
      if (d2 < rr * rr && d2 > 1e-8) {
        const d = Math.sqrt(d2);
        p.x += (dx / d) * (rr - d);
        p.z += (dz / d) * (rr - d);
      }
    }
  }
}

function moveToward(g, target, speed, dt) {
  const dir = target.clone().sub(g.group.position);
  dir.y = 0;
  const len = dir.length();
  if (len < 0.05) return;
  dir.normalize();

  const before = g.group.position.clone();
  g.group.position.addScaledVector(dir, speed * dt);

  // stay inside the house when indoors (guards don't leave via the door)
  const p = g.group.position;
  const inside = Math.abs(p.x) < HW && p.z < HW;
  if (inside) {
    if (p.x < -HW + 0.6) p.x = -HW + 0.6;
    if (p.x > HW - 0.6) p.x = HW - 0.6;
    if (p.z < -HW + 0.6) p.z = -HW + 0.6;
    if (p.z > HW - 0.6) p.z = HW - 0.6;
    // slide around interior dividers
    // x=0 divider: doorway z 8..12, open gap z 15..18
    if (Math.abs(p.x) < 0.55 && !(Math.abs(p.z - 10) < 2.2 || p.z > 14.5)) {
      p.x += (p.x > 0 ? 0.55 : -0.55) * Math.min(1, dt * 8);
    }
    // west z=0 divider, doorway x -9..-7
    if (Math.abs(p.z) < 0.55 && p.x < 0 && !(p.x > -9.5 && p.x < -6.5)) {
      p.z += (p.z > 0 ? 1 : -1) * 0.55 * Math.min(1, dt * 8);
    }
    // east z=0 divider, doorway x 7..9
    if (Math.abs(p.z) < 0.55 && p.x > 0 && !(p.x > 6.5 && p.x < 9.5)) {
      p.z += (p.z > 0 ? 1 : -1) * 0.55 * Math.min(1, dt * 8);
    }
    // x=9 dividers (living|study, bedroom|nursery), doorways z -8..-6 and z 8..10
    if (Math.abs(p.x - 9) < 0.55 && !(Math.abs(p.z + 7) < 2.4 || Math.abs(p.z - 9) < 2.4)) {
      p.x += (p.x > 9 ? 0.55 : -0.55) * Math.min(1, dt * 8);
    }
  }

  // stuck? (blocked by a wall we can't slide past) → dodge sideways
  const moved = p.distanceTo(before);
  g._stuckT = (moved < speed * dt * 0.4) ? g._stuckT + dt : 0;
  if (g._stuckT > 0.5) { g._stuckT = 0; g._dodgeT = 0.6; g._dodgeDir = -g._dodgeDir; }
  if (g._dodgeT > 0) {
    g._dodgeT -= dt;
    const a = Math.atan2(dir.x, dir.z) + (g._dodgeDir > 0 ? 1 : -1) * Math.PI / 2;
    p.x += Math.sin(a) * speed * dt;
    p.z += Math.cos(a) * speed * dt;
  }

  resolveGuardCollision(g);
  g.group.rotation.y = Math.atan2(dir.x, dir.z);
}

export function damageGuard(g, dmg) {
  if (g.dead) return;
  g.health -= dmg;
  sfx('hurt');
  if (g.health <= 0) {
    g.dead = true;
    g.deathT = 0;
    g.state = 'dead';
    player.kills++;
    sfx('kill');
  } else if (g.state !== 'chase') {
    g.state = 'chase';
    sfx('alert');
  }
}
