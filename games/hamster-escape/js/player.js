import * as THREE from 'three';
import { scene, camera, game, clock } from './game.js';
import { buildGunModel, switchWeapon, startReload, fire, updateWeapons, current } from './weapons.js';
import { CAGE } from './world.js';

export const player = {
  pos: new THREE.Vector3(CAGE.x, 0.4, CAGE.z),
  vel: new THREE.Vector3(),
  onGround: false,
  crouched: false,
  health: 100,
  maxHealth: 100,
  radius: 0.38,
  height: 1.6,
  yaw: -Math.PI / 2,   // start facing the cage door (+x)
  pitch: 0,
  alive: true,
  damageFlash: 0,
  kills: 0,
  start: 0,
};

// camera rig
const yawObj = new THREE.Object3D();
yawObj.add(camera);
scene.add(yawObj);

// viewmodel: just the weapon
export const viewmodel = new THREE.Group();
viewmodel.position.set(0, -0.15, -0.45);
camera.add(viewmodel);
viewmodel.add(buildGunModel(current));

// third-person hamster body (only visible in 3rd person cam)
const charModel = new THREE.Group();
{
  const fur = new THREE.MeshLambertMaterial({ color: 0xd8a56a });
  const cream = new THREE.MeshLambertMaterial({ color: 0xf5e9d0 });
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.32, 16, 12), fur);
  body.scale.set(0.9, 0.75, 1.15);
  body.position.y = 0.35;
  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.26, 12, 10), cream);
  belly.scale.set(0.8, 0.6, 1.1);
  belly.position.set(0, 0.28, 0.08);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 14, 10), fur);
  head.position.set(0, 0.55, 0.35);
  const earL = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 8), cream);
  earL.position.set(-0.12, 0.72, 0.3);
  const earR = earL.clone(); earR.position.x = 0.12;
  const tail = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 8), cream);
  tail.position.set(0, 0.4, -0.4);
  charModel.add(body, belly, head, earL, earR, tail);
  charModel.traverse(o => { o.castShadow = true; });
}
charModel.visible = false;
scene.add(charModel);

// camera modes: 0 = 1st person (weapon), 1 = 1st person (clean), 2 = 3rd person
export let camMode = 0;
addEventListener('keydown', (e) => {
  if (e.code === 'KeyV') camMode = (camMode + 1) % 3;
});

export function hurt(dmg) {
  if (!player.alive || game.won) return;
  player.health -= dmg;
  player.damageFlash = 1;
  if (player.health <= 0) {
    player.health = 0;
    player.alive = false;
    document.getElementById('deadScreen').classList.remove('hidden');
    document.exitPointerLock();
  }
}

export function updatePlayer(dt, keys) {
  if (!game.started || !player.alive || game.won) return;

  player.crouched = !!(keys['ControlLeft'] || keys['KeyC']);
  const sprint = keys['ShiftLeft'] && !player.crouched;
  const speed = player.crouched ? 1.6 : (sprint ? 6 : 3.6);

  const f = new THREE.Vector3(-Math.sin(player.yaw), 0, -Math.cos(player.yaw));
  const r = new THREE.Vector3(-f.z, 0, f.x);
  const wish = new THREE.Vector3();
  if (keys['KeyW']) wish.add(f);
  if (keys['KeyS']) wish.sub(f);
  if (keys['KeyD']) wish.add(r);
  if (keys['KeyA']) wish.sub(r);
  if (wish.lengthSq() > 0) wish.normalize().multiplyScalar(speed);

  player.vel.x += (wish.x - player.vel.x) * Math.min(1, dt * 10);
  player.vel.z += (wish.z - player.vel.z) * Math.min(1, dt * 10);
  player.vel.y -= 22 * dt;
  if (keys['Space'] && player.onGround) { player.vel.y = 8; player.onGround = false; }

  player.pos.addScaledVector(player.vel, dt);
  if (player.pos.y <= 0) { player.pos.y = 0; player.vel.y = 0; player.onGround = true; }
  player.pos.x = Math.max(-55, Math.min(55, player.pos.x));
  player.pos.z = Math.max(-55, Math.min(55, player.pos.z));
  collide();

  // camera
  const eyeH = player.crouched ? 0.9 : 1.55;
  const moving = wish.lengthSq() > 0 && player.onGround;
  const bob = moving ? Math.sin(clock.elapsedTime * (sprint ? 13 : 9)) * 0.04 : 0;
  yawObj.position.set(player.pos.x, player.pos.y + (camMode === 2 ? 1.1 : eyeH) + bob, player.pos.z);
  yawObj.rotation.set(0, player.yaw, 0);
  if (camMode === 2) {
    camera.position.set(0, 1.2, 2.4);
    camera.rotation.set(-0.28, 0, 0);
    viewmodel.visible = false;
    charModel.visible = true;
    charModel.position.set(player.pos.x, player.pos.y, player.pos.z);
    charModel.rotation.y = player.yaw;
  } else {
    camera.position.set(0, 0, 0);
    camera.rotation.set(player.pitch, 0, 0);
    viewmodel.visible = camMode === 0;
    charModel.visible = false;
  }
  viewmodel.position.set(0, -0.15 + bob * 0.5, -0.45);
  viewmodel.rotation.set(0, 0, moving ? Math.sin(clock.elapsedTime * 9) * 0.03 : 0);

  player.damageFlash = Math.max(0, player.damageFlash - dt * 2);

  updateWeapons(dt);
}

// push the player out of solid boxes (capsule approximated as a column of spheres)
function collide() {
  const r = player.radius;
  const h = player.crouched ? 1.0 : player.height;
  for (let iter = 0; iter < 3; iter++) {
    for (const bb of game.colliders) {
      if (player.pos.y > bb.max.y || player.pos.y + h < bb.min.y) continue;
      const px = Math.max(bb.min.x, Math.min(player.pos.x, bb.max.x));
      const pz = Math.max(bb.min.z, Math.min(player.pos.z, bb.max.z));
      let dx = player.pos.x - px, dz = player.pos.z - pz;
      if (dx === 0 && dz === 0) {
        // inside the box: pop up (or out if the box is tall)
        if (player.pos.y + h > bb.min.y + 0.3) player.pos.y = Math.max(player.pos.y, bb.max.y + 0.01);
        else player.pos.x += (player.pos.x > (bb.min.x + bb.max.x) / 2 ? 1 : -1) * (r + 0.05);
        continue;
      }
      const d2 = dx * dx + dz * dz;
      if (d2 < r * r && d2 > 1e-8) {
        const d = Math.sqrt(d2);
        player.pos.x += (dx / d) * (r - d);
        player.pos.z += (dz / d) * (r - d);
      }
    }
  }
}

export function inCage() {
  const { x, z, size } = CAGE;
  return Math.abs(player.pos.x - x) < size / 2 && Math.abs(player.pos.z - z) < size / 2 && player.pos.y < 2.3;
}

// re-export so main can drive firing
export { switchWeapon, startReload, fire };
