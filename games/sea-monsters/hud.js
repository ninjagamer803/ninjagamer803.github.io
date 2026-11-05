// HUD: bars, slots, minimap, radar, boss bar
import { S, W, world } from './state.js';
import { POWERUP_TYPES } from './models.js';

const hpFill = document.getElementById('hp-fill');
const shieldFill = document.getElementById('shield-fill');
const scoreEl = document.getElementById('score');
const levelNameEl = document.getElementById('level-name');
const killGoalEl = document.getElementById('kill-goal');
const depthEl = document.getElementById('depth-gauge');
const vignette = document.getElementById('vignette');
const superAtkEl = document.getElementById('super-atk');
const slots = [0, 1, 2, 3, 4, 5].map(i => document.getElementById('slot-' + i));
const chgs = [0, 1, 2, 3, 4, 5].map(i => document.getElementById('chg-' + i));
const mmCanvas = document.getElementById('minimap');
const mmCtx = mmCanvas.getContext('2d');
const radarCanvas = document.getElementById('radar');
const radarCtx = radarCanvas.getContext('2d');

export let bossBar = null;
export function ensureBossBar() {
  if (bossBar) return;
  bossBar = document.createElement('div');
  bossBar.style.cssText = 'position:absolute;top:16px;left:50%;transform:translateX(-50%);width:320px;text-align:center;pointer-events:none;';
  bossBar.innerHTML = '<div id="boss-name" style="font-size:15px;color:#ff8f8f;font-weight:bold;">MEGALODON</div>' +
    '<div class="bar" style="margin:4px 0 0;"><div id="boss-fill" style="height:100%;width:100%;background:linear-gradient(90deg,#a83a2a,#ff6a3a);"></div></div>';
  document.getElementById('hud').appendChild(bossBar);
}
export function updateBossBar() {
  if (!bossBar) return;
  const bossNames = { megalodon: 'MEGALODON', squid: 'COLOSSAL SQUID', greatwhite: 'GREAT WHITE', lavamega: 'LAVA MEGALODON' };
  const boss = S.enemies.find(e => bossNames[e.type]);
  if (!boss) { bossBar.style.display = 'none'; return; }
  bossBar.style.display = 'block';
  const nm = bossBar.querySelector('#boss-name');
  if (nm) nm.textContent = bossNames[boss.type];
  const f = bossBar.querySelector('#boss-fill');
  if (f) f.style.width = (100 * boss.hp / boss.maxHp) + '%';
}

export function updateHUD() {
  const p = S.player;
  if (!p) return;
  hpFill.style.width = Math.max(0, p.hp) + '%';
  shieldFill.style.width = Math.max(0, p.shield) + '%';
  scoreEl.textContent = S.score;
  levelNameEl.textContent = `LV ${S.level} — ${world.def.name}`;
  killGoalEl.textContent = `⚔ Foes felled: ${S.kills} / ${world.def.kills}`;
  depthEl.textContent = `⚓ Depth: ${Math.max(0, -Math.round(p.pos.y))} m`;
  if (superAtkEl) superAtkEl.textContent = (S.superCd ?? 0) > 0
    ? `🦀 SUPER ATK [R] recharging ${Math.ceil(S.superCd)}s`
    : '🦀 SUPER ATK [R] READY';

  slots[p.weapon]?.classList.add('active');
  slots.forEach((s, i) => { if (i !== p.weapon) s.classList.remove('active'); });
  chgs[0].textContent = p.buffs.rapid > 0 ? `RAPID ×${Math.ceil(p.buffs.rapid)}s` : '';
  chgs[1].textContent = '';
  chgs[5].textContent = p.buffs.rapid > 0 ? 'HOLD·RAPID' : 'HOLD';
  chgs[2].textContent = `× ${p.shellCharges}`;
  for (const i of [3, 4]) {
    chgs[i].textContent = S.mech ? '' : '🔒 boss';
    slots[i].classList.toggle('locked', !S.mech);
  }

  if (p.hurtFlash > 0) {
    vignette.style.boxShadow = `inset 0 0 ${120 + 80 * p.hurtFlash}px rgba(255,20,20,${0.25 + 0.4 * p.hurtFlash})`;
  } else {
    vignette.style.boxShadow = 'inset 0 0 180px rgba(255,0,0,0)';
  }
  updateBossBar();
}

// ---------------- minimap ----------------
const MM_W = mmCanvas.width, MM_H = mmCanvas.height;
function mmX(x) { return (x - W.xMin) / (W.xMax - W.xMin) * MM_W; }
function mmY(z) { return (z - W.zMin) / (W.zMax - W.zMin) * MM_H; }

