# AGENTS.md

Fresh TanStack Start starter (React 19, Vite 8, Nitro, Tailwind v4). Single package, no tests, no CI.

## Commands (pnpm only — repo uses `pnpm-lock.yaml`)

- `pnpm install` / `pnpm dev` (`vite dev --port 3000`) / `pnpm build` (`vite build`) / `pnpm preview`
- Lint/format: `pnpm lint` (`biome lint`), `pnpm format`, `pnpm check` (`biome check` — use before finishing)
- No test, typecheck, or lint-staged scripts exist. `tsc` is available via `node_modules` but has no script; don't invent one.
- Serve production build: `node .output/server/index.mjs` (Nitro v3 output in `.output/`, gitignored via `.output` entry — README's `dist/` path is stale)

## Routing — file-based, generated

- Routes live in `src/routes/`; layout/shell in `src/routes/__root.tsx` (`shellComponent: RootDocument`).
- Router wiring: `src/router.tsx` (`getRouter()` imports `./routeTree.gen`).
- `src/routeTree.gen.ts` is generated — never hand-edit. Regenerate with `pnpm generate-routes` (`tsr generate`, config in `tsr.config.json`).

## Conventions and gotchas

- Path aliases `#/*` and `@/*` both map to `./src/*` (`package.json` `imports` + `tsconfig.json` `paths`); Vite resolves them via `resolve.tsconfigPaths: true`.
- Strict TS is on: `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax` (use `import type` where required), `noUncheckedSideEffectImports`.
- Biome scope is narrow (`biome.json` `files.includes`): only `src/**`, `.vscode/**`, `index.html`, `vite.config.ts`; `src/routeTree.gen.ts` and `src/styles.css` are explicitly excluded. Style: tabs, double quotes, organize-imports assist on.
- Styling is Tailwind v4 via `@tailwindcss/vite` in `vite.config.ts`; global CSS `src/styles.css` is linked as `../styles.css?url` in `__root.tsx` head — keep that pattern.
- Vite plugins order matters: `devtools()` → `nitro({ rollupConfig: { external: [/^@sentry\//] } })` → `tailwindcss()` → `tanstackStart()` → `viteReact()`. Don't reorder/remove without reason.

## Design skill — Impeccable

- Installed project-locally: `.opencode/skills/impeccable/SKILL.md` (v4.3.1) + `.opencode/commands/impeccable.md`. Invoke via `/impeccable <shape|audit|critique|polish|…> <target>` for any UI design/review work.
- Before editing UI with the skill, run `.opencode/skills/impeccable/scripts/impeccable context` once per session (keep cwd at project root); it loads `PRODUCT.md`, `DESIGN.md`, and the surface brief.
- Update with `pnpm dlx impeccable update`.
