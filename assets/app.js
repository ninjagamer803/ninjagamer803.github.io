/* ninjagamer803.github.io — landing page logic.
   Loads games/index.json → games/<slug>/game.json and renders the shelf.
   No build step. See HOWTO-ADD-A-GAME.md. */

'use strict';

const GRID = document.getElementById('grid');
const EMPTY = document.getElementById('empty');
const STATUS = document.getElementById('status');
const SEARCH = document.getElementById('search');
const SORT = document.getElementById('sort');
const COUNT = document.getElementById('game-count');
const STAT = document.getElementById('stat-line');
const GENRE_ROW = document.getElementById('genre-row');

let games = [];
let view = 'grid';
let genre = 'All';
let BASE = '';

function base() { return BASE; }

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

async function loadGames() {
  // Resolve relative to THIS script (assets/app.js → site root) so it works
  // from http://..., https://... and fails with a useful hint on file://
  const BASE = location.protocol === 'file:'
    ? ''
    : new URL('../', document.currentScript?.src || location.href).toString();
  window.__BASE__ = BASE;
  const url = (p) => BASE + p;
  let slugs;
  try {
    const r = await fetch(url('games/index.json'), { cache: 'no-cache' });
    if (!r.ok) throw new Error(`games/index.json ${r.status}`);
    slugs = await r.json();
  } catch (e) {
    const hint = location.protocol === 'file:'
      ? 'You opened index.html as a local file. Browsers block fetch() on file://. Serve it instead: cd ninjagamer803.github.io && python3 -m http.server 8000 → open http://127.0.0.1:8000/'
      : `Failed to fetch — ${e.message}. Is the server running?`;
    return fail(`Couldn't load games/index.json. ${hint}`);
  }
  if (!Array.isArray(slugs) || !slugs.length) return fail('No games listed in games/index.json. Add a slug: see HOWTO-ADD-A-GAME.md');

  games = await Promise.all(slugs.map(async (slug) => {
    try {
      const r = await fetch(url(`games/${slug}/game.json`), { cache: 'no-cache' });
      if (!r.ok) throw new Error(`${r.status}`);
      const meta = await r.json();
      return { slug, ...meta };
    } catch (e) {
      return { slug, title: slug, author: 'unknown', description: `Missing game.json (${e.message})`, error: true };
    }
  }));
  render();
}

function fail(msg) {
  STATUS.textContent = '⚠️ ' + msg;
  EMPTY.hidden = false;
  EMPTY.textContent = msg;
  COUNT.textContent = '0';
  STAT.textContent = 'the dojo is quiet… check the console';
  console.error(msg);
}

function searchTerms(g) {
  return [g.title, g.author, g.description, g.tagline, g.category, ...(g.tags || []), g.slug]
    .join(' ').toLowerCase();
}

function filtered() {
  const q = SEARCH.value.trim().toLowerCase();
  let list = games.filter((g) => {
    const inGenre = genre === 'All' || (g.category || 'Other') === genre;
    return inGenre && (!q || searchTerms(g).includes(q));
  });
  const mode = SORT.value;
  list = [...list].sort((a, b) => {
    if (mode === 'title') return (a.title || '').localeCompare(b.title || '');
    if (mode === 'newest') return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    // featured first, then A–Z
    if ((b.featured ? 1 : 0) !== (a.featured ? 1 : 0)) return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    return (a.title || '').localeCompare(b.title || '');
  });
  return list;
}

function renderGenres() {
  const cats = [...new Set(games.map((g) => g.category || 'Other'))].sort();
  const all = ['All', ...cats];
  if (!all.includes(genre)) genre = 'All';
  GENRE_ROW.replaceChildren(...all.map((c) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'chip' + (c === genre ? ' active' : '');
    b.textContent = c === 'All' ? '✨ All genres' : c;
    b.addEventListener('click', () => { genre = c; render(); blip(c === 'All' ? 523 : 659, 0.08, 0.05); });
    return b;
  }));
}

