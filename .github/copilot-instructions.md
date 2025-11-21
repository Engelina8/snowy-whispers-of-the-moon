## Quick orientation

This is a small static site (HTML/CSS/JS + markdown content) that implements a 31-day "advent"-style interactive experience. There is no build step — pages are plain static files. Key runtime pages are:

- `index.html` — password gate (SHA-256 hex) that redirects to `calendar.html` on success.
- `calendar.html` — creates 31 links that point to `day.html?day=N`.
- `day.html` — reads `days.js` for metadata, shows the riddle, lazily fetches `stories/*.md` and renders with `marked` + `DOMPurify`.

Assets and logic live mostly at the repo root: `days.js`, `background.js`, `moon.js`, `style.css`, and the `stories/` folder (markdown files `01.md` → `31.md`). There's an `archive/main.js` containing old/alternate code.

## What an AI coder should know (concrete patterns)

- Central data model: `days.js` exports a single global `days` array. Each element is an object with keys used by `day.html`:
  - `title`, `riddle`, `answer` (string, compared lowercased), and either `story` (inline legacy text) or `storyFile` (relative path, e.g. `stories/05.md`).
  - Changing day content is done by editing `days.js` and/or the files under `stories/`.

- Reveal flow: `day.html` loads `days.js` first, then compares user input (lowercased) with `dayData.answer`. If correct, it either parses `dayData.story` or fetches `dayData.storyFile` and runs it through `marked` and `DOMPurify` before inserting into the DOM. Keep script order intact: `days.js` must be loaded before the reveal logic.

- Visuals and phases: `background.js` centralizes snowflake creation and per-phase visual effects; `moon.js` computes a phase display from the `?day=` query param. Visual flags and symbols (e.g., `phase.symbol`) are used by both `day.html` and `calendar.html` for styling and small UI elements.

- External libs: `day.html` pulls `marked` and `DOMPurify` from CDNs. These are required at runtime for markdown rendering and sanitization.

## Local dev / run notes (must-read)

- Do NOT open `file://` copies in the browser — `fetch()` won't load the `stories/*.md` files from the filesystem. Serve the folder over HTTP. Minimal options (PowerShell):

```pwsh
# from the repo root
python -m http.server 8000
# then open http://localhost:8000/index.html
```

- To update the unlock password in `index.html` replace the `correctHash` hex string with the SHA-256 (hex) of your chosen password. To compute SHA-256 for a string in PowerShell:

```pwsh
[System.BitConverter]::ToString([System.Security.Cryptography.SHA256]::Create().ComputeHash([System.Text.Encoding]::UTF8.GetBytes('your-password'))).Replace('-','').ToLower()
```

## Editing conventions & gotchas (from the codebase)

- Filenames and relative paths matter: `days.js` stores `storyFile` as a relative path used directly in `fetch()`. Don't rename story files without updating `days.js`.

- Answers are case-insensitive: `day.html` lowercases both the typed answer and the stored `answer` before comparing. Keep answers as plain single words/phrases (no punctuation) to avoid mismatch surprises.

- Two content modes: some `days` entries may include `story` inline (legacy) while others point to `storyFile`. Prefer `storyFile` for larger content and consistency.

- Visual and DOM side-effects: `background.js` and `moon.js` append DOM nodes (snow, stars, hearts, phase badges). If you change these scripts, test pages both with and without the `?day=` query param (calendar vs day pages) because some code paths only run in day pages.

- CDN dependencies: offline or CI runs may fail if `marked`/`DOMPurify` CDN is unreachable. Consider vendoring or adding a local fallback if you automate tests.

## Debugging tips (fast checks)

- Open the browser console — `day.html` has `console.log` lines that show `days` length and current `day` parsing.
- Inspect Network tab for the `fetch()` of `stories/XX.md` when unlocking; a 404 → check `storyFile` path in `days.js`.
- If story HTML does not render, confirm `marked` and `DOMPurify` scripts loaded (Network / Console errors).

## Small maintenance notes

- There's no test harness or bundler; keep changes small and verify in a browser. A quick smoke test for each change: run the HTTP server, open `day.html?day=N`, type the answer from `days.js`, and confirm the story appears.

- Archive: `archive/main.js` appears to contain alternate/older logic — use cautiously and keep `days.js` as the canonical source of truth.

## When in doubt: minimal checklist for a change

1. Update `days.js` (or `stories/NN.md`) — keep `storyFile` path accurate.
2. Serve locally via HTTP (see above). Open `day.html?day=N` and test the reveal flow.
3. Check Console + Network for missing assets or runtime exceptions.

If you'd like, I can (a) add a tiny test script that programmatically fetches each `storyFile` to validate all paths, or (b) vendor `marked` + `DOMPurify` into `vendor/` and update `day.html` to use the local copies. Which would you prefer?
