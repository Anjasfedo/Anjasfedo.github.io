# AGENTS.md

TanStack Start portfolio (React 19, Vite 8, Nitro, Tailwind v4). Single package, no tests, no CI.

## Commands (pnpm only — repo uses `pnpm-lock.yaml`)

- `pnpm install` / `pnpm dev` (`vite dev --port 3000`) / `pnpm build` (`vite build`) / `pnpm preview`
- Lint/format: `pnpm lint` (`biome lint`), `pnpm format`, `pnpm check` (`biome check` — use before finishing)
- No test, typecheck, or lint-staged scripts exist. `tsc` is available via `node_modules` but has no script; don't invent one.
- Serve production build: `node .output/server/index.mjs` (Nitro v3 output in `.output/`, gitignored via `.output` entry — README's `dist/` path is stale)

## Routing — file-based, generated

- Only two routes exist: `src/routes/__root.tsx` (shell, `shellComponent: RootDocument`) and `src/routes/index.tsx` (whole portfolio page: hero, tabs, timeline, modals — all inline, ~500 lines).
- Router wiring: `src/router.tsx` (`getRouter()` imports `./routeTree.gen`).
- `src/routeTree.gen.ts` is generated — never hand-edit. Regenerate with `pnpm generate-routes` (`tsr generate`, config in `tsr.config.json`).
- No `index.html` exists — HTML shell comes from `__root.tsx`. Don't create one; Biome's `index.html` include is dead config.

## Design system — tokens win

- `DESIGN.md` is the Linear-daylight spec (source of truth for values); `src/styles.css` `@theme` is its implementation. Read both before UI work.
- Use token utilities, never raw hex: `bg-void text-mist bg-carbon border-graphite bg-obsidian text-ash text-fog text-paper bg-acid-lime text-pitch bg-pulse-green font-mono rounded-badge rounded-md rounded-xl shadow-cta shadow-subtle shadow-xl`.
- Constraints from spec: one acid-lime CTA per view, type weights ≤590 (`font-medium` = 510), radii only 2/4/badge/6/12/full, hairline borders over shadows, `font-feature-settings "cv01" "ss03" "zero"` already on `body`.
- Fonts ship via `@fontsource-variable/inter` + `@fontsource-variable/jetbrains-mono`, imported in `styles.css`. Global CSS stays linked as `../styles.css?url` in `__root.tsx` head — keep that pattern.
- Styling is Tailwind v4 via `@tailwindcss/vite`. Note `styles.css` renames some spec tokens (`--radius-badge`, `--shadow-cta`, `--shadow-card`, `--breakpoint-page`) — use the implemented names.

## Conventions and gotchas

- Path aliases `#/*` and `@/*` both map to `./src/*` (`package.json` `imports` + `tsconfig.json` `paths`); Vite resolves them via `resolve.tsconfigPaths: true`.
- Strict TS is on: `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax` (use `import type` where required), `noUncheckedSideEffectImports`.
- Biome scope is narrow (`biome.json` `files.includes`): only `src/**`, `.vscode/**`, `index.html`, `vite.config.ts`; `src/routeTree.gen.ts` and `src/styles.css` are explicitly excluded. Style: tabs, double quotes, organize-imports assist on.
- Vite plugins order matters: `devtools()` → `nitro({ rollupConfig: { external: [/^@sentry\//] } })` → `tailwindcss()` → `tanstackStart()` → `viteReact()`. Don't reorder/remove without reason.
- `reference/` is untracked and contains a separate nested Astro repo (`reference/Anjasfedo.github.io`, own `.git`, npm scripts). Ignore it for root work — never run its scripts from here or edit it unless asked.

## Design skill — Impeccable

- Installed project-locally: `.opencode/skills/impeccable/SKILL.md` (v4.3.1) + `.opencode/commands/impeccable.md`. Invoke via `/impeccable <shape|audit|critique|polish|…> <target>` for any UI design/review work.
- Before editing UI with the skill, run `.opencode/skills/impeccable/scripts/impeccable context` once per session (keep cwd at project root); it loads `PRODUCT.md`, `DESIGN.md`, and the surface brief.
- Update with `pnpm dlx impeccable update`.
