// Level scenery: terrain, water, coral, kelp, rocks, fish, bubbles, cave, portal
import * as THREE from 'three';
import { W, rand, terrainH, world, S } from './state.js';
import { buildCave, buildPortal, buildKelp, buildRocks, buildCoralReef, buildPineappleHouse, stdMat } from './models.js';

const _m4 = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _v3 = new THREE.Vector3();

export function buildLevelScenery(def, group) {
  // ---- terrain ----
  const geo = new THREE.PlaneGeometry(W.xMax - W.xMin, W.zMax - W.zMin, 90, 102);
  geo.rotateX(-Math.PI / 2);
  geo.translate(0, 0, (W.zMax + W.zMin) / 2);
  const pos = geo.attributes.position;
  const colors = new Float32Array(pos.count * 3);
  const base = new THREE.Color(def.sand);
  const dark = base.clone().multiplyScalar(0.35);
  const c = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    const h = terrainH(x, z);
    pos.setY(i, h);
    c.lerpColors(dark, base, THREE.MathUtils.clamp((h - def.sandY + 6) / 12, 0, 1));
    colors.set([c.r, c.g, c.b], i * 3);
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  const terrain = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95 }));
  group.add(terrain);

  // ---- water surface ----
  const wg = new THREE.PlaneGeometry(1300, 1300, 56, 56);
  wg.rotateX(-Math.PI / 2);
  wg.translate(0, 0, -175);
  const wmesh = new THREE.Mesh(wg, new THREE.MeshPhongMaterial({
    color: 0x2299cc, transparent: true, opacity: 0.5, side: THREE.DoubleSide,
    shininess: 90, specular: 0x88ddff, depthWrite: false,
  }));
  const wbase = wg.attributes.position.array.slice();
  group.add(wmesh);

  // ---- coral ----
  const coralColors = [0xff5d73, 0xffa03d, 0x9a4fd0, 0x3d9aff, 0x5fe08f];
  const cgeo = new THREE.ConeGeometry(0.8, 3.4, 7, 3);
  for (const cc of coralColors) {
    const n = Math.max(1, Math.floor((def.coral || 0) / coralColors.length));
    const im = new THREE.InstancedMesh(cgeo, stdMat(cc, { roughness: 0.6 }), n);
    for (let i = 0; i < n; i++) {
      const x = rand(W.xMin + 5, W.xMax - 5), z = rand(W.zMin + 5, W.zMax - 5);
      const s = rand(0.5, 1.5);
      _e.set(rand(-0.35, 0.35), rand(0, 6.3), rand(-0.35, 0.35)); _q.setFromEuler(_e);
      _m4.compose(_v3.set(x, terrainH(x, z) + 1.3 * s, z), _q, new THREE.Vector3(s, s, s));
      im.setMatrixAt(i, _m4);
    }
    group.add(im);
  }

  // ---- kelp ----
  if (def.kelp) {
    buildKelp(group, def.kelp);
    for (const k of group.userData.kelps) {
      const x = rand(W.xMin + 8, W.xMax - 8), z = rand(W.zMin + 8, W.zMax - 8);
      k.position.set(x, terrainH(x, z), z);
    }
  }

  // ---- rocks ----
  const rocks = buildRocks(group, 45);
  for (let i = 0; i < 45; i++) {
    const x = rand(W.xMin + 5, W.xMax - 5), z = rand(W.zMin + 5, W.zMax - 5);
    const s = rand(0.6, 2.4);
    _e.set(rand(0, 3), rand(0, 3), rand(0, 3)); _q.setFromEuler(_e);
    _m4.compose(_v3.set(x, terrainH(x, z) + 0.8 * s, z), _q, new THREE.Vector3(s, s, s));
    rocks.setMatrixAt(i, _m4);
  }

  // ---- fish shoals (one instanced mesh) ----
  const fishCount = 60;
  const fish = new THREE.InstancedMesh(
    new THREE.ConeGeometry(0.12, 0.5, 5),
    stdMat(0xffc93d, { roughness: 0.4, emissive: 0x332200 }),
    fishCount
  );
  const shoals = [];
  for (let sIdx = 0; sIdx < 3; sIdx++) {
    shoals.push({
      cx: rand(W.xMin + 40, W.xMax - 40), cz: rand(W.zMin + 60, W.zMax - 40),
      r: rand(6, 14), y: terrainH(0, 0) + rand(3, 8), speed: rand(0.4, 0.9), phase: rand(0, 6),
    });
  }
  group.add(fish);

  // ---- coral reef (Coral Gardens) ----
  let reef = null;
  if (def.reef) {
    reef = buildCoralReef(group, 6);
    const c = reef.centers[0];
    shoals[0] = {
      cx: c.x, cz: c.z, r: rand(6, 9), y: terrainH(c.x, c.z) + rand(4, 7),
      speed: rand(0.5, 0.9), phase: rand(0, 6),
    };
  }

  // ---- volcano (The Volcano) ----
  if (def.volcano) {
    const v = new THREE.Group();
    const rockM = stdMat(0x241814, { roughness: 0.95 });
    const cone = new THREE.Mesh(new THREE.ConeGeometry(70, 55, 14, 3, true),
      new THREE.MeshStandardMaterial({ color: 0x241814, roughness: 0.95, side: THREE.DoubleSide }));
    cone.position.set(0, def.sandY + 22, -240);
    v.add(cone);
    const crater = new THREE.Mesh(new THREE.CircleGeometry(15, 16),
      stdMat(0xff6a1a, { emissive: 0xff5500, emissiveIntensity: 2.8, side: THREE.DoubleSide }));
    crater.rotation.x = -Math.PI / 2;
    crater.position.set(0, def.sandY + 38, -240);
    v.add(crater);
    const lavaM = stdMat(0xff5a12, { emissive: 0xff4400, emissiveIntensity: 2.4, side: THREE.DoubleSide, roughness: 0.4 });
    for (let i = 0; i < 7; i++) {
      const a = rand(0, Math.PI * 2);
      const pivot = new THREE.Group();
      pivot.position.set(0, def.sandY + rand(8, 28), -240);
      const flow = new THREE.Mesh(new THREE.ConeGeometry(rand(1.5, 3), rand(14, 28), 6, 1, true), lavaM);
      flow.position.set(rand(26, 52), rand(2, 8), 0);
      flow.rotation.z = Math.PI + rand(0.5, 1.0);
      pivot.add(flow);
      pivot.rotation.y = a;
      v.add(pivot);
    }
    const vlight = new THREE.PointLight(0xff5a20, 2.4, 180, 1.2);
    vlight.position.set(0, def.sandY + 45, -240);
    v.add(vlight);
    group.add(v);
  }

  // ---- ambient bubbles ----
  const bCount = 90;
  const bpos = new Float32Array(bCount * 3);
  for (let i = 0; i < bCount; i++) {
    bpos.set([rand(W.xMin, W.xMax), rand(def.sandY, 0), rand(W.zMin, W.zMax)], i * 3);
  }
  const bgeo = new THREE.BufferGeometry();
  bgeo.setAttribute('position', new THREE.BufferAttribute(bpos, 3));
  const bubbles = new THREE.Points(bgeo, new THREE.PointsMaterial({ color: 0xbfefff, size: 0.18, transparent: true, opacity: 0.5 }));
  group.add(bubbles);

  // ---- cave + treasures ----
  const caveX = rand(-80, 80), caveZ = rand(-220, -120);
  const cave = buildCave(caveX, terrainH(caveX, caveZ), caveZ);
  group.add(cave.group);
  const caveTreasures = [];
  for (let i = 0; i < 3; i++) {
    caveTreasures.push({ x: caveX + rand(-2.5, 2.5), z: caveZ + rand(-2.5, 2.5) });
  }

  // ---- portal ----
  const portalX = 0, portalZ = W.zMin + 15;
  const portal = buildPortal(portalX, terrainH(portalX, portalZ) + 6, portalZ);
  group.add(portal.group);

  // Hermy's pineapple house — a cozy beacon in every level, on the mid-level seabed
  const house = buildPineappleHouse();
  const hx = rand(-40, 40), hz = rand(-120, -70);
  house.position.set(hx, terrainH(hx, hz) + 2.6, hz);
  house.userData.baseY = house.position.y;
  group.add(house);

  return {
    water: { mesh: wmesh, base: wbase },
    fish: { mesh: fish, shoals },
    bubbles, cave, caveTreasures, portal, reef, house,
    kelps: group.userData.kelps || [],
  };
}

