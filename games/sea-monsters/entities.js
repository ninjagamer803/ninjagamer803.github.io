// Gameplay entities
import * as THREE from 'three';
import { S, W, rand, randInt, clamp, lerp, dist3, terrainH, addScore, world } from './state.js';
import { Sfx } from './audio.js';
import {
  buildJelly, buildShark, buildOctopus, buildSquid, buildMegalodon, buildGoblinShark, buildGreatWhite, buildAngler, buildLavaMega, buildHermitCrab, HERMIT_SHELL_COLORS, buildTurtle,
  buildPowerup, buildTreasure, POWERUP_TYPES, POWERUP_KEYS,
} from './models.js';

const P = () => S.player;
const _v = new THREE.Vector3();
const _v2 = new THREE.Vector3();

// --------------------------- enemies ---------------------------
export class Enemy {
  constructor(type, pos, scale) {
    this.type = type;
    this.mesh = { jelly: buildJelly, shark: buildShark, octo: buildOctopus, squid: buildSquid, megalodon: buildMegalodon, goblin: buildGoblinShark, greatwhite: buildGreatWhite, angler: buildAngler, lavamega: buildLavaMega }[type]();
    this.mesh.position.copy(pos);
    S.scene.add(this.mesh);
    this.pos = this.mesh.position;
    const base = { jelly: [20, 8, 1.6, 2.2], shark: [55, 18, 1.8, 3.4], octo: [65, 12, 1.6, 2.6], squid: [420, 30, 3, 2.2], megalodon: [600, 38, 5, 3.4], goblin: [50, 16, 1.7, 2.8], greatwhite: [150, 24, 3.2, 4.0], angler: [30, 12, 2.2, 1.9], lavamega: [1000, 45, 6, 3.6] }[type];
    this.maxHp = base[0] * scale; this.hp = this.maxHp;
    this.dmg = base[1] * scale;
    this.radius = base[2];
    this.speed = base[3] * (type === 'squid' ? 2.2 : type === 'megalodon' ? 1.5 : type === 'goblin' ? 1.5 : type === 'greatwhite' ? 1.4 : type === 'lavamega' ? 1.6 : 1);
    this.dashT = 0; this.dashDir = new THREE.Vector3(); this.hitCd = 0;
    this.lungeT = 0; this.lungeDir = new THREE.Vector3();
    this.stun = 0; this.atkCd = rand(0, 1); this.dead = false;
    this.wander = new THREE.Vector3(rand(-1, 1), 0, rand(-1, 1)).normalize();
    this.wt = rand(2, 6); this.bobPhase = rand(0, 6);
    this.score = { jelly: 10, shark: 25, octo: 30, squid: 200, megalodon: 500, goblin: 40, greatwhite: 120, angler: 40, lavamega: 1200 }[type];
    if (type === 'squid') { Sfx.roar(); S.showMsg('☠️ THE COLOSSAL SQUID AWAKENS ☠️', 3200); }
    if (type === 'megalodon') { Sfx.roar(); S.showMsg('☠️ THE MEGALODON SURFACES ☠️', 3600); }
    if (type === 'greatwhite') { Sfx.roar(); S.showMsg('🦈 GREAT WHITES CIRCLE THE DARK…', 3200); }
    if (type === 'lavamega') {
      Sfx.roar(); S.showMsg('🌋 THE LAVA MEGALODON AWAKENS 🌋', 3800);
      const L = new THREE.PointLight(0xff5522, 3, 30, 1.5);
      this.mesh.add(L);
    }
  }
  takeDamage(d, src) {
    if (this.dead) return;
    this.hp -= d;
    spawnBurst(this.pos, 0xffcc66, 5, 5, 0.4);
    Sfx.hit();
    if (this.hp <= 0) this.die();
  }
  die() {
    this.dead = true;
    spawnBurst(this.pos, 0xbfefff, 14, 7, 0.8);
    Sfx.kill();
    addScore(this.score);
    world.kills = S.kills; S.kills++;
    if (!['squid', 'megalodon', 'greatwhite', 'lavamega'].includes(this.type) && Math.random() < 0.25) {
      S.powerups.push(new Powerup(this.pos.clone().add(_v.set(0, 1.5, 0)), POWERUP_KEYS[randInt(0, POWERUP_KEYS.length - 1)]));
    }
    if (this.type === 'squid') S.showMsg('🎉 COLOSSAL SQUID DEFEATED! The portal opens…', 3500);
    if (this.type === 'megalodon') S.showMsg('🎉 MEGALODON DEFEATED! The deep falls silent…', 3500);
    if (this.type === 'greatwhite') S.showMsg('🎉 THE GREAT WHITES ARE NO MORE…', 3200);
    if (this.type === 'lavamega') { spawnBurst(this.pos, 0xff6a00, 26, 10, 1.4); S.showMsg('🌋 LAVA MEGALODON COLLAPSES INTO CINDER…', 3800); }
    S.enemies.splice(S.enemies.indexOf(this), 1);
    S.scene.remove(this.mesh);
    S.checkPortal();
  }
  update(dt, t) {
    if (this.dead) return;
    const pl = P();
    this.stun = Math.max(0, this.stun - dt);
    this.atkCd -= dt;
    this.hitCd = Math.max(0, this.hitCd - dt);
    const toP = _v.copy(pl.pos).sub(this.pos); toP.y *= 0.6;
    const d = toP.length();
    const spd = this.stun > 0 ? 0 : this.speed * S.scaleSpd;

    if (this.type === 'jelly') {
      const m = toP.normalize().multiplyScalar(spd);
      this.pos.x += m.x * dt; this.pos.z += m.z * dt;
      this.pos.y = terrainH(this.pos.x, this.pos.z) + 3 + Math.sin(t * 1.3 + this.bobPhase) * 1.5;
      this.mesh.rotation.z = Math.sin(t + this.bobPhase) * 0.25;
      this.mesh.userData.tents.forEach((tt, i) => { tt.scale.y = 1 + Math.sin(t * 3 + i) * 0.25; });
      if (d < this.radius + 1 && this.atkCd <= 0) { pl.hurt(this.dmg, this.pos); this.atkCd = 1.2; }
    } else if (this.type === 'shark') {
      let m;
      if (d < 60) m = toP.normalize().multiplyScalar(spd * (d < 12 ? 1.9 : 1));
      else {
        this.wt -= dt;
        if (this.wt <= 0) { this.wt = rand(3, 7); this.wander.set(rand(-1, 1), 0, rand(-1, 1)).normalize(); }
        m = this.wander.clone().multiplyScalar(spd * 0.5);
      }
      this.pos.addScaledVector(m, dt);
      this.pos.y = clamp(this.pos.y + Math.sin(t * 2 + this.bobPhase) * 0.9 * dt,
        terrainH(this.pos.x, this.pos.z) + 1.5, W.yTop - 1);
      this.mesh.lookAt(pl.pos);
      if (d < this.radius + 1.6 && this.atkCd <= 0) { pl.hurt(this.dmg, this.pos); this.atkCd = 1.1; }
    } else if (this.type === 'octo') {
      let m;
      if (d < 14) m = toP.clone().normalize().multiplyScalar(-spd);
      else if (d > 26) m = toP.clone().normalize().multiplyScalar(spd);
      else m = _v2.set(-toP.z, 0, toP.x).normalize().multiplyScalar(spd * 0.6);
      this.pos.addScaledVector(m, dt);
      this.pos.y = terrainH(this.pos.x, this.pos.z) + 3.5 + Math.sin(t * 1.1 + this.bobPhase) * 1.2;
      this.mesh.lookAt(pl.pos);
      this.mesh.userData.arms.forEach((a, i) => { a.rotation.y = Math.sin(t * 2 + i) * 0.5; });
      if (d < 35 && this.atkCd <= 0) {
        this.atkCd = rand(1.2, 1.8);
        const dir = pl.pos.clone().sub(this.pos).normalize();
        S.projectiles.push(new Ink(this.pos.clone().addScaledVector(dir, 1.6), dir, this.dmg));
        Sfx.bubble();
      }
    } else if (this.type === 'squid') {
      let m;
      if (d > 10) m = toP.clone().normalize().multiplyScalar(spd * 0.8);
      else m = _v2.set(-toP.z, 0, toP.x).normalize().multiplyScalar(spd * 0.5);
      this.pos.addScaledVector(m, dt);
      this.pos.y = terrainH(this.pos.x, this.pos.z) + 5.5 + Math.sin(t * 0.7 + this.bobPhase) * 1.5;
      this.mesh.lookAt(pl.pos);
      this.mesh.userData.arms.forEach((a, i) => { a.rotation.y += Math.sin(t * 1.5 + i * 1.1) * 1.0 * dt; });
      if (d < 12 && this.atkCd <= 0) {
        this.atkCd = 1.6;
        pl.hurt(this.dmg, this.pos);
        for (let i = -1; i <= 1; i++) {
          const dir = pl.pos.clone().sub(this.pos).normalize();
          dir.x += i * 0.35; dir.normalize();
          S.projectiles.push(new Ink(this.pos.clone(), dir, this.dmg * 0.5));
        }
        Sfx.bubble();
      }
    } else if (this.type === 'goblin') {
      let m;
      if (this.dashT > 0) {
        this.dashT -= dt;
        m = this.dashDir.clone().multiplyScalar(spd * 2.6);
      } else if (d < 55) {
        m = toP.normalize().multiplyScalar(spd);
        if (d < 14 && this.atkCd <= 0) { this.atkCd = rand(2, 3); this.dashT = 0.5; this.dashDir = toP.clone().normalize(); Sfx.blip(300, 80, 0.2, 'sawtooth', 0.16); }
      } else {
        this.wt -= dt;
        if (this.wt <= 0) { this.wt = rand(3, 7); this.wander.set(rand(-1, 1), 0, rand(-1, 1)).normalize(); }
        m = this.wander.clone().multiplyScalar(spd * 0.5);
      }
      this.pos.addScaledVector(m, dt);
      this.pos.y = clamp(this.pos.y + Math.sin(t * 2.2 + this.bobPhase) * 0.8 * dt,
        terrainH(this.pos.x, this.pos.z) + 2, W.yTop - 1);
      this.mesh.lookAt(pl.pos);
      if (d < this.radius + 1.5 && this.hitCd <= 0) { pl.hurt(this.dmg, this.pos); this.hitCd = 1.1; }
    } else if (this.type === 'megalodon' || this.type === 'lavamega') {
      let m;
      if (d < 80) m = toP.normalize().multiplyScalar(spd * (d < 22 ? 2.1 : 1));
      else {
        this.wt -= dt;
        if (this.wt <= 0) { this.wt = rand(4, 8); this.wander.set(rand(-1, 1), 0, rand(-1, 1)).normalize(); }
        m = this.wander.clone().multiplyScalar(spd * 0.5);
      }
      this.pos.addScaledVector(m, dt);
      this.pos.y = clamp(this.pos.y + Math.sin(t * 1.8 + this.bobPhase) * 0.7 * dt,
        terrainH(this.pos.x, this.pos.z) + 4, W.yTop - 1.5);
      this.mesh.lookAt(pl.pos);
      this.mesh.userData.tail.rotation.y = Math.sin(t * 2.4 + this.bobPhase) * 0.5;
      if (this.type === 'lavamega' && Math.random() < dt * 8) spawnBurst(_v2.set(this.pos.x + rand(-4, 4), this.pos.y + rand(-2, 2), this.pos.z + rand(-4, 4)), 0xff6a00, 2, 3, 0.7);
      if (d < this.radius + 1.8 && this.atkCd <= 0) { pl.hurt(this.dmg, this.pos); this.atkCd = 1.4; }
    } else if (this.type === 'greatwhite') {
      let m;
      if (this.lungeT > 0) { this.lungeT -= dt; m = this.lungeDir.clone().multiplyScalar(spd * 2.2); }
      else if (d < 90) {
        m = toP.normalize().multiplyScalar(spd);
        if (d < 18 && this.atkCd <= 0) { this.atkCd = rand(1.8, 2.6); this.lungeT = 0.55; this.lungeDir = toP.clone().normalize(); Sfx.blip(150, 55, 0.25, 'sawtooth', 0.22); }
      } else {
        this.wt -= dt;
        if (this.wt <= 0) { this.wt = rand(3, 7); this.wander.set(rand(-1, 1), 0, rand(-1, 1)).normalize(); }
        m = this.wander.clone().multiplyScalar(spd * 0.5);
      }
      this.pos.addScaledVector(m, dt);
      this.pos.y = clamp(this.pos.y + Math.sin(t * 2 + this.bobPhase) * 0.9 * dt,
        terrainH(this.pos.x, this.pos.z) + 3, W.yTop - 1.5);
      this.mesh.lookAt(pl.pos);
      this.mesh.userData.tail.rotation.y = Math.sin(t * 4 + this.bobPhase) * 0.45;
      if (d < this.radius + 2 && this.hitCd <= 0) { pl.hurt(this.dmg, this.pos); this.hitCd = 1.0; }
    } else if (this.type === 'angler') {
      let m;
      if (d < 80) m = toP.normalize().multiplyScalar(spd);
      else {
        this.wt -= dt;
        if (this.wt <= 0) { this.wt = rand(4, 8); this.wander.set(rand(-1, 1), 0, rand(-1, 1)).normalize(); }
        m = this.wander.clone().multiplyScalar(spd * 0.4);
      }
      this.pos.addScaledVector(m, dt);
      this.pos.y = clamp(this.pos.y + Math.sin(t * 1.5 + this.bobPhase) * 0.6 * dt,
        terrainH(this.pos.x, this.pos.z) + 1.5, W.yTop - 1);
      this.mesh.lookAt(pl.pos);
      const bulb = this.mesh.userData.bulb;
      if (bulb) bulb.material.emissiveIntensity = 1.4 + Math.sin(t * 3 + this.bobPhase) * 1.2;
      if (d < this.radius + 1.6 && this.hitCd <= 0) { pl.hurt(this.dmg, this.pos); this.hitCd = 1.2; }
    }
    this.pos.x = clamp(this.pos.x, W.xMin + 3, W.xMax - 3);
    this.pos.z = clamp(this.pos.z, W.zMin + 3, W.zMax - 3);
    this.pos.y = Math.max(this.pos.y, terrainH(this.pos.x, this.pos.z) + 1);
  }
}

