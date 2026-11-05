import * as THREE from 'three';

export const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);
scene.fog = new THREE.Fog(0x87ceeb, 40, 120);

export const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 200);
export const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

export const clock = new THREE.Clock();

// shared mutable game state
export const game = {
  colliders: [],    // THREE.Box3 for physics
  blockers: [],     // meshes for raycast line-of-sight
  guards: [],
  pickups: [],
  projectiles: [],
  explosions: [],
  doors: [],
  lastNoise: { pos: new THREE.Vector3(), time: -99, loud: 0 },
  cageDoorOpen: false,
  frontDoorOpen: false,
  won: false,
  started: false,
  locked: false,
  cage: null,       // { door, box }
  frontDoor: null,  // { door, box }
  seed: null,       // mesh
  seedPos: null,    // Vector3
};

// lights
scene.add(new THREE.HemisphereLight(0xbfe3ff, 0x6b5b3a, 0.9));
const sun = new THREE.DirectionalLight(0xfff2cc, 1.2);
sun.position.set(25, 40, 20);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -40; sun.shadow.camera.right = 40;
sun.shadow.camera.top = 40; sun.shadow.camera.bottom = -40;
scene.add(sun);

[[ -6, 3.4, 0, 0xffd9a0 ], [ 6, 3.4, 0, 0xfff0c0 ]].forEach(([x, y, z, c]) => {
  const pl = new THREE.PointLight(c, 1.1, 18);
  pl.position.set(x, y, z);
  scene.add(pl);
});
