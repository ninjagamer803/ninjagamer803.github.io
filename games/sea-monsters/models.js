// Low-poly model builders
import * as THREE from 'three';
import { rand, W, terrainH } from './state.js';

export function stdMat(color, opts = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.7, metalness: 0.1, ...opts });
}

// ---------- Hermy (faces -z by default) ----------
export function buildHermy() {
  const g = new THREE.Group();
  const orange = stdMat(0xff7a3d);
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 10), orange);
  body.scale.set(1, 0.65, 1.1);
  g.add(body);
  const shell = new THREE.Mesh(
    new THREE.SphereGeometry(0.62, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2),
    stdMat(0x9a4fd0, { roughness: 0.4 })
  );
  shell.rotation.x = Math.PI / 2; shell.rotation.z = Math.PI / 2;
  shell.position.set(0, 0.1, 0.18);
  g.add(shell);
  for (const s of [-1, 1]) {
    const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.35, 4, 6), orange);
    arm.position.set(0.42 * s, 0, -0.55); arm.rotation.x = 1.2;
    g.add(arm);
    const claw = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 6), orange);
    claw.scale.set(1, 0.6, 1.4); claw.position.set(0.5 * s, 0.25, -0.78);
    g.add(claw);
  }
  for (const s of [-1, 1]) {
    const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.3), orange);
    stalk.position.set(0.18 * s, 0.38, -0.35);
    g.add(stalk);
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 6), stdMat(0x111111, { roughness: 0.3 }));
    eye.position.set(0.18 * s, 0.55, -0.35);
    g.add(eye);
  }
  g.userData.legs = [];
  for (let i = 0; i < 8; i++) {
    const s = i < 4 ? -1 : 1;
    const leg = new THREE.Mesh(new THREE.CapsuleGeometry(0.045, 0.3, 3, 5), orange);
    leg.position.set(0.42 * s, -0.25, -0.2 + (i % 4) * 0.17);
    leg.rotation.z = 0.9 * s;
    g.add(leg);
    g.userData.legs.push(leg);
  }
  g.scale.setScalar(1.1);
  return g;
}

// first-person shrimp blaster (attached to camera)
export function buildBlasterFP() {
  const g = new THREE.Group();
  const b = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.45, 4, 8),
    stdMat(0xffd23d, { emissive: 0xff7700, emissiveIntensity: 0.7, roughness: 0.3 }));
  b.rotation.x = Math.PI / 2; b.position.set(0.22, -0.22, -0.8);
  g.add(b);
  const tip = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 6),
    new THREE.MeshBasicMaterial({ color: 0xffee66 }));
  tip.position.set(0.22, -0.2, -1.1);
  g.add(tip);
  g.visible = false;
  return g;
}

// Hermy's pineapple house: bumpy body, crown, door, couch + TV + fireplace, warm glow
export function buildPineappleHouse() {
  const g = new THREE.Group();
  g.userData.isHouse = true;
  // bumpy pineapple body (squashed icosphere)
  const body = new THREE.Mesh(new THREE.IcosahedronGeometry(3, 2),
    stdMat(0xd98a2b, { roughness: 0.7, flatShading: true }));
  body.scale.set(1, 1.25, 1);
  g.add(body);
  // diamond skin bumps
  const bumpG = new THREE.IcosahedronGeometry(0.35, 0);
  const bumpM = stdMat(0xb96f1e, { roughness: 0.8, flatShading: true });
  const bumps = new THREE.InstancedMesh(bumpG, bumpM, 60);
  const d = new THREE.Object3D();
  for (let i = 0; i < 60; i++) {
    const v = new THREE.Vector3().randomDirection();
    v.y = Math.abs(v.y) * 1.25 + 0.15;
    d.position.copy(v.multiplyScalar(2.95));
    d.scale.setScalar(0.7 + Math.random() * 0.5);
    d.updateMatrix();
    bumps.setMatrixAt(i, d.matrix);
  }
  g.add(bumps);
  // leafy crown
  const leafM = stdMat(0x3f9a3a, { roughness: 0.7, flatShading: true, side: THREE.DoubleSide });
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2;
    const leaf = new THREE.Mesh(new THREE.ConeGeometry(0.55, 2.4, 4, 1, true), leafM);
    leaf.position.set(Math.cos(a) * 0.9, 3.9, Math.sin(a) * 0.9);
    leaf.rotation.set(Math.sin(a) * 0.5, -a, Math.cos(a) * 0.5);
    g.add(leaf);
  }
  // door (front +z, toward open water) with warm interior light
  const door = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.15, 2.1, 10, 1, false, 0, Math.PI),
    stdMat(0x5a3a18, { roughness: 0.8 }));
  door.rotation.x = Math.PI / 2;
  door.position.set(0, -0.55, 2.55);
  door.scale.z = 0.5;
  g.add(door);
  // interior visible through the doorway
  const sofaM = stdMat(0xa03a4a, { roughness: 0.9 });
  const seat = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.4, 0.7), sofaM); seat.position.set(0, -1.35, 1.3);
  const back = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.6, 0.25), sofaM); back.position.set(0, -0.95, 1.6);
  const armL = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.55, 0.7), sofaM); armL.position.set(-0.95, -1.15, 1.3);
  const armR = armL.clone(); armR.position.x = 0.95;
  g.add(seat, back, armL, armR);
  // TV on a little stand, screen faces the couch
  const tvStand = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.7, 0.4), stdMat(0x4a3520, { roughness: 0.8 }));
  tvStand.position.set(0, -1.4, 0.35);
  const tvScreen = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.55, 0.08),
    new THREE.MeshStandardMaterial({ color: 0x113344, emissive: 0x37c4ff, emissiveIntensity: 1.4 }));
  tvScreen.position.set(0, -0.95, 0.5);
  g.add(tvStand, tvScreen);
  g.userData.tv = tvScreen;
  // fireplace: stone box + roaring core + chimney stub
  const stoneM = stdMat(0x6a6a72, { roughness: 1, flatShading: true });
  const fp = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.8, 0.5), stoneM); fp.position.set(1.5, -1.25, 0.9);
  const fire = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.7, 6, 1, true),
    new THREE.MeshBasicMaterial({ color: 0xffa03a, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false }));
  fire.position.set(1.5, -1.0, 0.85);
  const chimney = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.2, 1.4, 6), stoneM);
  chimney.position.set(1.5, 1.6, 0.6); chimney.rotation.z = 0.3;
  g.add(fp, fire, chimney);
  g.userData.fire = fire;
  const glow = new THREE.PointLight(0xff9a3a, 2.2, 14, 1.6);
  glow.position.set(0, -0.6, 1.6);
  g.add(glow);
  g.userData.glow = glow;
  // little sign
  const sign = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.5, 0.1), stdMat(0x7a5a2a, { roughness: 0.9 }));
  sign.position.set(0, -1.9, 3.15);
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.8, 5), stdMat(0x5a3a18));
  post.position.set(0, -2.2, 3.1);
  g.add(sign, post);
  return g;
}