export function updateScenery(sc, t, dt) {
  // pineapple house: fire flicker + TV glow + gentle bob
  if (sc.house) {
    const h = sc.house;
    if (h.userData.fire) {
      h.userData.fire.scale.set(1 + Math.sin(t * 11) * 0.12, 1 + Math.sin(t * 13 + 1) * 0.18, 1);
      h.userData.glow.intensity = 1.9 + Math.sin(t * 9) * 0.5 + Math.random() * 0.4;
    }
    if (h.userData.tv) h.userData.tv.material.emissiveIntensity = 1.1 + Math.sin(t * 2.2) * 0.5;
    h.position.y = h.userData.baseY + Math.sin(t * 0.6) * 0.15;
    h.rotation.z = Math.sin(t * 0.5) * 0.02;
  }
  // water waves
  const p = sc.water.mesh.geometry.attributes.position;
  const b = sc.water.base;
  for (let i = 0; i < p.count; i++) {
    const x = b[i * 3], z = b[i * 3 + 2];
    p.array[i * 3 + 1] = Math.sin(x * 0.13 + t * 1.1) * 0.3 + Math.cos(z * 0.11 + t * 0.8) * 0.3;
  }
  p.needsUpdate = true;

  // kelp sway
  for (const k of sc.kelps) k.rotation.z = Math.sin(t * 0.8 + k.userData.phase) * 0.16;

  // anemone tentacle sway
  if (sc.reef) {
    for (const an of sc.reef.anemones) {
      an.userData.tents.forEach((tw, i) => {
        tw.tent.rotation.z = -tw.base - Math.sin(t * 2.2 + tw.ph + i * 0.8) * 0.22;
      });
    }
  }

  // fish orbit their shoal center
  for (let i = 0; i < sc.fish.mesh.count; i++) {
    const sh = sc.fish.shoals[Math.floor(i / 20)];
    const a = t * sh.speed + sh.phase + (i % 20) * 0.32;
    _q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), a + Math.PI / 2);
    _m4.compose(
      _v3.set(sh.cx + Math.cos(a) * sh.r, sh.y + Math.sin(t * 2 + i) * 1.2, sh.cz + Math.sin(a) * sh.r),
      _q, new THREE.Vector3(1, 1, 1)
    );
    sc.fish.mesh.setMatrixAt(i, _m4);
  }
  sc.fish.mesh.instanceMatrix.needsUpdate = true;

  // bubbles rise
  const bp = sc.bubbles.geometry.attributes.position;
  for (let i = 0; i < bp.count; i++) {
    let y = bp.getY(i) + (0.8 + (i % 5) * 0.2) * dt;
    if (y > -0.3) y = world.def.sandY - 5;
    bp.setY(i, y);
  }
  bp.needsUpdate = true;

  // portal pulse
  const pr = sc.portal;
  pr.group.rotation.y += dt * 0.4;
  const active = world.portalActive;
  const s = 1 + Math.sin(t * (active ? 4 : 1.2)) * (active ? 0.06 : 0.02);
  pr.group.scale.setScalar(s);
  pr.group.userData.ringMat.emissive.setHex(active ? 0x22ffcc : 0x0a1a22);
  pr.group.userData.disc.material.color.setHex(active ? 0x33ffcc : 0x113344);
  pr.group.userData.disc.material.opacity = active ? 0.65 : 0.35;
}
