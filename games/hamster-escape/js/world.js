import * as THREE from 'three';
import { scene, game } from './game.js';

export const HW = 18;
export const HH = 4.8;
export let CAGE = { x: -13, z: -4.5, size: 4.5 };

// ---------- themes ----------
const THEMES = {
  home: {
    name: 'The House',
    floor: 0xc8a165, wall: 0xf5e6d0, wallIn: 0xd9c7a8, outside: 0x5aa84b,
    patch: 0x66bb55, cage: 0x9e9e9e, door: 0x6d4c41,
    counter: 0x8d6e63, table: 0xa1887f, sofa: 0x5d6fbf, shelf: 0x6d4c41,
    bath: 0xcfd8dc, bed: 0x8e6c9e, pillow: 0xf5e9d0,
    fence: 0x8d6e63, outdoor: 'garden', fog: 0x87ceeb,
  },
  petshop: {
    name: 'The Pet Shop',
    floor: 0x90a4ae, wall: 0xe8eef1, wallIn: 0xcfd8dc, outside: 0x37474f,
    patch: 0x455a64, cage: 0x3949ab, door: 0x00838f,
    counter: 0x3949ab, table: 0x42a5f5, sofa: 0x7e57c2, shelf: 0x263238,
    bath: 0x64b5f6, bed: 0xff8a65, pillow: 0xfff3e0,
    fence: 0x9e9e9e, outdoor: 'parking', fog: 0xb0bec5,
  },
};

let worldGroup = new THREE.Group();
scene.add(worldGroup);

const matCache = {};
function mat(color) {
  if (!matCache[color]) matCache[color] = new THREE.MeshLambertMaterial({ color });
  return matCache[color];
}

function addBox(x, y, z, w, h, d, color, opts = {}) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), opts.mat || mat(color));
  m.position.set(x, y, z);
  m.castShadow = !opts.noShadow;
  m.receiveShadow = true;
  worldGroup.add(m);
  if (!opts.noSolid) {
    const bb = new THREE.Box3().setFromObject(m);
    game.colliders.push(bb);
    if (!opts.noBlock) game.blockers.push(m);
  }
  return m;
}

export function clearWorld() {
  scene.remove(worldGroup);
  worldGroup = new THREE.Group();
  scene.add(worldGroup);
  game.colliders.length = 0;
  game.blockers.length = 0;
  game.guards.length = 0;
  game.pickups.length = 0;
  game.projectiles.length = 0;
  game.explosions.length = 0;
  game.cage = null;
  game.frontDoor = null;
  game.seed = null;
  game.cageDoorOpen = false;
  game.frontDoorOpen = false;
}