// --------------------------- friends ---------------------------
export class Friend {
  constructor(pos, lifetime) {
    this.mesh = buildHermitCrab(HERMIT_SHELL_COLORS[randInt(0, HERMIT_SHELL_COLORS.length - 1)]);
    this.mesh.position.copy(pos);
    S.scene.add(this.mesh);
    this.pos = this.mesh.position;
    this.hp = 60 * S.scale; this.dead = false;
    this.life = lifetime; this.radius = 0.5;
    this.atkCd = rand(0, 0.5);
    this.lunge = new THREE.Vector3(); this.lunging = 0;
    this.legPhase = rand(0, 6.28);
  }
  takeDamage(d) { this.hp -= d; if (this.hp <= 0) this.die(); }
  die() {
    this.dead = true;
    spawnBurst(this.pos, 0xff8855, 8, 5, 0.6);
    Sfx.kill();
    S.friends.splice(S.friends.indexOf(this), 1);
    S.scene.remove(this.mesh);
  }
  update(dt, t) {
    if (this.dead) return;
    const pl = P();
    this.life -= dt;
    if (this.life <= 0) { this.die(); return; }
    this.atkCd -= dt;
    let best = null, bd = 8;
    for (const e of S.enemies) { const d = dist3(this.pos, e.pos); if (d < bd) { bd = d; best = e; } }
    if (best) {
      const dir = _v.copy(best.pos).sub(this.pos).normalize();
      if (bd < 2.4 && this.atkCd <= 0) {
        this.atkCd = 0.8;
        best.takeDamage(15, this.pos);
        this.lunge.copy(dir); this.lunging = 0.25;
      } else this.pos.addScaledVector(dir, 7 * dt);
    } else {
      const d = dist3(this.pos, pl.pos);
      if (d > 2.5) this.pos.addScaledVector(_v.copy(pl.pos).sub(this.pos).normalize(), 8 * dt);
    }
    if (this.lunging > 0) { this.lunging -= dt; this.pos.addScaledVector(this.lunge, 10 * dt); }
    this.pos.y = lerp(this.pos.y, terrainH(this.pos.x, this.pos.z) + 0.7, 1 - Math.exp(-8 * dt));
    this.mesh.position.copy(this.pos);
    const tx = best ? best.pos : pl.pos;
    this.mesh.rotation.y = Math.atan2(tx.x - this.pos.x, tx.z - this.pos.z) + Math.PI;
    this.mesh.rotation.z = Math.sin(t * 14) * 0.15;
    this.mesh.userData.legs.forEach((leg, i) => { leg.rotation.z = (i < 4 ? -1 : 1) * (0.9 + Math.sin(t * 16 + this.legPhase + i) * 0.35); });
    this.mesh.visible = this.life > 5 || Math.sin(t * 12) > 0;
  }
}

