# HOWTO: Add a new game to ninjagamer803.github.io

*For an AI agent (or a human) with terminal access. Follow these steps top to bottom — no guessing, no registry to edit.*

## 0. Mental model (30 seconds)

- This is a **static site** on GitHub Pages. No build step, no bundler, no backend.
- The landing page (`index.html` → `assets/app.js`) loads `games/index.json` — a JSON list of game slugs.
- For each slug it fetches `games/<slug>/game.json` and renders a card. Clicking a card links to `games/<slug>/`.
- **To publish a game you only need:** a folder under `games/<slug>/` with a working `index.html`, a `game.json` metadata file, and a `screenshot.png`.
- Everything else (search, sort, featured, categories, Konami code) is already built.

## 1. Pick a slug

- Lowercase, kebab-case, no spaces: `my-cool-game`
- Slug = folder name = the entry you add to `games/index.json`
- Check it doesn't already exist: `ls games/`

## 2. Copy the game build into `games/<slug>/`

GitHub Pages serves **only static files**. If your game is a Vite/CRA project, you must build it first and copy the output.

### If there's a `dist/` folder (Vite project — the common case)

```bash
# 1. build locally in the source project
cd ~/games/my-game && npm install && npm run build

# 2. copy the built files (NOT the source, NOT node_modules, NOT src/)
cd /path/to/ninjagamer803.github.io
mkdir -p games/my-game
cp -r ~/games/my-game/dist/* games/my-game/
ls games/my-game/
# expected: index.html + assets/ (+ your other built files)
```

### If it's a plain static project (no build step)

```bash
mkdir -p games/my-game
cp -r /path/to/game/* games/my-game/
# make sure there is an index.html at the top of games/my-game/
```

### Rules for the copied game

- `index.html` must live at `games/<slug>/index.html`
- Assets must use **relative** paths (`./assets/...`, not `/assets/...`). Vite projects: use `base: './'` in `vite.config.js` before building, or assets will 404 on Pages.
- Never commit `node_modules/`. Add it to `.gitignore` if it isn't there.

## 3. Create `games/<slug>/game.json`

```json
{
  "title": "My Cool Game",
  "author": "ninjagamer803",
  "description": "1–2 sentences. What you do, what makes it cool. Shows on the card.",
  "tagline": "Short punchy hook. Shows big on hover.",
  "emoji": "🎮",
  "category": "Shooter",
  "tags": ["three.js", "fps", "zombies"],
  "thumbnail": "screenshot.png",
  "screenshot": "screenshot.png",
  "featured": false,
  "version": "1.0.0"
}
```

| Field | Required | Notes |
|---|---|---|
| `title` | ✅ | Shown on the card |
| `author` | ✅ | Shown under the title |
| `description` | ✅ | 1–2 sentences, plain text |
| `thumbnail` | ✅ | Filename relative to the folder, e.g. `screenshot.png` → `games/<slug>/screenshot.png` |
| `screenshot` | ✅ | Same image; the "screenshot of the game" |
| `tagline` | Optional | Short hook, used on hover |
| `emoji` | Optional | Fallback icon if the image is missing |
| `category` | Optional | Free text (`Shooter`, `Puzzle`, …) — card badge |
| `tags` | Optional | Array of strings — searchable |
| `featured` | Optional | `true` = "FEATURED" badge + sorts first |
| `version` | Optional | Display only (`v1.0.0`) |

## 4. Add a real screenshot — `screenshot.png`

**The card shows this image. Per spec it must be a screenshot of the actual game, not a placeholder or emoji banner.**

- Size: **1280×720** (16:9). PNG, ideally under ~500 KB.
- It should show the game running (HUD, world, action) — see `games/hamster-apocalypse/screenshot.png` for the reference look.

### Option A (recommended): reuse the bundled capture script

```bash
# from anywhere — it serves the game + captures it headless
node tools/capture-screenshot.mjs --game games/my-game --out games/my-game/screenshot.png
```

That script (`tools/capture-screenshot.mjs`) is the exact script used to capture Hamster Apocalypse for this site. It:
1. Serves `games/my-game/` locally,
2. Opens it in headless Chrome,
3. Waits for the 3D scene to render,
4. Saves a 1280×720 PNG.

If the game has a title/menu overlay, look at the script's `--wait` / start-handling options and adjust the start sequence for your game (press Space, click, etc.), then run it again.

### Option B: manual / alternative capture

- Run `npx vite preview` (or `python3 -m http.server` in the game folder) and play for 5 seconds
- Take a window screenshot (1280×720) of the running game
- Save it as `games/my-game/screenshot.png`
- **Delete** any `-menu.png`, `-capture.png`, or temp shots — only `screenshot.png` is referenced

Verify the file exists and is a real PNG:

```bash
ls -lh games/my-game/screenshot.png
file games/my-game/screenshot.png
```

## 5. Register the game in `games/index.json`

Edit `games/index.json` — add your slug to the array:

```json
["hamster-apocalypse", "hamster-apocalypse-remix", "my-cool-game"]
```

**Do not** remove existing entries. If the file is missing entries, a game won't appear on the landing page even if its folder exists.

## 6. Verify locally

```bash
cd /path/to/ninjagamer803.github.io
python3 -m http.server 8000
# open http://127.0.0.1:8000/ — your card should be in the grid
# click it → http://127.0.0.1:8000/games/my-game/ should run the game
```

Check:
- [ ] Landing page loads and shows your card with **title, author, description, screenshot**
- [ ] Search box finds it by title/tag
- [ ] Clicking the card opens the game and the game runs (no 404 assets)

## 7. Commit & push (GitHub Pages auto-deploys)

```bash
git add games/my-game games/index.json
git status --short   # sanity check — no node_modules, no stray files
git commit -m "Add my-cool-game"
git push
```

GitHub Pages publishes from the `main` branch. Live in ~1 minute at `https://ninjagamer803.github.io/games/my-game/`.

## 8. Gotchas

- **404s on assets after deploy** → build was not done with `base: './'`. Rebuild and re-copy.
- **Card missing** → `games/index.json` doesn't list the slug, or `game.json` failed to parse (check JSON syntax with `python3 -m json.tool games/<slug>/game.json`).
- **Broken image** → `thumbnail`/`screenshot` filename doesn't match the file on disk, or the path has a typo.
- **Huge repo** → you copied `node_modules/` or `src/`. Copy only the build output (`dist/*`).
- **Legal/licensing** — check the game's license before republishing third-party games.

---

## Worked example (this repo)

Second game on this site was installed by copying the first game as a test:

```bash
cp -r games/hamster-apocalypse games/hamster-apocalypse-remix
# edit games/hamster-apocalypse-remix/game.json (change title/description)
# {"slug": "hamster-apocalypse-remix"} added to games/index.json
```

Result: two cards, both playable, both with real screenshots. That's the whole pattern.