// Hermy's MECH suit: steel shell, chest core, backpack + rear propeller (front -z, child of hermy)
export function buildMech() {
  const g = new THREE.Group();
  const steel = stdMat(0x7d8fa5, { roughness: 0.35, metalness: 0.55 });
  const dark = stdMat(0x2b3a4a, { roughness: 0.5, metalness: 0.4 });
  const core = new THREE.MeshStandardMaterial({ color: 0xffb040, emissive: 0xff7818, emissiveIntensity: 1.6 });
  const shell = new THREE.Mesh(new THREE.SphereGeometry(0.68, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.62), steel);
  shell.position.y = 0.1;
  g.add(shell);
  const visor = new THREE.Mesh(new THREE.SphereGeometry(0.62, 12, 8, 0, Math.PI * 2, Math.PI * 0.55, Math.PI * 0.3), dark);
  visor.position.y = 0.1;
  g.add(visor);
  for (const s of [-1, 1]) {
    const pad = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 6), dark);
    pad.position.set(0.62 * s, 0.28, 0);
    g.add(pad);
  }
  const chest = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 6), core);
  chest.position.set(0, 0.1, -0.6);
  g.add(chest);
  g.userData.core = chest;
  const pack = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.22), dark);
  pack.position.set(0, 0.18, 0.66);
  g.add(pack);
  const prop = new THREE.Group();
  prop.position.set(0, 0.18, 0.82);
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.16, 8), steel);
  hub.rotation.x = Math.PI / 2;
  prop.add(hub);
  for (let i = 0; i < 4; i++) {
    const bl = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.1, 0.04), steel);
    bl.position.x = 0.3;
    const piv = new THREE.Group();
    piv.rotation.z = (i / 4) * Math.PI * 2;
    piv.add(bl);
    prop.add(piv);
  }
  g.add(prop);
  g.userData.prop = prop;
  return g;
}