export class Turtle {
  constructor(pos) {
    this.mesh = buildTurtle();
    this.mesh.position.copy(pos);
    S.scene.add(this.mesh);
    this.pos = this.mesh.position;
    this.wt = rand(2, 6);
    this.wander = new THREE.Vector3(rand(-1, 1), 0, rand(-1, 1)).normalize();
    this.cool = 0; this.speed = 3.5;
    this.rushing = false; this.dashT = 0; this.baseY = 0;
  }
  react() { // player was hurt nearby → rush to shield him
    if (this.cool > 0) return;
    if (dist3(this.pos, P().pos) < 55) { this.rushing = true; this.dashT = 5; this.cool = 22; }
  }
  update(dt, t) {
    const pl = P();
    this.cool -= dt;
    if (this.rushing) {
      this.dashT -= dt;
      if (this.dashT <= 0 || dist3(this.pos, pl.pos) < 1.6) {
        this.rushing = false;
        if (pl.shield < 50) { pl.shield = Math.min(50, pl.shield + 40); S.showMsg('🐢 Turtle shell shield! +40', 1500); Sfx.powerup(); }
      }
      this.pos.addScaledVector(_v.copy(pl.pos).sub(this.pos).normalize(), 11 * dt);
    } else {
      this.wt -= dt;
      if (this.wt <= 0) { this.wt = rand(3, 8); this.wander.set(rand(-1, 1), 0, rand(-1, 1)).normalize(); }
      this.pos.addScaledVector(this.wander, this.speed * dt);
    }
    this.pos.x = clamp(this.pos.x, W.xMin + 5, W.xMax - 5);
    this.pos.z = clamp(this.pos.z, W.zMin + 5, W.zMax - 5);
    this.pos.y = terrainH(this.pos.x, this.pos.z) + 0.9 + Math.sin(t * 1.2 + this.pos.x * 0.3) * 0.1;
    const look = _v2.copy(this.pos);
    if (this.rushing) look.copy(pl.pos);
    else look.add(_v.copy(this.wander));
    this.mesh.lookAt(look);
  }
}

