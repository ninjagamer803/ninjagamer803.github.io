import * as THREE from 'three';
import { scene, game, clock } from './game.js';
import { player } from './player.js';
import { WEAPONS } from './weapons.js';
import { sfx } from './sfx.js';
import { updateHud } from './hud.js';

export function addPickup(type, x, z) {
  let mesh;
  if (type === 'food') {
    mesh = new THREE.Group();
    const apple = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 10),
      new THREE.MeshLambertMaterial({ color: 0xe53935 }));
    apple.position.y = 0.35;
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.14, 6),
      new THREE.MeshLambertMaterial({ color: 0x6d4c41 }));
    stem.position.y = 0.62;
    mesh.add(apple, stem);
  } else { // ammo crate
    mesh = new THREE.Group();
    const box = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.4, 0.6),
      new THREE.MeshLambertMaterial({ color: 0x689f38 }));
    box.position.y = 0.3;
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.12, 0.62),
      new THREE.MeshLambertMaterial({ color: 0xfff176 }));
    stripe.position.y = 0.3;
    mesh.add(box, stripe);
  }
  mesh.position.set(x, 0, z);
  mesh.traverse(o => { o.castShadow = true; });
  scene.add(mesh);
  game.pickups.push({ mesh, type });
}

export function updatePickups(dt) {
  const t = clock.elapsedTime;
  for (let i = game.pickups.length - 1; i >= 0; i--) {
    const p = game.pickups[i];
    p.mesh.rotation.y += dt * 1.5;
    p.mesh.position.y = Math.sin(t * 2 + i) * 0.1 + 0.05;

    if (!player.alive || game.won) continue;
    const d = player.pos.distanceTo(p.mesh.position);
    if (d < 0.9) {
      if (p.type === 'food') {
        player.health = Math.min(player.maxHealth, player.health + 30);
      } else {
        WEAPONS.spitter.reserve += 30;
        WEAPONS.blaster.reserve += 60;
        WEAPONS.wheel.reserve += 1;
      }
      sfx('pickup');
      scene.remove(p.mesh);
      game.pickups.splice(i, 1);
      updateHud();
    }
  }
}
