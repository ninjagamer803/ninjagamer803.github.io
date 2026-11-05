// Tiny WebAudio synth so we don't need sound assets.
let actx = null;

const PRESETS = {
  melee:        ['square', 200, 90, 0.12, 0.25],
  spit:         ['triangle', 500, 180, 0.15, 0.18],
  blast:        ['sawtooth', 160, 60, 0.08, 0.22],
  wheel:        ['sawtooth', 300, 40, 0.4, 0.25],
  reload:       ['square', 700, 700, 0.1, 0.1],
  alert:        ['square', 340, 520, 0.25, 0.16],
  hurt:         ['sawtooth', 120, 60, 0.15, 0.3],
  playerhurt:   ['sawtooth', 200, 50, 0.3, 0.35],
  kill:         ['triangle', 600, 120, 0.3, 0.3],
  pickup:       ['sine', 500, 900, 0.2, 0.2],
  door:         ['sine', 150, 300, 0.35, 0.25],
  boom:         ['sawtooth', 80, 25, 0.5, 0.5],
  win:          ['sine', 400, 800, 0.8, 0.3],
};

export function sfx(kind) {
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    if (actx.state === 'suspended') actx.resume();
    const t = actx.currentTime;
    const [type, f0, f1, dur, vol] = PRESETS[kind] || ['sine', 440, 440, 0.1, 0.1];
    const o = actx.createOscillator();
    const g = actx.createGain();
    o.connect(g); g.connect(actx.destination);
    o.type = type;
    o.frequency.setValueAtTime(f0, t);
    o.frequency.exponentialRampToValueAtTime(Math.max(1, f1), t + dur);
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur + 0.05);
    o.start(t); o.stop(t + dur + 0.1);
  } catch (e) { /* audio not available */ }
}