// ---------- hamster cage: plastic tray + acrylic panels + wire grid + dome ----------
function buildCage(th) {
  const c = CAGE, s = c.size, hs = s / 2, t = 0.12;
  const acrylic = new THREE.MeshLambertMaterial({ color: 0xcfe8ff, transparent: true, opacity: 0.22, depthWrite: false });
  const doorMat = new THREE.MeshLambertMaterial({ color: 0xbfe3ff, transparent: true, opacity: 0.5, depthWrite: false });

  // plastic base tray (visual only)
  addBox(c.x, 0.22, c.z, s + 0.7, 0.44, s + 0.7, th.cage, { noSolid: true });
  // floor plate inside (solid, so the player stands on it)
  addBox(c.x, 0.51, c.z, s - 0.1, 0.06, s - 0.1, 0xe8e4da, { noBlock: true, noShadow: true });

  // acrylic side panels — SOLID: blocks the player AND the guinea pigs
  addBox(c.x, 1.5, c.z - hs - t / 2, s, 2.1, t, 0xffffff, { mat: acrylic, noShadow: true });
  addBox(c.x, 1.5, c.z + hs + t / 2, s, 2.1, t, 0xffffff, { mat: acrylic, noShadow: true });
  addBox(c.x - hs - t / 2, 1.5, c.z, t, 2.1, s, 0xffffff, { mat: acrylic, noShadow: true });
  // +x face: two side pieces + top strip around the door opening
  const dw = 1.5, dhw = dw / 2, seg = hs - dhw, so = (dhw + hs) / 2;
  addBox(c.x + hs + t / 2, 1.5, c.z - so, t, 2.1, seg, 0xffffff, { mat: acrylic, noShadow: true });
  addBox(c.x + hs + t / 2, 1.5, c.z + so, t, 2.1, seg, 0xffffff, { mat: acrylic, noShadow: true });
  addBox(c.x + hs + t / 2, 2.45, c.z, t, 0.2, dw, 0xffffff, { mat: acrylic, noShadow: true });

  // wire mesh grid (visual only — one wireframe box)
  const grid = new THREE.Mesh(new THREE.BoxGeometry(s, 2.1, s, 7, 5, 7),
    new THREE.MeshBasicMaterial({ color: th.cage, wireframe: true }));
  grid.position.set(c.x, 1.5, c.z);
  worldGroup.add(grid);

  // dome lid
  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(hs + t / 2 + 0.02, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2),
    new THREE.MeshLambertMaterial({ color: 0xdde8f5, transparent: true, opacity: 0.35, depthWrite: false }));
  dome.scale.y = 0.7;
  dome.position.set(c.x, 2.55, c.z);
  worldGroup.add(dome);

  // door leaf (solid until the player opens it)
  const dmesh = addBox(c.x + hs + t / 2, 1.4, c.z, t, 1.9, dw, 0xffffff, { mat: doorMat, noShadow: true, noSolid: true });
  dmesh.rotation.y = Math.PI / 2; // opens east
  const fw = 0.1;
  addBox(c.x + hs + t / 2, 2.38, c.z, fw, 0.1, dw + fw * 2, th.cage, { noSolid: true, noBlock: true });
  addBox(c.x + hs + t / 2, 0.48, c.z - dhw - fw / 2, fw, 0.1, fw, th.cage, { noSolid: true, noBlock: true });
  addBox(c.x + hs + t / 2, 0.48, c.z + dhw + fw / 2, fw, 0.1, fw, th.cage, { noSolid: true, noBlock: true });
  addBox(c.x + hs + t / 2, 1.4, c.z + dhw + fw / 2, fw, 1.9, fw, th.cage, { noSolid: true, noBlock: true });
  const handle = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.035, 8, 16), mat(th.cage));
  handle.rotation.y = Math.PI / 2;
  handle.position.set(0.1, 0, dhw - 0.22);
  dmesh.add(handle);

  const cbox = new THREE.Box3(
    new THREE.Vector3(c.x + hs, 0.45, c.z - dhw),
    new THREE.Vector3(c.x + hs + t, 2.35, c.z + dhw));
  game.colliders.push(cbox);
  game.blockers.push(dmesh);
  game.cage = { door: dmesh, box: cbox };
}

