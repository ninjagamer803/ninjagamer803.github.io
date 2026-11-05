// Procedural sound effects (WebAudio)
import { rand } from './state.js';

export const Sfx = {
  ctx: null, master: null, ambientGain: null, noiseBuf: null,
  init() {
    if (this.ctx) return;
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.5;
    this.master.connect(this.ctx.destination);
    const len = Math.floor(this.ctx.sampleRate * 1.5);
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    this.noiseBuf = buf;
    // ambient water loop
    const src = this.ctx.createBufferSource();
    src.buffer = buf; src.loop = true;
    const f = this.ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 300;
    this.ambientGain = this.ctx.createGain();
    this.ambientGain.gain.value = 0.0;
    src.connect(f); f.connect(this.ambientGain); this.ambientGain.connect(this.master);
    src.start();
    // slow LFO on the filter for wave motion
    const lfo = this.ctx.createOscillator(); lfo.frequency.value = 0.13;
    const lfoG = this.ctx.createGain(); lfoG.gain.value = 120;
    lfo.connect(lfoG); lfoG.connect(f.frequency); lfo.start();
  },
  setAmbient(level) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.ambientGain.gain.cancelScheduledValues(t);
    this.ambientGain.gain.linearRampToValueAtTime(0.05 + level * 0.14, t + 1.2);
  },
  blip(f0, f1, dur, type = 'sine', vol = 0.3, when = 0) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime + when;
    const o = this.ctx.createOscillator(); o.type = type;
    o.frequency.setValueAtTime(Math.max(1, f0), t);
    o.frequency.exponentialRampToValueAtTime(Math.max(1, f1), t + dur);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g); g.connect(this.master);
    o.start(t); o.stop(t + dur + 0.03);
  },
  noise(dur, vol = 0.25, freq = 1200, when = 0) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime + when;
    const s = this.ctx.createBufferSource(); s.buffer = this.noiseBuf;
    const f = this.ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = freq;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    s.connect(f); f.connect(g); g.connect(this.master);
    s.start(t); s.stop(t + dur + 0.03);
  },
  laser() { this.blip(950, 180, 0.14, 'square', 0.15); this.noise(0.08, 0.07, 3000); },
  hit() { this.noise(0.12, 0.28, 900); this.blip(220, 80, 0.1, 'triangle', 0.22); },
  hurt() { this.blip(170, 55, 0.28, 'sawtooth', 0.32); this.noise(0.2, 0.2, 500); },
  bubble() { this.blip(rand(300, 500), rand(800, 1200), 0.12, 'sine', 0.1); },
  powerup() { this.blip(523, 523, 0.09, 'square', 0.18); this.blip(784, 784, 0.09, 'square', 0.18, 0.09); this.blip(1046, 1046, 0.2, 'square', 0.18, 0.18); },
  kill() { this.noise(0.25, 0.28, 400); this.blip(140, 40, 0.3, 'sawtooth', 0.22); },
  portal() { this.blip(180, 900, 0.7, 'sine', 0.3); this.blip(240, 1200, 0.7, 'sine', 0.18, 0.1); },
  summon() { this.blip(300, 90, 0.2, 'square', 0.22); this.blip(400, 120, 0.2, 'square', 0.18, 0.1); },
  treasure() { this.blip(880, 880, 0.1, 'sine', 0.22); this.blip(1175, 1175, 0.1, 'sine', 0.22, 0.08); this.blip(1568, 1568, 0.22, 'sine', 0.22, 0.16); },
  roar() { this.blip(60, 35, 1.1, 'sawtooth', 0.38); this.noise(0.9, 0.28, 250); },
  death() { this.blip(220, 40, 1.2, 'sawtooth', 0.32); this.noise(1.0, 0.28, 300); },
  bubbleBurst() { this.noise(0.3, 0.28, 2500); this.blip(500, 900, 0.25, 'sine', 0.18); },
  lava() { this.blip(160, 60, 0.25, 'sawtooth', 0.24); this.noise(0.2, 0.22, 700); },
  boom() { this.noise(0.45, 0.38, 600); this.blip(110, 28, 0.5, 'sine', 0.3); },
  laserGun() { this.blip(1500, 220, 0.16, 'sawtooth', 0.2); this.noise(0.08, 0.08, 4000); },
  flame() { this.noise(0.12, 0.1, 500); this.blip(90, 45, 0.12, 'sawtooth', 0.07); },
  mech() {
    this.blip(220, 880, 0.3, 'square', 0.26);
    this.blip(330, 1320, 0.3, 'square', 0.2, 0.15);
    this.blip(440, 1760, 0.45, 'square', 0.2, 0.3);
    this.noise(0.5, 0.18, 1500, 0.3);
  },
};
