// Procedural music engine (WebAudio, no files) — tracks + stings for Hermy's adventure
const SEMI = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
function midiOf(n) {
  let name = n, oct = 0, sharp = false;
  if (name.endsWith('b')) { sharp = false; name = name.slice(0, -1); }
  if (name.endsWith('#')) { name = name.slice(0, -1); oct = 0; } // handled below
  const m = n.match(/^([A-G])(#?)([0-8])$/);
  if (!m) return -1;
  const base = 12 * (parseInt(m[3]) + 1) + SEMI[m[1]];
  return base + (m[2] ? 1 : 0);
}
const freqOf = (n) => 440 * Math.pow(2, (midiOf(n) - 69) / 12);

// ---- song data (ROCK) ----
// Power-chord rock: Em - C - G - D (the great I-VI-III-IV punk loop), one bar = 16 steps (16ths)
const CHORDS = [
  { root: 'E2', fifth: 'B2', tones: ['E3', 'G3', 'B3', 'E4'] },
  { root: 'C2', fifth: 'G2', tones: ['C3', 'E3', 'G3', 'C4'] },
  { root: 'G2', fifth: 'D2', tones: ['G3', 'B3', 'D4', 'G4'] },
  { root: 'D2', fifth: 'A2', tones: ['D3', 'F#3', 'A3', 'D4'] },
];
// rock riff: Em pentatonic, punchy 8ths with a bend on the top of bar 2
const LEAD = [
  ['E5', 0, 2], ['E5', 2, 1], ['G5', 3, 1], ['A5', 4, 2], ['B5', 6, 2], ['A5', 8, 2], ['G5', 10, 2], ['E5', 12, 4],
  ['G5', 16, 2], ['A5', 18, 2], ['B5', 20, 1], ['D6', 21, 2, 'E6'], ['B5', 24, 2], ['A5', 26, 2], ['G5', 28, 2], ['E5', 30, 2],
  ['E5', 32, 2], ['G5', 34, 2], ['A5', 36, 2], ['B5', 38, 1], ['D6', 39, 1], ['E6', 40, 3], ['B5', 44, 2], ['G5', 46, 2],
  ['A5', 48, 2], ['G5', 50, 1], ['E5', 51, 1], ['D5', 52, 2], ['E5', 54, 2], ['G5', 56, 2], ['B5', 58, 2, 'D6'],
];
const KICKS = [0, 8, 11], SNARES = [4, 12], OPEN_HAT = [7, 15];

const TRACKS = {
  menu: {   // mellow clean-guitar campfire version
    tempo: 70,
    lead: [ ['E4', 0, 6], ['G4', 8, 4], ['B4', 12, 2], ['E4', 16, 8], ['D4', 24, 4] ],
    power: false, drive: false, drums: false, clean: true,
  },
  game: { tempo: 126, lead: LEAD, power: true, drive: true, drums: true },
  boss: { tempo: 150, lead: LEAD, power: true, drive: true, drums: true, saw: true, double: true },
};

export const Music = {
  ctx: null, gain: null, noiseBuf: null,
  track: null, step: 0, nextTime: 0, timer: null, muted: false,

  init() {
    // never run the scheduler under Node (smoke test / tooling)
    const isNode = typeof process !== 'undefined' && process.versions && process.versions.node;
    if (this.ctx || isNode || typeof window === 'undefined' || !window.AudioContext) return;
    this.ctx = new window.AudioContext();
    this.gain = this.ctx.createGain();
    this.gain.gain.value = this.muted ? 0 : 0.16;
    const lp = this.ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 5200;
    this.gain.connect(lp); lp.connect(this.ctx.destination);
    const len = Math.floor(this.ctx.sampleRate * 0.3);
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    this.noiseBuf = buf;
  },

  play(name) {
    if (!this.ctx) return;
    this.stop();
    this.track = TRACKS[name] ? name : null;
    if (!this.track) return;
    this.step = 0;
    this.nextTime = this.ctx.currentTime + 0.06;
    this.timer = setInterval(() => this.schedule(), 25);
  },
  stop() {
    if (this.timer) { clearInterval(this.timer); this.timer = null; }
    this.track = null;
  },
  toggle() {
    this.muted = !this.muted;
    if (this.gain) this.gain.gain.value = this.muted ? 0 : 0.16;
    return !this.muted;
  },

  schedule() {
    if (!this.ctx || !this.track) return;
    const T = TRACKS[this.track];
    const stepDur = 60 / T.tempo / 4;
    while (this.nextTime < this.ctx.currentTime + 0.12) {
      this.playStep(this.step, this.nextTime, stepDur, T);
      this.step++;
      this.nextTime += stepDur;
    }
  },

  playStep(step, t, stepDur, T) {
    const s = step % 64;
    const bar = (s / 16) | 0;
    const chord = CHORDS[bar];
    if (this.track === 'menu' && s % 16 === 0) {
      // clean campfire chords
      for (const n of chord.tones) this.note(freqOf(n), t, (60 / T.tempo) * 4 * 0.95, 'sine', 0.4, 0.25);
      this.note(freqOf(chord.root), t, (60 / T.tempo) * 4 * 0.95, 'triangle', 0.5, 0.3);
    }
    // POWER CHORDS on the 8ths — the heart of the rock version
    if (T.power && s % 2 === 0) {
      this.note(freqOf(chord.root), t, stepDur * 1.9, 'sawtooth', 0.24, 0.003, 0, 2600);
      this.note(freqOf(chord.fifth), t, stepDur * 1.9, 'sawtooth', 0.2, 0.003, 0, 2600);
      if (s % 16 !== 14) this.note(freqOf(chord.root) * 2, t, stepDur * 1.9, 'sawtooth', 0.14, 0.003, 0, 3200);
    }
    // DRIVING 8th-note bass
    if (T.drive && s % 2 === 0) {
      const n = (s % 16 === 14) ? chord.fifth : chord.root;
      this.note(freqOf(n) * 2, t, stepDur * 1.7, T.saw ? 'sawtooth' : 'square', 0.4, 0.003, 0, 1800);
    }
    if (T.lead) {
      for (const [n, st, len, bend] of T.lead) {
        if (st <= s && s < st + len) {
          const lt = T.clean ? 'triangle' : 'sawtooth';
          this.note(freqOf(n), t, stepDur * len * 0.95, lt, T.clean ? 0.3 : 0.36, 0.004, bend ? freqOf(bend) : 0, 3800);
          if (T.double) this.note(freqOf(n) * 2, t, stepDur * len * 0.95, 'sawtooth', 0.13, 0.004, bend ? freqOf(bend) * 2 : 0, 4500);
        }
      }
    }
    if (T.drums) {
      const b = s % 16;
      if (KICKS.includes(b)) this.kick(t);
      if (SNARES.includes(b)) this.noise(t, 0.1, 0.5, 1500);
      if (b % 2 === 0) this.noise(t, 0.03, OPEN_HAT.includes(b) ? 0.3 : 0.16, 6500);
    }
  },

  note(f, t, dur, type = 'sine', vol = 0.4, attack = 0.004, f1 = 0, lp = 0) {
    if (!this.ctx || f <= 0) return;
    const o = this.ctx.createOscillator();
    o.type = type; o.frequency.setValueAtTime(f, t);
    if (f1 > 0) o.frequency.exponentialRampToValueAtTime(f1, t + dur * 0.85);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vol, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + Math.max(attack + 0.02, dur));
    let node = o;
    if (lp > 0) { const fl = this.ctx.createBiquadFilter(); fl.type = 'lowpass'; fl.frequency.value = lp; fl.Q.value = 1; o.connect(fl); node = fl; }
    node.connect(g); g.connect(this.gain);
    o.start(t); o.stop(t + dur + 0.05);
  },
  kick(t) {
    if (!this.ctx) return;
    const o = this.ctx.createOscillator();
    o.frequency.setValueAtTime(130, t);
    o.frequency.exponentialRampToValueAtTime(38, t + 0.11);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.9, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.13);
    o.connect(g); g.connect(this.gain);
    o.start(t); o.stop(t + 0.15);
  },
  noise(t, dur, vol, hp) {
    if (!this.ctx || !this.noiseBuf) return;
    const src = this.ctx.createBufferSource(); src.buffer = this.noiseBuf; src.loop = true;
    const f = this.ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = hp;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    src.connect(f); f.connect(g); g.connect(this.gain);
    src.start(t); src.stop(t + dur + 0.02);
  },

  // one-shot stings (no loop)
  sting(name) {
    if (!this.ctx) return;
    const t0 = this.ctx.currentTime + 0.03;
    const seq = name === 'fanfare'
      ? [['E5', 0], ['G5', 0.14], ['B5', 0.28], ['E6', 0.46]]
      : name === 'sad'
        ? [['E4', 0], ['C4', 0.3], ['A3', 0.6], ['G3', 1.0]]
        : [];
    for (const [n, dt] of seq) {
      this.note(freqOf(n), t0 + dt, 0.5, name === 'sad' ? 'sine' : 'square', name === 'sad' ? 0.4 : 0.35, 0.01);
      if (name === 'fanfare') this.note(freqOf(n) / 2, t0 + dt, 0.5, 'triangle', 0.3, 0.01);
    }
  },
};