// --------------------------- pickups / projectiles ---------------------------
export class Powerup {
  constructor(pos, type) {
    this.type = type;
    this.mesh = buildPowerup(type);
    this.mesh.position.copy(pos);
    S.scene.add(this.mesh);
    this.pos = this.mesh.position;
    this.bob = rand(0, 6); this.life = 45;
  }
  apply() {
    const pl = P();
    switch (this.type) {
      case 'heal': pl.hp = Math.min(100, pl.hp + 25); break;
      case 'shield': pl.shield = Math.min(50, pl.shield + 30); break;
      case 'rapid': pl.buffs.rapid = 8; break;
      case 'speed': pl.buffs.speed = 8; break;
      case 'charge': pl.shellCharges = Math.min(5, pl.shellCharges + 1); break;
    }
    Sfx.powerup();
    S.showMsg(POWERUP_TYPES[this.type].label + '!', 1300);
    addScore(5);
  }
  update(dt, t) {
    this.life -= dt;
    if (this.life <= 0) { S.powerups.splice(S.powerups.indexOf(this), 1); S.scene.remove(this.mesh); return; }
    this.mesh.rotation.y += dt * 2;
    this.mesh.position.y = terrainH(this.pos.x, this.pos.z) + 1.2 + Math.sin(t * 2 + this.bob) * 0.4;
    if (this.life < 8) this.mesh.visible = Math.sin(t * 10) > -0.3;
    if (dist3(this.pos, P().pos) < 1.9) {
      this.apply();
      S.powerups.splice(S.powerups.indexOf(this), 1);
      S.scene.remove(this.mesh);
    }
  }
}