// ---------- structure: 4-room house ----------
function buildStructure(th) {
  // floor (a bit wider than the house)
  addBox(0, -0.3, 0, HW * 2 + 8, 0.6, HW * 2 + 8, th.floor, { noShadow: true });

  // outer walls
  addBox(0, 2.2, -HW, HW * 2, 4.4, 0.3, th.wall);
  // south wall split into two so the front-door gap (x -0.9..0.9) is actually open
  addBox(-9.45, 2.2, HW, 17.1, 4.4, 0.3, th.wall);
  addBox(9.45, 2.2, HW, 17.1, 4.4, 0.3, th.wall);
  addBox(-HW, 2.2, 0, 0.3, 4.4, HW * 2, th.wall);
  addBox(HW, 2.2, 0, 0.3, 4.4, HW * 2, th.wall);

  // roof
  addBox(0, HH + 0.2, 0, HW * 2 + 1, 0.4, HW * 2 + 1, th.wall, { noSolid: true });

  // central divider x=0: wall z -18..8, doorway z 8..12, wall z 12..15,
  // open gap z 15..18 so the front door is reachable
  addBox(0, 1.2, -5, 0.3, 2.4, 26, th.wallIn);
  addBox(0, HH - 0.45, 10, 0.3, 0.9, 4, th.wallIn);
  addBox(0, 1.2, 13.5, 0.3, 2.4, 3, th.wallIn);
  addBox(0, HH - 0.45, 16.5, 0.3, 0.9, 3, th.wallIn);

  // west z=0 divider (kitchen | bathroom), doorway x -9..-7
  addBox(-13.5, 1.2, 0, 9, 2.4, 0.3, th.wallIn);   // x -18..-9
  addBox(-3.5, 1.2, 0, 7, 2.4, 0.3, th.wallIn);    // x -7..0
  addBox(-8, HH - 0.45, 0, 2, 0.9, 0.3, th.wallIn); // lintel over doorway

  // east z=0 divider (living | bedroom), doorway x 7..9
  addBox(3.5, 1.2, 0, 7, 2.4, 0.3, th.wallIn);     // x 0..7
  addBox(13.5, 1.2, 0, 9, 2.4, 0.3, th.wallIn);    // x 9..18
  addBox(8, HH - 0.45, 0, 2, 0.9, 0.3, th.wallIn); // lintel over doorway

  // ---- six rooms: x=9 dividers split the east rooms ----
  // NE: living room (x 0..9) | study (x 9..18), doorway z -8..-6
  addBox(9, 1.2, -13, 0.3, 2.4, 10, th.wallIn);   // z -18..-8
  addBox(9, 1.2, -3, 0.3, 2.4, 6, th.wallIn);    // z -6..0
  addBox(9, HH - 0.45, -7, 0.3, 0.9, 2, th.wallIn); // lintel
  // SE: bedroom (x 0..9) | nursery (x 9..18), doorway z 8..10
  addBox(9, 1.2, 4, 0.3, 2.4, 8, th.wallIn);     // z 0..8
  addBox(9, 1.2, 14, 0.3, 2.4, 8, th.wallIn);    // z 10..18
  addBox(9, HH - 0.45, 9, 0.3, 0.9, 2, th.wallIn); // lintel
  // rugs in the two new west-side rooms
  addBox(4.5, 0.03, -11, 4.5, 0.05, 3.5, th.patch, { noSolid: true, noShadow: true });
  addBox(4.5, 0.03, 6, 4.5, 0.05, 3.5, th.patch, { noSolid: true, noShadow: true });

  buildCage(th);

  // front door (south wall, x=0) — lintel fills the gap above the door (y 2.2..4.4)
  addBox(0, 3.3, HW, 1.8, 2.2, 0.3, th.wall);
  const dmesh = addBox(0, 1.1, HW, 1.6, 2.2, 0.15, th.door, { noSolid: true });
  // hinge at the left edge of the gap so it swings like a real door (closed = rotation 0)
  dmesh.geometry.translate(0.8, 0, 0);
  dmesh.position.set(-0.8, 1.1, HW);
  const dbox = new THREE.Box3(
    new THREE.Vector3(-0.8, 0, HW - 0.2),
    new THREE.Vector3(0.8, 2.2, HW + 0.2));
  game.colliders.push(dbox);
  game.blockers.push(dmesh);
  game.frontDoor = { door: dmesh, box: dbox };

  // ---- Kitchen (NW) ----
  addBox(-17, 0.5, -6, 2, 1.0, 4, th.counter);
  addBox(-17, 1.02, -6, 2.2, 0.06, 4.2, 0xefebe8, { noBlock: true });
  addBox(-9, 0.55, -13.5, 2, 1.1, 1.5, th.counter);
  addBox(-9, 1.12, -13.5, 2.2, 0.06, 1.7, 0xefebe8, { noBlock: true });
  addBox(-17.4, 1.3, -2, 1.6, 2.6, 3, th.shelf);
  addBox(-14.8, 0.25, -8.6, 0.55, 0.5, 0.55, th.table, { noBlock: true });

  // ---- Bathroom (SW) ----
  addBox(-9, 0.5, 15.5, 9, 1.0, 0.9, th.bath);
  addBox(-15.5, 0.45, 16.8, 3.5, 0.9, 1.4, th.bath);
  addBox(-16.5, 0.85, 16.8, 0.5, 1.7, 0.5, 0xeceff1);
  addBox(-17.2, 1.3, 8, 1.2, 2.6, 3, th.shelf);

  // ---- Living room (NE) ----
  addBox(10, 0.45, -14, 7, 0.9, 2, th.sofa);
  addBox(10, 1.1, -14.9, 7, 0.7, 0.5, th.sofa);
  addBox(4, 0.4, -9, 2.4, 0.8, 1.4, th.table);
  addBox(16.8, 1.4, -8, 1.5, 2.8, 5, th.shelf);
  addBox(15.5, 0.4, -16, 1.2, 0.8, 1.2, th.table);

  // ---- Bedroom (SE) ----
  addBox(10, 0.5, 10, 4, 1.0, 3, th.bed);
  addBox(8.8, 1.05, 11, 1.2, 0.3, 0.8, th.pillow);
  addBox(16.8, 0.9, 15, 1.6, 1.8, 4, th.shelf);
}