// first-person views for the mech weapons (attach to camera)
export function buildGunFP(kind) {
  const g = new THREE.Group();
  const dark = stdMat(0x33404e, { roughness: 0.4, metalness: 0.5 });
  if (kind === 'lava') {
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.12, 0.5, 10), dark);
    barrel.rotation.x = Math.PI / 2;
    g.add(barrel);
    const tip = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6),
      new THREE.MeshStandardMaterial({ color: 0xff8a2a, emissive: 0xff5a00, emissiveIntensity: 1.8 }));
    tip.position.z = -0.28;
    g.add(tip);
  } else if (kind === 'flame') {
    const tank = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.42, 10),
      stdMat(0x8a2a1a, { roughness: 0.35, metalness: 0.55 }));
    tank.rotation.x = Math.PI / 2;
    tank.position.z = -0.08;
    g.add(tank);
    const valve = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), dark);
    g.add(valve);
    const tip = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.085, 0.2, 8, 1, true),
      stdMat(0x2a2a2a, { roughness: 0.4, metalness: 0.6, side: THREE.DoubleSide }));
    tip.rotation.x = Math.PI / 2; tip.position.z = -0.26;
    g.add(tip);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.085, 0.02, 6, 12),
      new THREE.MeshStandardMaterial({ color: 0xffa03a, emissive: 0xff5a00, emissiveIntensity: 1.6 }));
    ring.position.z = -0.35;
    g.add(ring);
  } else {
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.08, 0.55), dark);
    g.add(body);
    const rail = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.03, 0.6),
      new THREE.MeshStandardMaterial({ color: 0x66f0ff, emissive: 0x2ad4ee, emissiveIntensity: 1.6 }));
    rail.position.y = 0.06;
    g.add(rail);
  }
  g.position.set(0.34, -0.32, -0.6);
  g.rotation.z = 0.06;
  g.visible = false;
  return g;
}

// ---------- enemies (built facing +z; use lookAt directly) ----------
export function buildJelly() {
  const g = new THREE.Group();
  const dome = new THREE.Mesh(new THREE.SphereGeometry(0.9, 12, 8, 0, Math.PI * 2, 0, Math.PI / 1.8),
    stdMat(0xff66cc, { emissive: 0xff2299, emissiveIntensity: 0.55, transparent: true, opacity: 0.85 }));
  g.add(dome);
  g.userData.tents = [];
  for (let i = 0; i < 5; i++) {
    const t = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.01, 1.6, 5),
      stdMat(0xff88dd, { emissive: 0xff2299, emissiveIntensity: 0.4, transparent: true, opacity: 0.8 }));
    const a = (i / 5) * Math.PI * 2;
    t.position.set(Math.cos(a) * 0.4, -1.0, Math.sin(a) * 0.4);
    g.add(t); g.userData.tents.push(t);
  }
  return g;
}

export function buildShark() {
  const g = new THREE.Group();
  const backM = stdMat(0x5a7080, { roughness: 0.45 });
  const bellyM = stdMat(0xcfd8da, { roughness: 0.55 });
  const darkM = stdMat(0x141e24, { roughness: 0.6 });
  const toothM = stdMat(0xf2f6f0, { roughness: 0.3, emissive: 0x1c221e, emissiveIntensity: 0.5 });
  const body = new THREE.Mesh(new THREE.ConeGeometry(0.9, 3.4, 9), backM);
  body.rotation.x = Math.PI / 2;   // apex -> +z
  body.scale.set(1, 0.55, 1);
  body.userData.part = 'back';
  g.add(body);
  const under = new THREE.Mesh(new THREE.SphereGeometry(0.85, 10, 8), bellyM);
  under.scale.set(0.8, 0.3, 1.5); under.position.set(0, -0.3, 0.15);
  under.userData.part = 'belly';
  g.add(under);
  const tailPivot = new THREE.Group();
  tailPivot.position.set(0, 0.05, -1.55);
  const tUp = new THREE.Mesh(new THREE.ConeGeometry(0.4, 1.1, 5), backM);
  tUp.rotation.x = -Math.PI / 2 + 0.4; tUp.scale.set(0.3, 1, 1); tUp.position.y = 0.3;
  tUp.userData.part = 'back';
  tailPivot.add(tUp);
  const tLo = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.7, 5), backM);
  tLo.rotation.x = -Math.PI / 2 - 0.5; tLo.scale.set(0.3, 1, 1); tLo.position.y = -0.22;
  tLo.userData.part = 'back';
  tailPivot.add(tLo);
  g.add(tailPivot);
  g.userData.tail = tailPivot;
  const dFin = new THREE.Mesh(new THREE.ConeGeometry(0.4, 1.1, 3), backM);
  dFin.scale.set(1, 1, 0.14); dFin.position.set(0, 0.62, -0.15); dFin.rotation.x = 0.45;
  dFin.userData.part = 'back';
  g.add(dFin);
  for (const s of [-1, 1]) {
    const fin = new THREE.Mesh(new THREE.ConeGeometry(0.42, 1.0, 3), backM);
    fin.scale.set(1, 1, 0.12);
    fin.position.set(0.95 * s, -0.25, 0.35);
    fin.rotation.z = s * (Math.PI / 2 + 0.7); fin.rotation.x = 0.25 * s;
    fin.userData.part = 'back';
    g.add(fin);
    const pfin = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.5, 3), backM);
    pfin.scale.set(1, 1, 0.12);
    pfin.position.set(0.55 * s, -0.35, -0.6);
    pfin.rotation.z = s * (Math.PI / 2 + 0.5);
    pfin.userData.part = 'back';
    g.add(pfin);
    for (let i = 0; i < 4; i++) {
      const slit = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.16, 0.04), darkM);
      slit.position.set(0.74 * s, 0.02, 0.78 - i * 0.16);
      slit.rotation.y = s * 0.35;
      g.add(slit);
    }
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), darkM);
    eye.scale.set(1, 1.4, 1); eye.position.set(0.38 * s, 0.12, 1.32);
    g.add(eye);
  }
  for (let i = 0; i < 9; i++) {
    const a = (i / 8 - 0.5) * 2.0;
    const tooth = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.2, 4), toothM);
    tooth.position.set(Math.sin(a) * (0.2 + Math.abs(a) * 0.28), -0.34, 1.55 - Math.abs(a) * 0.55);
    tooth.rotation.x = Math.PI;   // jagged, pointing down
    g.add(tooth);
  }
  return g;
}

