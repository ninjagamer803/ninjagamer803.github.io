# 🥷 ninjagamer803.github.io — Free 3D Games

Free browser games by **ninjagamer803**. No downloads, no installs — click a card and play.

Live site: **https://ninjagamer803.github.io**

## Games

| Slug | What it is |
|---|---|
| `games/hamster-apocalypse/` | Hamster Apocalypse — first-person zombie shooter (Three.js) |
| `games/hamster-apocalypse-remix/` | Same game, second shelf slot (multi-game test / agent-install demo) |

## How it works

Static site, GitHub Pages, zero build step:

1. `index.html` → `assets/app.js` loads `games/index.json` (list of slugs)
2. For each slug, fetches `games/<slug>/game.json` → `title`, `author`, `description`, `screenshot.png`
3. Renders cards; clicking links to `games/<slug>/`

## Adding a game

Follow **[HOWTO-ADD-A-GAME.md](HOWTO-ADD-A-GAME.md)** — it's written for an AI agent with terminal access:

> Copy the build into `games/<slug>/`, add a `game.json` (title/author/description/screenshot), drop a real `screenshot.png`, add the slug to `games/index.json`, commit & push.

## Run locally

```bash
python3 -m http.server 8000
# http://127.0.0.1:8000/
```

## Cheat codes

- Konami Code `↑↑↓↓←→←→ B A` → +30 lives, hamster mode
- `M` → hamster mode toggle