// ---------- outdoors: garden (home) or parking lot (pet shop) ----------
function buildGarden(th) {
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(140, 140), mat(th.outside));
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.01;
  ground.receiveShadow = true;
  worldGroup.add(ground);

  // walkway from front door
  addBox(0, 0.02, HW + 2.5, 3, 0.05, 5, th.patch, { noSolid: true, noShadow: true });

  const fenceM = mat(th.fence);
  const addPost = (x, z, h = 1.2) => {
    const p = new THREE.Mesh(new THREE.BoxGeometry(0.18, h, 0.18), fenceM);
    p.position.set(x, h / 2, z);
    p.castShadow = true;
    worldGroup.add(p);
  };
  for (let x = -21; x <= 21; x += 1.5) if (Math.abs(x) >= 2) { addPost(x, 20); addPost(x, 49); }
  for (let z = 20; z <= 49; z += 1.5) { addPost(-21, z); addPost(21, z); }
  for (const [x, z, w, d] of [[0, 20, 5, 0.12], [0, 49, 42, 0.12], [-21, 34.5, 0.12, 29], [21, 34.5, 0.12, 29]]) {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(w, 0.1, d), fenceM);
    rail.position.set(x, 0.9, z);
    worldGroup.add(rail);
  }

  if (th.outdoor === 'garden') {
    [[-9, 26], [8, 24], [-14, 34], [12, 33], [-5, 30]].forEach(([x, z]) => {
      const tr = new THREE.Mesh(new THREE.ConeGeometry(0.8, 1.6, 8), mat(0x2e7d32));
      tr.position.set(x, 0.8, z);
      tr.castShadow = true;
      worldGroup.add(tr);
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.2, 0.6, 6), mat(0x6d4c41));
      trunk.position.set(x, 0.3, z);
      worldGroup.add(trunk);
    });
    [[-8, 40], [6, 43], [14, 24], [-15, 45]].forEach(([x, z]) => {
      const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.4, 0.5, 10), mat(0xb5651d));
      pot.position.set(x, 0.25, z);
      pot.castShadow = true;
      worldGroup.add(pot);
      const bush = new THREE.Mesh(new THREE.SphereGeometry(0.5, 8, 6), mat(0x388e3c));
      bush.position.set(x, 0.8, z);
      bush.scale.y = 0.8;
      worldGroup.add(bush);
    });
  } else {
    // parking lot: asphalt with paint lines, barriers, cones, dumpster
    [[-13.5, 22, 8, 0.12], [-13.5, 28, 8, 0.12], [-6, 22, 0.12, 8], [1.5, 22, 0.12, 8]].forEach(([x, z, w, d]) => {
      const line = new THREE.Mesh(new THREE.BoxGeometry(w, 0.02, d), mat(0xcfd8dc));
      line.position.set(x, 0.02, z);
      worldGroup.add(line);
    });
    addBox(17, 0.5, 19.5, 5, 1.0, 0.6, 0x78909c, { noBlock: true });
    addBox(3.5, 0.5, 19.5, 3, 1.0, 0.6, 0x78909c, { noBlock: true });
    [[-10, 24], [10, 26], [-4, 33], [15, 31]].forEach(([x, z]) => {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.7, 8), mat(0xff6d00));
      cone.position.set(x, 0.35, z);
      cone.castShadow = true;
      worldGroup.add(cone);
      const base = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.08, 0.5), mat(0xe65100));
      base.position.set(x, 0.04, z);
      worldGroup.add(base);
    });
    addBox(-16, 1, 40, 2.5, 2, 4, 0x455a64);
    addBox(-16, 2.1, 40, 2.7, 0.25, 4.2, 0x37474f, { noBlock: true });
  }
}

// ---------- Giant Seed of Gold ----------
function buildSeed(th) {
  const gold = new THREE.MeshStandardMaterial({
    color: 0xffd54a, metalness: 0.85, roughness: 0.25, emissive: 0x8a6d1a, emissiveIntensity: 0.6,
  });
  const seed = new THREE.Mesh(new THREE.SphereGeometry(2, 24, 18), gold);
  seed.position.set(0, 2.6, 36);
  seed.scale.y = 1.8;
  seed.castShadow = true;
  worldGroup.add(seed);
  game.seed = seed;
  game.seedPos = seed.position.clone();

  const glow = new THREE.Mesh(new THREE.TorusGeometry(2.6, 0.12, 8, 32),
    new THREE.MeshBasicMaterial({ color: 0xffe082, transparent: true, opacity: 0.7 }));
  glow.position.copy(seed.position);
  glow.rotation.x = Math.PI / 2;
  worldGroup.add(glow);
  game.seedGlow = glow;

  const light = new THREE.PointLight(0xffe082, 1.6, 25);
  light.position.copy(seed.position);
  scene.add(light);
  game.seedLight = light;
}

// ---------- build a full world for a theme ----------
export function buildWorld(themeKey) {
  const th = THEMES[themeKey];
  scene.background = new THREE.Color(th.fog);
  scene.fog = new THREE.Fog(th.fog, 50, 130);
  buildStructure(th);
  buildGarden(th);
  buildSeed(th);
}