function card(g) {
  const a = document.createElement('a');
  a.className = 'game';
  a.href = `games/${g.slug}/`;
  a.dataset.slug = g.slug;
  const thumb = g.thumbnail || g.screenshot || 'screenshot.png';
  const tags = [...new Set((g.tags || []).slice(0, 6))];

  a.innerHTML = `
    <div class="shot">
      <img src="${base()}games/${esc(g.slug)}/${esc(thumb)}" alt="Screenshot of ${esc(g.title)}" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'emoji-fallback',textContent:'${esc(g.emoji || '🎮')}'}))" />
      <div class="badge-row">
        ${g.featured ? '<span class="badge badge-featured">★ Featured</span>' : ''}
        ${g.category ? `<span class="badge badge-cat">${esc(g.category)}</span>` : ''}
      </div>
      <div class="play" aria-hidden="true">▶ Play</div>
    </div>
    <div class="game-body">
      <h3 class="game-title">${esc(g.title)}</h3>
      <p class="game-author">by <b>${esc(g.author)}</b>${g.emoji ? ` · ${esc(g.emoji)}` : ''}</p>
      ${g.tagline ? `<p class="game-tagline">“${esc(g.tagline)}”</p>` : ''}
      <p class="game-desc">${esc(g.description)}</p>
      ${tags.length ? `<div class="tag-row">${tags.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>` : ''}
      <span class="play-btn">Play</span>
      <div class="game-foot"><span class="slug">ninjagamer803.github.io/games/${esc(g.slug)}/</span>${g.version ? `<span>v${esc(g.version)}</span>` : ''}</div>
    </div>`;

  a.addEventListener('click', () => squeak());
  return a;
}

function render() {
  renderGenres();
  const list = filtered();
  const children = [...list.map(card)];
  children.push(comingSoon());
  GRID.replaceChildren(...children);
  GRID.classList.toggle('list', view === 'list');
  EMPTY.hidden = list.length > 0;
  COUNT.textContent = String(games.length);
  const shown = list.length;
  const genreNote = genre === 'All' ? '' : ` — ${genre}`;
  STATUS.textContent = shown === games.length && genre === 'All'
    ? `// armed and ready — ${games.length} game(s) loaded. pick a game, ninja.`
    : `// ${shown} game(s)${genreNote} found — fast, sneaky, free.`;
  const cats = [...new Set(games.map((g) => g.category).filter(Boolean))];
  STAT.textContent = `${games.length} free game(s)${cats.length ? ' · ' + cats.join(' / ') : ''} · no downloads · no installs · new games marching in`;
  syncViewButtons();
}

function comingSoon() {
  const d = document.createElement('div');
  d.className = 'coming-soon';
  d.setAttribute('aria-label', 'More games soon');
  d.innerHTML = `<p class="plus">+</p><h3>More games soon</h3><p>Next up: your next idea.</p>`;
  d.addEventListener('click', () => squeak(523));
  return d;
}

function syncViewButtons() {
  document.getElementById('view-grid').classList.toggle('active', view === 'grid');
  document.getElementById('view-list').classList.toggle('active', view === 'list');
}

SEARCH.addEventListener('input', render);
SORT.addEventListener('change', render);
document.getElementById('view-grid').addEventListener('click', () => { view = 'grid'; render(); squeak(420); });
document.getElementById('view-list').addEventListener('click', () => { view = 'list'; render(); squeak(420); });

/* ————— synth bleeps (Web Audio, no assets) ————— */
/* eslint-disable-next-line no-undef */
let actx = null;
let soundOn = true;
const soundBtn = document.getElementById('sound-toggle');

function ensureAudio() {
  if (!actx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    actx = new AC();
  }
  if (actx.state === 'suspended') actx.resume();
  return actx;
}

function blip(freq, dur, gain = 0.06, type = 'square', when = 0) {
  if (!soundOn) return;
  const ac = ensureAudio();
  if (!ac) return;
  const t = ac.currentTime + when;
  const o = ac.createOscillator();
  const g = ac.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  g.gain.setValueAtTime(gain, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g).connect(ac.destination);
  o.start(t);
  o.stop(t + dur + 0.02);
}

function squeak(high = 660) {
  blip(high, 0.09, 0.05, 'square', 0);
  blip(high * 1.5, 0.12, 0.04, 'square', 0.07);
}

soundBtn.addEventListener('click', () => {
  soundOn = !soundOn;
  soundBtn.setAttribute('aria-pressed', String(!soundOn));
  soundBtn.textContent = soundOn ? '🔊 SOUND' : '🔇 MUTED';
  if (soundOn) squeak();
});

/* ————— Konami + hamster mode (M) ————— */

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let ki = 0;
let hamsterMode = false;
const konamiEl = document.getElementById('konami');

function showKonami() {
  konamiEl.hidden = false;
  blip(523, 0.1, 0.07, 'square', 0);
  blip(659, 0.1, 0.07, 'square', 0.08);
  blip(784, 0.14, 0.07, 'square', 0.16);
  setTimeout(() => { konamiEl.hidden = true; }, 4500);
}

document.addEventListener('keydown', (e) => {
  const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
  ki = key === KONAMI[ki] ? ki + 1 : (key === KONAMI[0] ? 1 : 0);
  if (ki === KONAMI.length) {
    ki = 0;
    toggleHamster();
    showKonami();
  }
  if (key === 'm' && !e.metaKey && !e.ctrlKey && !/INPUT|SELECT|TEXTAREA/.test(document.activeElement?.tagName || '')) {
    toggleHamster();
  }
});

function toggleHamster() {
  hamsterMode = !hamsterMode;
  document.querySelectorAll('.game').forEach((el) => {
    el.classList.remove('shake');
    void el.offsetWidth;
    if (hamsterMode) el.classList.add('shake');
  });
  squeak(hamsterMode ? 880 : 440);
  if (hamsterMode) setTimeout(() => document.querySelectorAll('.game').forEach((el) => el.classList.remove('shake')), 400);
}

/* ————— Three.js hero background (decorative floating 3D shapes) ————— */

(function bg3d() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function init(THREE) {
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.z = 9;

    const geos = [
      new THREE.TorusGeometry(1.4, 0.4, 12, 40),
      new THREE.BoxGeometry(1.6, 1.6, 1.6),
      new THREE.IcosahedronGeometry(1.3, 0),
      new THREE.OctahedronGeometry(1.2, 0),
      new THREE.TorusKnotGeometry(1.0, 0.3, 80, 12),
    ];
    const mats = [
      new THREE.MeshNormalMaterial({ wireframe: true, transparent: true, opacity: 0.5 }),
      new THREE.MeshStandardMaterial({ color: 0xc8ff4d, wireframe: true, transparent: true, opacity: 0.35 }),
      new THREE.MeshStandardMaterial({ color: 0xff6b5b, wireframe: true, transparent: true, opacity: 0.35 }),
      new THREE.MeshStandardMaterial({ color: 0x5cc8ff, wireframe: true, transparent: true, opacity: 0.35 }),
      new THREE.MeshNormalMaterial({ wireframe: true, transparent: true, opacity: 0.4 }),
    ];
    const shapes = geos.map((g, i) => {
      const m = new THREE.Mesh(g, mats[i]);
      m.position.set((Math.random() - 0.5) * 14, (Math.random() - 0.5) * 7, -Math.random() * 4 - 1);
      scene.add(m);
      return { mesh: m, rx: (Math.random() - 0.5) * 0.012, ry: (Math.random() - 0.5) * 0.012, bob: Math.random() * Math.PI * 2 };
    });

    scene.add(new THREE.AmbientLight(0xffffff, 2));
    const key = new THREE.DirectionalLight(0xffffff, 2);
    key.position.set(5, 8, 6);
    scene.add(key);

    function resize() {
      const w = canvas.clientWidth || innerWidth;
      const h = canvas.clientHeight || innerHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    addEventListener('resize', resize);
    resize();

    if (reduced) { renderer.render(scene, camera); return; }

    (function loop(t) {
      requestAnimationFrame(loop);
      const time = t * 0.001;
      for (const s of shapes) {
        s.mesh.rotation.x += s.rx;
        s.mesh.rotation.y += s.ry;
        s.mesh.position.y += Math.sin(time + s.bob) * 0.0015;
        s.mesh.position.x += Math.cos(time * 0.7 + s.bob) * 0.001;
      }
      camera.position.x = Math.sin(time * 0.12) * 1.2;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    })(0);
  }

  if (window.THREE) init(window.THREE);
  else addEventListener('three-ready', () => init(window.THREE), { once: true });
})();

loadGames();