// great white — larger, paler variant of the shark
export function buildGreatWhite() {
  const g = buildShark();
  g.traverse(o => {
    if (!o.isMesh || !o.userData.part) return;
    o.material = o.material.clone();
    if (o.userData.part === 'belly') o.material.color.set(0xeaf1f3);
    else o.material.color.set(0x66808f);
  });
  g.scale.setScalar(2.3);
  return g;
}

// anglerfish — deep-sea lurker with a glowing lure (front +z, use lookAt)
export function buildAngler() {
  const g = new THREE.Group();
  const m = stdMat(0x1c2833, { roughness: 0.8, emissive: 0x060b12, emissiveIntensity: 0.6 });
  const body = new THREE.Mesh(new THREE.SphereGeometry(1.1, 10, 8), m);
  body.scale.set(1, 0.9, 1.25);
  g.add(body);
  const jaw = new THREE.Mesh(new THREE.ConeGeometry(0.5, 0.8, 7, 1, true),
    stdMat(0x0b1118, { side: THREE.DoubleSide, roughness: 0.7 }));
  jaw.rotation.x = Math.PI / 2; jaw.position.set(0, -0.2, 1.15);
  g.add(jaw);
  const toothM = stdMat(0xd8e8e0, { emissive: 0x223333, emissiveIntensity: 0.4, roughness: 0.3 });
  for (let i = 0; i < 7; i++) {
    const a = (i / 6 - 0.5) * 1.9;
    const tooth = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.3, 4), toothM);
    tooth.position.set(Math.sin(a) * 0.34, 0.02, 1.42);
    tooth.rotation.x = Math.PI;
    g.add(tooth);
  }
  const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.045, 0.55, 5), m);
  stalk.position.set(0, 0.95, 1.0); stalk.rotation.x = -1.0;
  g.add(stalk);
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.17, 8, 6),
    stdMat(0x9dfff0, { emissive: 0x8dfff0, emissiveIntensity: 2.4, roughness: 0.3 }));
  bulb.position.set(0, 1.15, 1.28);
  g.add(bulb);
  g.userData.bulb = bulb;
  const tail = new THREE.Mesh(new THREE.ConeGeometry(0.4, 0.9, 5), m);
  tail.rotation.x = -Math.PI / 2; tail.position.set(0, 0.05, -1.35); tail.scale.set(0.35, 1, 1);
  g.add(tail);
  const dFin = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.7, 3), m);
  dFin.scale.z = 0.15; dFin.position.set(0, 0.85, 0.1);
  g.add(dFin);
  for (const s of [-1, 1]) {
    const fin = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.8, 3), m);
    fin.scale.z = 0.15; fin.position.set(0.8 * s, -0.25, 0.3); fin.rotation.z = s * (Math.PI / 2 + 0.6);
    g.add(fin);
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.09, 6, 5),
      stdMat(0xffe08a, { emissive: 0xffc25a, emissiveIntensity: 0.8 }));
    eye.position.set(0.45 * s, 0.35, 0.85);
    g.add(eye);
  }
  g.scale.setScalar(1.5);
  return g;
}

export function buildOctopus() {
  const g = new THREE.Group();
  const m = stdMat(0x7a2fbf, { emissive: 0x3d0f6e, emissiveIntensity: 0.4, roughness: 0.5 });
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.8, 12, 10), m);
  head.scale.y = 1.15; head.position.y = 0.5;
  g.add(head);
  for (const s of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 6),
      stdMat(0xffe066, { emissive: 0xffc23d, emissiveIntensity: 0.6 }));
    eye.position.set(0.3 * s, 0.45, 0.62);
    g.add(eye);
  }
  g.userData.arms = [];
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.12, 1.4, 4, 6), m);
    arm.position.set(Math.cos(a) * 0.45, -0.5, Math.sin(a) * 0.45);
    arm.rotation.z = Math.cos(a) * 0.9;
    arm.rotation.x = Math.sin(a) * 0.9;
    g.add(arm); g.userData.arms.push(arm);
  }
  return g;
}

