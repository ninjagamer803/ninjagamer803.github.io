// Shared mutable state + world constants
export const rand = (a, b) => a + Math.random() * (b - a);
export const randInt = (a, b) => Math.floor(rand(a, b + 1));
export const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const dist3 = (a, b) => a.distanceTo(b);

export const LEVEL_DEFS = [
  { name: 'Sunny Shallows',  sandY: -6,   fog: 0x2f8fb8, fogD: 0.0075, sand: 0xd9c27a, beach: true, kills: 4,  spawn: { jelly: 5, shark: 1 },      power: 6, kelp: 0,  coral: 30 },
  { name: 'Coral Gardens',   sandY: -30,  fog: 0x125f86, fogD: 0.011,  sand: 0xc9a95f, beach: false, kills: 6,  spawn: { jelly: 4, shark: 3, octo: 1 }, power: 6, kelp: 0,  coral: 70, reef: true },
  { name: 'Kelp Forest',     sandY: -55,  fog: 0x0c4a6e, fogD: 0.013,  sand: 0x9f8f55, beach: false, kills: 8,  spawn: { jelly: 3, shark: 3, octo: 3 }, power: 7, kelp: 80, coral: 40 },
  { name: 'The Dark Reef',   sandY: -80,  fog: 0x083350, fogD: 0.016,  sand: 0x6f6a48, beach: false, kills: 10, spawn: { jelly: 4, shark: 4, octo: 3 }, power: 7, kelp: 40, coral: 50 },
  { name: 'Abyss Trench',    sandY: -110, fog: 0x051e33, fogD: 0.0195, sand: 0x4c4a3a, beach: false, kills: 12, spawn: { jelly: 4, shark: 4, octo: 4 }, power: 8, kelp: 0,  coral: 30 },
  { name: 'Squid Throne',    sandY: -140, fog: 0x03101f, fogD: 0.021,  sand: 0x35322c, beach: false, kills: 1,  spawn: { megalodon: 1, octo: 2, goblin: 3 },  power: 8, kelp: 0,  coral: 20, boss: true },
  { name: 'The Midnight Lure', sandY: -170, fog: 0x062030, fogD: 0.014, sand: 0x2b3138, beach: false, kills: 6, spawn: { angler: 6 },                 power: 8, kelp: 0, coral: 0, bossGate: 'angler' },
  { name: 'Squid Maw',       sandY: -200, fog: 0x141031, fogD: 0.0135, sand: 0x241f30, beach: false, kills: 5,  spawn: { squid: 1, angler: 2, octo: 2 },    power: 8, kelp: 0, coral: 0, boss: true, bossGate: 'squid' },
  { name: 'White Shadows',   sandY: -230, fog: 0x0a2a38, fogD: 0.013,  sand: 0x2e3a40, beach: false, kills: 6,  spawn: { greatwhite: 2, angler: 2, goblin: 2 }, power: 8, kelp: 0, coral: 0, boss: true, bossGate: 'greatwhite' },
  { name: 'The Volcano',     sandY: -260, fog: 0x2e0a04, fogD: 0.0135, sand: 0x1e1210, beach: false, kills: 4,  spawn: { lavamega: 1, angler: 3 },          power: 10, kelp: 0, coral: 0, boss: true, bossGate: 'lavamega', volcano: true },
];

// world extents
export const W = { xMin: -200, xMax: 200, zMin: -400, zMax: 50, yTop: 1.5 };

export const S = {
  enemies: [], friends: [], powerups: [], turtles: [], treasures: [],
  swarms: [], lostCrabs: [],
  projectiles: [], particles: [], beams: [],
  score: 0, kills: 0,
  scale: 1,      // enemy hp/dmg scale
  scaleSpd: 1,   // enemy speed scale
  mech: false,   // Hermy's mech suit (unlocked at the final level)
  underwater: false,
  t: 0,
  player: null,
};

export const world = {
  level: 1,
  def: LEVEL_DEFS[0],
  cave: null,
  portal: null,
  house: null,
  portalActive: false,
};

// terrain height (shared by mesh builder + collision)
export function terrainH(x, z) {
  const d = world.def;
  let h = d.sandY
    + Math.sin(x * 0.021) * Math.cos(z * 0.017) * 5
    + Math.sin(x * 0.047 + 1.7) * Math.sin(z * 0.041 + 0.4) * 2.5
    + Math.sin((x + z) * 0.085) * 1.1;
  if (d.beach) {
    const dd = Math.hypot(x, z - 10);
    h += Math.max(0, 9 - dd * 0.30);
  }
  return h;
}

export function addScore(n) { S.score += n; }