export class Treasure {
  constructor(pos) {
    this.mesh = buildTreasure();
    this.mesh.position.copy(pos);
    S.scene.add(this.mesh);
    this.pos = this.mesh.position;
    this.got = false; this.bob = rand(0, 6);
  }
  update(dt, t) {
    if (this.got) return;
    this.mesh.rotation.y += dt * 1.5;
    this.mesh.position.y = terrainH(this.pos.x, this.pos.z) + 0.8 + Math.sin(t * 1.5 + this.bob) * 0.25;
    if (dist3(this.pos, P().pos) < 2.4) {
      this.got = true;
      addScore(50);
      P().hp = Math.min(100, P().hp + 15);
      Sfx.treasure();
      S.showMsg('🪙 Ancient pearl! +50 pts, +15 HP', 1600);
      spawnBurst(this.pos, 0xffe9a0, 16, 6, 0.9);
      S.treasures.splice(S.treasures.indexOf(this), 1);
      S.scene.remove(this.mesh);
    }
  }
}

export class Ink {
  constructor(pos, dir, dmg) {
    this.mesh = new THREE.Mesh(new THREE.SphereGeometry(0.32, 8, 6),
      new THREE.MeshStandardMaterial({ color: 0x2d1040, emissive: 0x5522aa, emissiveIntensity: 0.8, transparent: true, opacity: 0.9 }));
    this.mesh.position.copy(pos);
    S.scene.add(this.mesh);
    this.pos = this.mesh.position;
    this.dir = dir.clone();
    this.dmg = dmg; this.life = 3;
  }
  update(dt) {
    const kill = () => { S.projectiles.splice(S.projectiles.indexOf(this), 1); S.scene.remove(this.mesh); };
    this.life -= dt;
    this.pos.addScaledVector(this.dir, 10 * dt);
    if (this.life <= 0) { Sfx.bubble(); kill(); return; }
    if (dist3(this.pos, P().pos) < P().radius + 0.4) { P().hurt(this.dmg, this.pos); kill(); return; }
    if (this.pos.y < terrainH(this.pos.x, this.pos.z) + 0.3) kill();
  }
}