export function buildSquid() {
  const g = new THREE.Group();
  const m = stdMat(0xa83a2a, { emissive: 0x52120a, emissiveIntensity: 0.5, roughness: 0.5 });
  const mantle = new THREE.Mesh(new THREE.ConeGeometry(1.1, 3.2, 12), m);
  mantle.rotation.x = -Math.PI / 2; mantle.position.set(0, 0.6, -1.4); // tail to rear (-z flipped by rotate below)
  g.add(mantle);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.85, 12, 10), m);
  head.position.set(0, 0.5, 0.6);
  g.add(head);
  for (const s of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 8),
      stdMat(0xfff2a0, { emissive: 0xffd030, emissiveIntensity: 0.7 }));
    eye.position.set(0.4 * s, 0.55, 1.3);
    g.add(eye);
  }
  g.userData.arms = [];
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 2.2, 4, 6), m);
    arm.position.set(Math.cos(a) * 0.5, -0.1, 1.5);
    arm.rotation.z = Math.cos(a) * 1.0;
    arm.rotation.x = Math.sin(a) * 1.0;
    g.add(arm); g.userData.arms.push(arm);
  }
  g.scale.setScalar(2.2);
  return g; // front +z, lookAt works directly
}

// the MEGALODON — final boss, a prehistoric mega-shark (front +z, use lookAt)
export function buildMegalodon(lava = false) {
  const g = new THREE.Group();
  const back = stdMat(lava ? 0x3a0d02 : 0x3d5468, lava
    ? { emissive: 0xff5500, emissiveIntensity: 2.0, roughness: 0.4 }
    : { roughness: 0.5 });
  const belly = stdMat(lava ? 0xff7a1a : 0xcfdde6, lava
    ? { emissive: 0xff4400, emissiveIntensity: 1.5, roughness: 0.4 }
    : { roughness: 0.6 });
  const body = new THREE.Mesh(new THREE.ConeGeometry(1.0, 3.6, 10), back);
  body.rotation.x = Math.PI / 2;   // apex -> +z
  body.scale.set(1, 0.62, 1);
  g.add(body);
  const under = new THREE.Mesh(new THREE.SphereGeometry(0.85, 10, 8), belly);
  under.scale.set(0.8, 0.3, 1.5); under.position.set(0, -0.35, 0.1);
  g.add(under);
  const tailPivot = new THREE.Group();
  tailPivot.position.set(0, 0.25, -1.8);
  const tail = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1.3, 6), back);
  tail.rotation.x = -Math.PI / 2; tail.scale.set(0.35, 1, 1);
  tailPivot.add(tail);
  g.add(tailPivot);
  g.userData.tail = tailPivot;
  for (const s of [-1, 1]) {
    const fin = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1.3, 4), back);
    fin.position.set(1.3 * s, -0.15, 0.2); fin.rotation.z = (Math.PI / 2) * s + 0.5 * s;
    g.add(fin);
  }
  const dFin = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1.4, 4), back);
  dFin.position.set(0, 0.85, 0);
  g.add(dFin);
  for (const s of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6),
      new THREE.MeshStandardMaterial({
        color: lava ? 0xffff88 : 0xffdd55,
        emissive: lava ? 0xffcc33 : 0xffaa00,
        emissiveIntensity: lava ? 3 : 1.2,
      }));
    eye.position.set(0.4 * s, 0.2, 1.5);
    g.add(eye);
  }
  g.scale.setScalar(lava ? 9 : 8);
  return g;
}

// molten megalodon — the volcano's true boss
export function buildLavaMega() { return buildMegalodon(true); }

// goblin shark — long-snouted deep-sea oddity (front +z, use lookAt)
export function buildGoblinShark() {
  const g = new THREE.Group();
  const m = stdMat(0x4a7a5a, { roughness: 0.5, emissive: 0x0e2a1a, emissiveIntensity: 0.35 });
  const body = new THREE.Mesh(new THREE.ConeGeometry(0.7, 3.2, 8), m);
  body.rotation.x = Math.PI / 2; body.scale.set(1, 0.7, 1);
  g.add(body);
  const snout = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.24, 1.5, 6), m);
  snout.rotation.x = -Math.PI / 2; snout.position.set(0, 0.02, 2.1);
  g.add(snout);
  const tail = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.9, 5), m);
  tail.rotation.x = -Math.PI / 2; tail.position.set(0, 0.1, -1.7);
  g.add(tail);
  const dFin = new THREE.Mesh(new THREE.ConeGeometry(0.25, 0.8, 3), m);
  dFin.position.set(0, 0.6, 0.1);
  g.add(dFin);
  for (const s of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.07, 6, 5), stdMat(0x0a0a0a));
    eye.position.set(0.25 * s, 0.15, 1.3);
    g.add(eye);
  }
  g.scale.setScalar(2.2);
  return g;
}