export function drawMinimap() {
  const p = S.player;
  if (!p) return;
  mmCtx.clearRect(0, 0, MM_W, MM_H);
  mmCtx.fillStyle = 'rgba(4,26,40,.9)';
  mmCtx.fillRect(0, 0, MM_W, MM_H);
  // cave
  if (world.cave) {
    mmCtx.fillStyle = '#0d0d12';
    mmCtx.beginPath();
    mmCtx.ellipse(mmX(world.cave.pos.x), mmY(world.cave.pos.z), 10, 8, 0, 0, 7);
    mmCtx.fill();
  }
  // portal
  const pp = world.portal.pos;
  mmCtx.fillStyle = world.portalActive ? '#22ffcc' : '#284';
  mmCtx.beginPath(); mmCtx.arc(mmX(pp.x), mmY(pp.z), 4, 0, 7); mmCtx.fill();
  // pineapple house (safe zone)
  if (world.house) {
    mmCtx.fillStyle = '#ffcf4d';
    const hxx = mmX(world.house.position.x), hyy = mmY(world.house.position.z);
    mmCtx.fillRect(hxx - 3, hyy - 3, 6, 6);
    mmCtx.fillStyle = '#7a4a10';
    mmCtx.fillRect(hxx - 1, hyy - 5, 2, 2);
  }
  // entities
  const dot = (x, z, color, r = 2.5) => { mmCtx.fillStyle = color; mmCtx.beginPath(); mmCtx.arc(mmX(x), mmY(z), r, 0, 7); mmCtx.fill(); };
  for (const t of S.treasures) if (!t.got) dot(t.pos.x, t.pos.z, '#ffe9a0');
  for (const pw of S.powerups) dot(pw.pos.x, pw.pos.z, POWERUP_TYPES[pw.type].color);
  for (const tu of S.turtles) dot(tu.pos.x, tu.pos.z, '#5fd47a', 3);
  for (const e of S.enemies) dot(e.pos.x, e.pos.z, ['squid','megalodon','greatwhite','lavamega'].includes(e.type) ? '#ff3a2a' : '#ff6a5a', ['squid','megalodon','greatwhite','lavamega'].includes(e.type) ? 5 : 2.5);
  for (const f of S.friends) dot(f.pos.x, f.pos.z, '#ffd23d', 2);
  // player arrow
  mmCtx.save();
  mmCtx.translate(mmX(p.pos.x), mmY(p.pos.z));
  mmCtx.rotate(-S.yaw);
  mmCtx.fillStyle = '#8ff2c0';
  mmCtx.beginPath(); mmCtx.moveTo(0, -6); mmCtx.lineTo(4, 5); mmCtx.lineTo(-4, 5); mmCtx.closePath(); mmCtx.fill();
  mmCtx.restore();
}

// ---------------- radar ----------------
const RR = radarCanvas.width / 2;
export function drawRadar() {
  const p = S.player;
  if (!p) return;
  radarCtx.clearRect(0, 0, RR * 2, RR * 2);
  radarCtx.fillStyle = 'rgba(4,26,40,.9)';
  radarCtx.beginPath(); radarCtx.arc(RR, RR, RR, 0, 7); radarCtx.fill();
  radarCtx.strokeStyle = 'rgba(120,220,255,.3)';
  for (const r of [0.33, 0.66, 1]) {
    radarCtx.beginPath(); radarCtx.arc(RR, RR, RR * r, 0, 7); radarCtx.stroke();
  }
  radarCtx.beginPath(); radarCtx.moveTo(RR, 0); radarCtx.lineTo(RR, RR * 2); radarCtx.stroke();
  radarCtx.beginPath(); radarCtx.moveTo(0, RR); radarCtx.lineTo(RR * 2, RR); radarCtx.stroke();

  const range = 55;
  const blip = (pos, color, r) => {
    const dx = pos.x - p.pos.x, dz = pos.z - p.pos.z;
    const d = Math.hypot(dx, dz);
    if (d > range) return;
    // rotate into radar frame (up on radar = camera forward)
    const c = Math.cos(S.yaw), s = Math.sin(S.yaw);
    const k = (RR - 6) / range;
    const rx = (dx * c - dz * s) * k;   // screen-right
    const ry = (dx * s + dz * c) * k;   // screen-forward
    radarCtx.fillStyle = color;
    radarCtx.beginPath(); radarCtx.arc(RR + rx, RR + ry, r, 0, 7); radarCtx.fill();
  };
  for (const e of S.enemies) blip(e.pos, ['squid','megalodon','greatwhite','lavamega'].includes(e.type) ? '#ff2a1a' : '#ff6a5a', ['squid','megalodon','greatwhite','lavamega'].includes(e.type) ? 4 : 2.5);
  for (const t of S.turtles) blip(t.pos, '#5fd47a', 2.5);
  for (const pw of S.powerups) blip(pw.pos, '#ffe94d', 2);
  for (const tr of S.treasures) if (!tr.got) blip(tr.pos, '#fff6e0', 2);
  for (const f of S.friends) blip(f.pos, '#ffd23d', 2);
  if (world.house) blip(world.house.position, '#ffb02a', 4.5);
  // player
  radarCtx.fillStyle = '#8ff2c0';
  radarCtx.beginPath();
  radarCtx.moveTo(RR, RR - 5); radarCtx.lineTo(RR + 3.5, RR + 4); radarCtx.lineTo(RR - 3.5, RR + 4);
  radarCtx.closePath(); radarCtx.fill();
}