// A lost hermit crab wandering a level — rescue it (E) and it fights for the rest of the level
export class LostCrab {
  constructor(pos) {
    const col = HERMIT_SHELL_COLORS[randInt(0, HERMIT_SHELL_COLORS.length - 1)];
    this.mesh = buildHermitCrab(col);
    this.mesh.position.copy(pos);
    this.pos = this.mesh.position;
    // glowing "lost" marker above the crab
    const mk = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 6),
      new THREE.MeshBasicMaterial({ color: 0xffe27a, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false }));
    mk.position.y = 1.6;
    this.marker = mk;
    this.mesh.add(mk);
    S.scene.add(this.mesh);
    this.target = pos.clone();
    this.retarget = 0;
    this.prompted = false;
    this.dead = false;
    this.phase = rand(0, 6.28);
  }
  update(dt, t) {
    if (this.dead) return;
    // gentle bob + marker pulse
    this.marker.position.y = 1.6 + Math.sin(t * 2.2 + this.phase) * 0.15;
    this.marker.material.opacity = 0.55 + Math.sin(t * 3 + this.phase) * 0.35;
    const d = S.player ? S.player.pos.distanceTo(this.pos) : 1e9;
    if (d < 10 && !this.prompted) {
      this.prompted = true;
      S.showMsg('🐚 A LOST hermit crab! Press E to rescue it', 2200);
      Sfx.blip(500, 720, 0.12, 'sine', 0.16);
    } else if (d > 13) this.prompted = false;
    // wander, or freeze facing the player when near
    if (d < 8) {
      this.mesh.rotation.y = Math.atan2(S.player.pos.x - this.pos.x, S.player.pos.z - this.pos.z);
    } else {
      this.retarget -= dt;
      if (this.retarget <= 0 || this.pos.distanceTo(this.target) < 1) {
        this.retarget = rand(2, 5);
        const a = rand(0, Math.PI * 2);
        const r = rand(3, 11);
        this.target.set(
          clamp(this.pos.x + Math.cos(a) * r, W.xMin + 8, W.xMax - 8),
          this.pos.y,
          clamp(this.pos.z + Math.sin(a) * r, W.zMin + 8, W.zMax - 8)
        );
      }
      this.pos.add(_v.set(this.target.x - this.pos.x, 0, this.target.z - this.pos.z).normalize().multiplyScalar(1.4 * dt));
      this.mesh.rotation.y = Math.atan2(this.target.x - this.pos.x, this.target.z - this.pos.z);
    }
    this.pos.y = Math.max(terrainH(this.pos.x, this.pos.z) + 0.4, Math.min(this.pos.y, W.yTop - 0.5));
  }
  rescue() {
    if (this.dead) return;
    this.dead = true;
    Sfx.summon();
    Sfx.blip(400, 900, 0.2, 'triangle', 0.2);
    S.showMsg('🐚🦀 A new friend joins the battle — for the whole level!', 2600);
    const f = new Friend(this.pos.clone().add(_v.set(0, 0.2, 0)), 1e9);
    f.mesh.scale.setScalar(1.3);
    S.friends.push(f);
    spawnBurst(this.pos, 0xffe27a, 14, 5, 0.8);
    S.lostCrabs.splice(S.lostCrabs.indexOf(this), 1);
    S.scene.remove(this.mesh);
  }
}