// ---------- friendly ----------
export function buildTurtle() {
  const g = new THREE.Group();
  const shell = new THREE.Mesh(new THREE.SphereGeometry(0.8, 12, 8), stdMat(0x3d8a4f, { roughness: 0.45 }));
  shell.scale.set(1.15, 0.5, 1.4);
  g.add(shell);
  const skin = stdMat(0x7ac98b);
  const hd = new THREE.Mesh(new THREE.SphereGeometry(0.28, 8, 6), skin);
  hd.position.set(0, 0, 1.25); g.add(hd);
  for (const [x, z] of [[-0.8, 0.7], [0.8, 0.7], [-0.8, -0.7], [0.8, -0.7]]) {
    const fl = new THREE.Mesh(new THREE.CapsuleGeometry(0.14, 0.5, 3, 5), skin);
    fl.position.set(x, -0.15, z);
    fl.rotation.x = Math.PI / 2; fl.rotation.z = x > 0 ? -0.6 : 0.6;
    g.add(fl);
  }
  return g;
}

// a little hermit crab ally — same design as Hermy, scaled down, random shell color
export const HERMIT_SHELL_COLORS = [0x9a4fd0, 0x3fb8c9, 0xe05fa0, 0x59d06d, 0xd0a13f];
export function buildHermitCrab(shellColor = 0x9a4fd0) {
  const g = new THREE.Group();
  const orange = stdMat(0xff7a3d, { roughness: 0.5 });
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 8), orange);
  body.scale.set(1, 0.6, 1.1);
  g.add(body);
  const shell = new THREE.Mesh(
    new THREE.SphereGeometry(0.36, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2),
    stdMat(shellColor, { roughness: 0.4 })
  );
  shell.rotation.x = Math.PI / 2; shell.rotation.z = Math.PI / 2;
  shell.position.set(0, 0.06, 0.12);
  g.add(shell);
  for (const s of [-1, 1]) {
    const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.045, 0.2, 3, 5), orange);
    arm.position.set(0.26 * s, 0.05, -0.33); arm.rotation.x = 1.1;
    g.add(arm);
    const claw = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), orange);
    claw.scale.set(1, 0.6, 1.4); claw.position.set(0.31 * s, 0.15, -0.48);
    g.add(claw);
  }
  for (const s of [-1, 1]) {
    const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.18), orange);
    stalk.position.set(0.11 * s, 0.22, -0.21);
    g.add(stalk);
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), stdMat(0x111111, { roughness: 0.3 }));
    eye.position.set(0.11 * s, 0.32, -0.21);
    g.add(eye);
  }
  g.userData.legs = [];
  for (let i = 0; i < 8; i++) {
    const s = i < 4 ? -1 : 1;
    const leg = new THREE.Mesh(new THREE.CapsuleGeometry(0.03, 0.2, 3, 4), orange);
    leg.position.set(0.28 * s, -0.15, -0.12 + (i % 4) * 0.11);
    leg.rotation.z = 0.9 * s;
    g.add(leg);
    g.userData.legs.push(leg);
  }
  g.scale.setScalar(0.9);
  return g; // faces -z
}

export const POWERUP_TYPES = {
  heal:   { color: 0xff5d5d, label: 'Shell Heart' },
  rapid:  { color: 0xffe94d, label: 'Spark Coral' },
  charge: { color: 0xff9d3d, label: 'Spare Shell' },
  speed:  { color: 0x6de0ff, label: 'Current Kelp' },
  shield: { color: 0x8ff2c0, label: 'Guard Anemone' },
};
export const POWERUP_KEYS = Object.keys(POWERUP_TYPES);

export function buildPowerup(type) {
  const t = POWERUP_TYPES[type];
  const g = new THREE.Group();
  const core = new THREE.Mesh(new THREE.SphereGeometry(0.45, 10, 8),
    new THREE.MeshStandardMaterial({ color: t.color, emissive: t.color, emissiveIntensity: 1.2 }));
  g.add(core);
  const glow = new THREE.Mesh(new THREE.SphereGeometry(0.75, 10, 8),
    new THREE.MeshBasicMaterial({ color: t.color, transparent: true, opacity: 0.25, blending: THREE.AdditiveBlending, depthWrite: false }));
  g.add(glow);
  return g;
}

export function buildTreasure() {
  const g = new THREE.Group();
  const pearl = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 10),
    new THREE.MeshStandardMaterial({ color: 0xfff6e0, emissive: 0xffd9a0, emissiveIntensity: 0.9, roughness: 0.15, metalness: 0.4 }));
  const glow = new THREE.Mesh(new THREE.SphereGeometry(0.85, 12, 10),
    new THREE.MeshBasicMaterial({ color: 0xffe9b0, transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending, depthWrite: false }));
  g.add(pearl, glow);
  return g;
}

