# AGENTS.md

Personal portfolio (anjasfedo.github.io). TanStack Start + React 19, Vite 8, Nitro v3 (`github-pages` preset), Tailwind v4, Biome. Single package — `pnpm-workspace.yaml` only sets `allowBuilds`, it is not a monorepo. No tests. `CLAUDE.md` mirrors this guidance for Claude Code; keep the two in sync.

## Commands (pnpm only — `pnpm-lock.yaml`, `packageManager: pnpm@12.3.4`)

- `pnpm dev` — Vite on `:3000`; falls back to `:3001` when busy, so read the server output before opening a browser.
- `pnpm build` — **static** build into `.output/public` (prerenders `/` and `/404.html`). No server bundle exists; README's `dist/` path and `node .output/server/index.mjs` are both stale.
- `pnpm preview` — serves the built output.
- `pnpm check` (`biome check`) — run before finishing; `pnpm lint` / `pnpm format` for the parts.
- No test or typecheck script. Use `pnpm exec tsc --noEmit` for types (currently clean); don't add a script for it.
- `pnpm generate-routes` — regenerate `src/routeTree.gen.ts` (dev/build also regenerate it). Never hand-edit it.

### `pnpm check` already fails on HEAD — that's the baseline, not your breakage

- 17 files fail Biome's format check: mixed indentation (`src/data/certificates.ts`, `src/router.tsx`, `src/components/panels/{CertificatesPanel,ExperiencesPanel}.tsx`, `src/components/icons/*.tsx` use spaces; `vite.config.ts` uses spaces + single quotes; Biome wants tabs + double quotes) plus CRLF-vs-LF on the rest of this Windows checkout (`core.autocrlf=true`, no `.gitattributes`).
- 7 pre-existing lint errors in `src/components/modals/{ExperienceModal,ProjectModal}.tsx` (`noStaticElementInteractions`, `useKeyWithClickEvents`, `noAutofocus`, `noArrayIndexKey`) and 2 `organizeImports` assist errors (`src/components/icons/index.ts`, `vite.config.ts`).
- After `pnpm build`, Biome also lints the generated `.output/public/index.html` (`**/index.html` include + `vcs.useIgnoreFile: false` ignores `.gitignore`), adding ~16 errors. Run `pnpm check` *before* `pnpm build`, or delete `.output` first.
- Don't mass-reformat or mass-fix these inside an unrelated change — compare against baseline and keep the diff scoped.

## Architecture

- **Static site on GitHub Pages.** `vite.config.ts` uses `nitro({ preset: 'github-pages' })`. There is no server runtime in production: don't add server functions or API routes expecting them to work live.
- **Deploy is manual.** `.github/workflows/deploy.yml` runs only on `workflow_dispatch` (Node 22, `pnpm install --frozen-lockfile`, `pnpm build`, uploads `.output/public`). Pushing to `main` does not deploy.
- **Routes** (`src/routes/`): `__root.tsx` is the HTML shell (`shellComponent: RootDocument`) and owns all `<head>` SEO/OG/JSON-LD meta plus `notFoundComponent`; `index.tsx` is the whole portfolio page; `404[.]html.tsx` prerenders `/404.html` for the Pages fallback. No `index.html` exists in the repo — don't create one (Biome's `index.html` include is otherwise dead config).
- **Content is data, not JSX.** Portfolio entries live in `src/data/*.ts` (experiences, projects, certificates, education, socialLinks), typed by `src/types/portfolio.ts`. Adding a project or job = edit the data file + drop the image in `public/`, not edit a component.
- **Asset URLs** must be `` `${import.meta.env.BASE_URL}file.webp` `` (as every existing data file does). Images are `.webp`.
- **Tabs**: `TABS`/`TAB_IDS` in `src/types/portfolio.ts` drive the strip in `index.tsx`, which maps each tab to a panel in `src/components/panels/`. Every panel stays in the HTML (`hidden` attribute) so crawlers index all tabs, and the hash (`#projects`) is read *after* hydration so the prerendered default (`Experiences`) matches SSR. Detail views are `src/components/modals/`.
- Experience `start`/`end` are month indices (`year * 12 + (month - 1)`); `end: null` = present.

## Design system — tokens win

- `DESIGN.md` is the spec (Linear-daylight); `src/styles.css` `@theme` implements it. Read both before UI work.
- Use token utilities, never raw hex (`bg-void text-mist bg-carbon border-graphite bg-obsidian text-ash text-fog text-paper bg-acid-lime text-pitch bg-pulse-green font-mono rounded-badge rounded-md rounded-xl shadow-cta shadow-subtle shadow-xl`). `styles.css` renames some spec tokens (`--radius-badge`, `--shadow-cta`, `--shadow-card`, `--breakpoint-page`) — use the implemented names.
- Spec constraints: one acid-lime CTA per view, type weights ≤590 (`font-medium` = 510), radii only 2/4/badge/6/12/full, hairline borders over shadows, `font-feature-settings "cv01" "ss03" "zero"` already on `body`.
- Global CSS is linked as `../styles.css?url` in `__root.tsx` head — keep that pattern. Fonts ship via `@fontsource-variable/inter` + `@fontsource-variable/jetbrains-mono`, imported in `styles.css`.

## Conventions and gotchas

- Strict TS: `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax` (use `import type`), `noUncheckedSideEffectImports`.
- Path aliases `#/*` and `@/*` → `./src/*` (`package.json` `imports` + `tsconfig.json` `paths`); Vite resolves via `resolve.tsconfigPaths: true`. Existing code mostly uses relative imports — match what's nearby.
- Biome scope is narrow (`biome.json` `files.includes`): only `src/**`, `.vscode/**`, `index.html`, `vite.config.ts` (plus Biome's own `biome.json`); `src/routeTree.gen.ts` and `src/styles.css` are excluded. Config says tabs + double quotes, but several files are still space-indented — write new code with tabs and double quotes.
- Vite plugin order matters: `devtools()` → `nitro()` → `tailwindcss()` → `tanstackStart()` → `viteReact()`. Don't reorder/remove without reason.

## Verification — Playwright MCP

- `opencode.json` registers the `playwright` MCP (`npx @playwright/mcp@latest`). MCP servers load at session start — restart OpenCode after changing `opencode.json`.
- Prefer the `browser_*` tools against the dev server for UI checks over headless-Chrome CLI screenshots. Confirm the actual port from the dev-server output first.

## Design skill — Impeccable

- Installed project-locally: `.opencode/skills/impeccable/SKILL.md` + `.opencode/commands/impeccable.md`. Invoke via `/impeccable <shape|audit|critique|polish|…> <target>` for any UI design/review work.
- Before editing UI with the skill, run `.opencode/skills/impeccable/scripts/impeccable context` (on Windows without `sh`, use `impeccable.cmd`) once per session with cwd at project root; it loads `PRODUCT.md` (not yet created), `DESIGN.md`, and the surface brief.
- Update with `pnpm dlx impeccable update`.