// 100,000-crab super attack: one InstancedMesh swarm that flocks onto enemies
export class CrabSwarm {
  constructor(origin) {
    const N = 550;
    const geo = new THREE.SphereGeometry(0.55, 6, 5);
    const mat = stdMatLocal(0xffffff, { roughness: 0.6 });
    this.mesh = new THREE.InstancedMesh(geo, mat, N);
    this.mesh.count = N;
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.N = N;
    this.life = 8; this.maxLife = 8;
    this.center = origin.clone();
    this.dead = false;
    this.dmgT = 0;
    const dummy = new THREE.Object3D();
    const c = new THREE.Color();
    for (let i = 0; i < N; i++) {
      const a = rand(0, Math.PI * 2);
      const r = rand(4, 16);
      this.offs = this.offs || [];
      this.offs.push(new THREE.Vector3(Math.cos(a) * r, rand(-2.5, 3), Math.sin(a) * r));
      this.ph = this.ph || [];
      this.ph.push(rand(0, 6.28));
      dummy.position.copy(origin).add(this.offs[i]);
      dummy.scale.setScalar(rand(0.6, 1.6));
      dummy.updateMatrix();
      this.mesh.setMatrixAt(i, dummy.matrix);
      c.setHex(HERMIT_SHELL_COLORS[i % HERMIT_SHELL_COLORS.length]);
      this.mesh.setColorAt(i, c);
    }
    this.mesh.instanceColor.needsUpdate = true;
    this.dummy = dummy;
    S.scene.add(this.mesh);
  }
  update(dt, t) {
    if (this.dead) return;
    this.life -= dt;
    if (this.life <= 0) { this.die(); return; }
    // chase the nearest living enemy
    let best = null, bd = 1e9;
    for (const e of S.enemies) {
      if (e.dead) continue;
      const d = e.pos.distanceTo(this.center);
      if (d < bd) { bd = d; best = e; }
    }
    const goal = best ? best.pos : this.center;
    this.center.lerp(goal, Math.min(1, dt * 3.5));
    // crush damage tick
    this.dmgT -= dt;
    if (this.dmgT <= 0) {
      this.dmgT = 0.25;
      let hit = 0;
      for (const e of S.enemies) {
        if (e.dead) continue;
        if (e.pos.distanceTo(this.center) < 28 + e.radius) { e.takeDamage(55, this.center); hit++; }
      }
      if (hit > 0 && Math.random() < 0.6) spawnBurst(this.center, 0xffd23d, 8, 6, 0.4);
    }
    // write instance matrices: swarm shell + wiggle, fade out at end
    const fade = Math.min(1, this.life / 1.5);
    for (let i = 0; i < this.N; i++) {
      const o = this.offs[i];
      this.dummy.position.set(
        this.center.x + o.x + Math.sin(t * 3 + this.ph[i]) * 1.6,
        Math.max(terrainH(this.center.x + o.x, this.center.z + o.z) + 0.6,
                  this.center.y + o.y + Math.sin(t * 4 + this.ph[i]) * 1.2),
        this.center.z + o.z + Math.cos(t * 2.6 + this.ph[i]) * 1.6
      );
      this.dummy.scale.setScalar((0.6 + (i % 10) * 0.1) * fade);
      this.dummy.updateMatrix();
      this.mesh.setMatrixAt(i, this.dummy.matrix);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
  }
  die() {
    if (this.dead) return;
    this.dead = true;
    spawnBurst(this.center, 0xffd23d, 24, 12, 1.2);
    Sfx.kill();
    S.showMsg('🦀 The swarm scatters back to the reef…', 2500);
    S.swarms.splice(S.swarms.indexOf(this), 1);
    S.scene.remove(this.mesh);
    this.mesh.dispose?.();
  }
}

// small local material helper (models.js's is not exported)
function stdMatLocal(color, extra) {
  return new THREE.MeshStandardMaterial(Object.assign({ color }, extra));
}

export class FlamePuff {
  constructor(pos, dir, dmg) {
    const spread = new THREE.Vector3(rand(-1, 1), rand(-0.7, 0.9), rand(-1, 1)).multiplyScalar(0.16).add(dir);
    this.mesh = new THREE.Mesh(new THREE.SphereGeometry(rand(0.28, 0.5), 7, 5),
      new THREE.MeshBasicMaterial({ color: 0xffa53a, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.mesh.position.copy(pos);
    S.scene.add(this.mesh);
    this.vel = spread.normalize().multiplyScalar(rand(16, 22));
    this.life = rand(0.34, 0.5);
    this.max = this.life;
    this.dmg = dmg;
    this.dead = false;
  }
  update(dt) {
    if (this.dead) return;
    this.life -= dt;
    if (this.life <= 0) { this.die(); return; }
    this.vel.multiplyScalar(0.93);           // flame decelerates
    this.mesh.position.addScaledVector(this.vel, dt);
    const s = 1 + (1 - this.life / this.max) * 1.6;
    this.mesh.scale.setScalar(s);
    this.mesh.material.opacity = 0.9 * (this.life / this.max);
    if (Math.random() < dt * 30) spawnBurst(this.mesh.position, 0xff7722, 1, 1.5, 0.25);
    for (const e of S.enemies) {
      if (!e.dead && this.mesh.position.distanceTo(e.pos) < e.radius + 0.8) {
        e.takeDamage(this.dmg, this.mesh.position);
        this.die();
        break;
      }
    }
  }
  die() {
    if (this.dead) return;
    this.dead = true;
    spawnBurst(this.mesh.position, 0xff8a3a, 3, 2, 0.2);
    S.scene.remove(this.mesh);
    S.projectiles.splice(S.projectiles.indexOf(this), 1);
  }
}

export class LavaBolt {
  constructor(pos, dir, dmg) {
    this.mesh = new THREE.Mesh(new THREE.SphereGeometry(0.35, 8, 6),
      new THREE.MeshStandardMaterial({ color: 0xff7722, emissive: 0xff4a00, emissiveIntensity: 1.8 }));
    this.mesh.position.copy(pos);
    S.scene.add(this.mesh);
    this.pos = this.mesh.position;
    this.vel = dir.clone().multiplyScalar(24);
    this.dmg = dmg; this.life = 2.5;
  }
  update(dt) {
    const kill = () => { S.projectiles.splice(S.projectiles.indexOf(this), 1); S.scene.remove(this.mesh); };
    this.life -= dt;
    this.vel.y -= 9 * dt;
    this.pos.addScaledVector(this.vel, dt);
    let hit = this.life <= 0 || this.pos.y < terrainH(this.pos.x, this.pos.z) + 0.3;
    for (const e of S.enemies) {
      if (!e.dead && this.pos.distanceTo(e.pos) < e.radius + 0.5) { hit = true; break; }
    }
    if (!hit) return;
    for (const e of S.enemies) {
      if (!e.dead && this.pos.distanceTo(e.pos) < 4.5 + e.radius) e.takeDamage(this.dmg, this.pos);
    }
    spawnBurst(this.pos, 0xff7722, 14, 7, 0.7);
    Sfx.boom();
    kill();
  }
}

// --------------------------- particles & beams ---------------------------
const partPool = [];
export function spawnBurst(pos, color, n, speed, life) {
  for (let i = 0; i < n; i++) {
    let p = partPool.pop();
    if (!p) {
      p = {
        mesh: new THREE.Mesh(new THREE.SphereGeometry(0.12, 6, 5), new THREE.MeshBasicMaterial({ transparent: true })),
        life: 0, vel: new THREE.Vector3(),
      };
    }
    p.mesh.material.color.setHex(color);
    p.mesh.material.opacity = 1;
    p.mesh.position.copy(pos);
    p.mesh.scale.setScalar(rand(0.5, 1.5));
    p.vel.set(rand(-1, 1), rand(-1, 1), rand(-1, 1)).normalize().multiplyScalar(rand(0.3, 1) * speed);
    p.life = rand(0.5, 1) * life;
    S.scene.add(p.mesh);
    S.particles.push(p);
  }
}
export function updateParticles(dt) {
  for (let i = S.particles.length - 1; i >= 0; i--) {
    const p = S.particles[i];
    p.life -= dt;
    if (p.life <= 0) { S.scene.remove(p.mesh); partPool.push(p); S.particles.splice(i, 1); continue; }
    p.mesh.position.addScaledVector(p.vel, dt);
    p.mesh.material.opacity = clamp(p.life / 0.4, 0, 1);
  }
}

export function fireBeam(from, to, color) {
  const geo = new THREE.BufferGeometry().setFromPoints([from, to]);
  const line = new THREE.Line(geo, new THREE.LineBasicMaterial({ color, transparent: true, opacity: 1 }));
  S.scene.add(line);
  S.beams.push({ obj: line, life: 0.13 });
}
export function updateBeams(dt) {
  for (let i = S.beams.length - 1; i >= 0; i--) {
    const b = S.beams[i];
    b.life -= dt;
    if (b.life <= 0) { S.scene.remove(b.obj); b.obj.geometry.dispose(); b.obj.material.dispose(); S.beams.splice(i, 1); continue; }
    b.obj.material.opacity = clamp(b.life / (b.max || 0.13), 0, 1) * (b.peak || 1);
  }
}