// ---------- environment ----------
export function buildCave(x, y, z) {
  const g = new THREE.Group();
  const rockMat = stdMat(0x3a4148, { roughness: 0.9 });
  const spots = [];
  for (let i = 0; i < 9; i++) {
    const a = Math.PI * (0.12 + 0.76 * i / 8);
    spots.push([Math.cos(a) * 5, 3 + Math.sin(a) * 4.5, 0]);
  }
  spots.push([-2, 0.5, -2], [2.5, 0.5, -2.5], [0, 0.5, 1.5], [-3, 0.4, 2.5], [3, 0.4, 1], [0, 0.3, -3.5]);
  for (const [rx, ry, rz] of spots) {
    const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(rand(1.1, 2.0), 1), rockMat);
    rock.position.set(rx, ry + 0.3, rz);
    rock.rotation.set(rand(0, 3), rand(0, 3), rand(0, 3));
    g.add(rock);
  }
  g.position.set(x, y, z);
  g.rotation.y = rand(-0.4, 0.4);
  return { group: g, pos: new THREE.Vector3(x, y, z), radius: 6 };
}

export function buildPortal(x, y, z) {
  const g = new THREE.Group();
  const ringMat = new THREE.MeshStandardMaterial({ color: 0x1a3a4a, emissive: 0x0a1a22, emissiveIntensity: 1, roughness: 0.4 });
  const ring = new THREE.Mesh(new THREE.TorusGeometry(4.5, 0.6, 12, 40), ringMat);
  g.add(ring);
  const disc = new THREE.Mesh(new THREE.CircleGeometry(4.4, 32),
    new THREE.MeshBasicMaterial({ color: 0x113344, transparent: true, opacity: 0.5, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false }));
  g.add(disc);
  g.position.set(x, y, z);
  g.userData.ring = ring; g.userData.disc = disc; g.userData.ringMat = ringMat;
  return { group: g, pos: new THREE.Vector3(x, y, z) };
}

// instanced coral
export function buildCoral(group, count) {
  const colors = [0xff5d73, 0xffa03d, 0x9a4fd0, 0x3d9aff, 0x5fe08f];
  const geo = new THREE.ConeGeometry(0.8, 3.2, 7, 3);
  for (const c of colors) {
    const n = Math.floor(count / colors.length);
    if (n < 1) continue;
    const im = new THREE.InstancedMesh(geo, stdMat(c, { roughness: 0.6 }), n);
    const m4 = new THREE.Matrix4();
    for (let i = 0; i < n; i++) {
      // position assigned after terrain is known; placeholder here (game.js will place)
      m4.identity();
      im.setMatrixAt(i, m4);
    }
    im.userData.coral = true;
    group.add(im);
  }
}

export function buildKelp(group, count) {
  group.userData.kelps = [];
  const m = stdMat(0x2f8a55, { roughness: 0.6 });
  for (let i = 0; i < count; i++) {
    const k = new THREE.Group();
    let y = 0;
    for (let s = 0; s < 4; s++) {
      const seg = new THREE.Mesh(new THREE.CylinderGeometry(0.12 - s * 0.015, 0.16 - s * 0.015, 2.2, 5), m);
      seg.position.y = y + 1.1;
      k.add(seg);
      y += 1.9;
    }
    k.userData.phase = rand(0, 6);
    group.add(k);
    group.userData.kelps.push(k);
  }
}

export function buildRocks(group, count) {
  const geo = new THREE.DodecahedronGeometry(1.5, 1);
  const m = stdMat(0x556068, { roughness: 0.9 });
  const im = new THREE.InstancedMesh(geo, m, count);
  im.userData.rock = true;
  group.add(im);
  return im;
}

// ---------------- coral reef (Coral Gardens) ----------------
function makeAnemone(x, z, color) {
  const g = new THREE.Group();
  const base = new THREE.Mesh(new THREE.SphereGeometry(0.4, 10, 8), stdMat(0x6a4f7a, { roughness: 0.6 }));
  base.scale.set(1, 0.55, 1);
  g.add(base);
  const tm = stdMat(color, { roughness: 0.5, emissive: color, emissiveIntensity: 0.15 });
  g.userData.tents = [];
  for (let i = 0; i < 8; i++) {
    const pivot = new THREE.Group();
    pivot.rotation.y = (i / 8) * Math.PI * 2 + rand(-0.2, 0.2);
    const tent = new THREE.Mesh(new THREE.ConeGeometry(0.09, rand(0.7, 1.0), 5), tm);
    tent.position.set(0.26, 0.4, 0);
    const b = rand(0.25, 0.5);
    tent.rotation.z = -b;
    pivot.add(tent);
    g.add(pivot);
    g.userData.tents.push({ tent, base: b, ph: rand(0, 6) });
  }
  g.position.set(x, terrainH(x, z) + 0.1, z);
  return g;
}

function makeStar(x, z, color) {
  const g = new THREE.Group();
  const m = stdMat(color, { roughness: 0.5 });
  const center = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), m);
  center.scale.set(1, 0.35, 1); center.position.y = 0.1;
  g.add(center);
  for (let i = 0; i < 5; i++) {
    const pivot = new THREE.Group();
    pivot.rotation.y = (i / 5) * Math.PI * 2;
    const arm = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.55, 4), m);
    arm.position.set(0.3, 0.12, 0);
    arm.rotation.z = -1.25;
    pivot.add(arm);
    g.add(pivot);
  }
  g.position.set(x, terrainH(x, z), z);
  return g;
}

// dense reef made of several clusters of varied coral (instanced) + anemones + starfish
export function buildCoralReef(group, clusterCount = 6) {
  const STYLES = {
    tall:  { geo: new THREE.ConeGeometry(0.35, 2.6, 6), colors: [0xff5d73, 0x9a4fd0, 0x3fb8c9], h: 1.3 },
    short: { geo: new THREE.ConeGeometry(0.7, 1.4, 7), colors: [0xffa03d, 0x5fe08f], h: 0.7 },
    brain: { geo: new THREE.SphereGeometry(0.9, 10, 8), colors: [0xd0a13f, 0xb0693f, 0x8f9f4a], h: 0.45, squash: true },
    tube:  { geo: new THREE.CylinderGeometry(0.22, 0.42, 2.2, 7, 1, true), colors: [0xff8c42, 0xffd23d, 0xe05548], h: 1.1, twoSide: true },
    fan:   { geo: new THREE.CircleGeometry(1.2, 12, 0, Math.PI), colors: [0xd04fa0, 0x3fa0c9, 0x9a4fd0], h: 0.1, twoSide: true },
  };
  const inst = new Map(); // key -> { style, list: [Matrix4] }
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), v = new THREE.Vector3();
  const put = (name, cIdx, x, z, s, rx, ry, rz) => {
    const st = STYLES[name];
    const k = name + cIdx;
    let o = inst.get(k);
    if (!o) { o = { style: st, cIdx, list: [] }; inst.set(k, o); }
    const sy = st.squash ? s * 0.55 : s;
    e.set(rx, ry, rz); q.setFromEuler(e);
    m4.compose(v.set(x, terrainH(x, z) + st.h * s, z), q, new THREE.Vector3(s, sy, s));
    o.list.push(m4.clone());
  };

  const anemones = [], centers = [];
  const anemC = [0x6de0ff, 0xff8fb0, 0xb08fff];
  const starC = [0xff8c42, 0xff5d73, 0xffd23d];

  for (let ci = 0; ci < clusterCount; ci++) {
    const cx = rand(W.xMin + 40, W.xMax - 40);
    const cz = rand(-300, -110);
    centers.push({ x: cx, z: cz });
    const spread = rand(9, 16);
    const cs = rand(0.75, 1.5);
    const scatter = (r = spread) => {
      const a = rand(0, Math.PI * 2), d = Math.sqrt(rand(0, 1)) * r;
      return [cx + Math.cos(a) * d, cz + Math.sin(a) * d * 0.8];
    };
    for (let i = 0; i < 10; i++) { const [x, z] = scatter(); const s = cs * rand(0.6, 1.3); put('tall', i % 3, x, z, s, rand(-0.3, 0.3), rand(0, 6.3), rand(-0.3, 0.3)); }
    for (let i = 0; i < 7; i++)  { const [x, z] = scatter(); const s = cs * rand(0.6, 1.2); put('short', i % 2, x, z, s, rand(-0.3, 0.3), rand(0, 6.3), rand(-0.3, 0.3)); }
    for (let i = 0; i < 4; i++)  { const [x, z] = scatter(spread * 0.8); const s = cs * rand(0.7, 1.3); put('brain', i % 3, x, z, s * 1.15, rand(-0.2, 0.2), rand(0, 6.3), rand(-0.2, 0.2)); }
    for (let i = 0; i < 6; i++)  { const [x, z] = scatter(); const s = cs * rand(0.5, 1.2); put('tube', i % 3, x, z, s, rand(-0.2, 0.2), rand(0, 6.3), rand(-0.2, 0.2)); }
    for (let i = 0; i < 5; i++)  { const [x, z] = scatter(spread * 1.1); const s = cs * rand(0.6, 1.4); put('fan', i % 3, x, z, s, rand(-0.3, 0.3), rand(0, 6.3), 0); }
    // anemones + starfish (regular meshes, animated / decorative)
    for (let i = 0; i < 2; i++) {
      const [x, z] = scatter(spread * 0.5);
      const a = makeAnemone(x, z, anemC[(ci + i) % anemC.length]);
      group.add(a); anemones.push(a);
    }
    for (let i = 0; i < 3; i++) {
      const [x, z] = scatter(spread * 1.2);
      group.add(makeStar(x, z, starC[(ci * 2 + i) % starC.length]));
    }
  }

  for (const o of inst.values()) {
    const opts = { roughness: 0.55 };
    if (o.style.twoSide) opts.side = THREE.DoubleSide;
    const im = new THREE.InstancedMesh(o.style.geo, stdMat(o.style.colors[o.cIdx], opts), o.list.length);
    o.list.forEach((m, i) => im.setMatrixAt(i, m));
    group.add(im);
  }
  return { anemones, centers };
}
