## Commands

```
npm run dev          # astro dev        → localhost:4321
npm run build        # astro build      → dist/
npm run preview      # astro preview
npm run astro ...    # CLI passthrough
```

Start dev server in background:
```
astro dev --background
astro dev stop       # manage background server
astro dev status
astro dev logs
```

There are no test, lint, typecheck, or format scripts configured.

## Structure

- `src/content/docs/` — Markdown/MDX pages, each file = one route
- `src/content.config.ts` — Starlight `docsLoader` + `docsSchema`
- `astro.config.mjs` — site title, sidebar, social config
- `src/assets/` — images embedded from content
- `public/` — static assets (favicons, etc.)
- `.astro/` — generated types (gitignored)

Build output lands in `dist/`.

## Stack

- **Astro 7** + **Starlight 0.41** (docs theme)
- TypeScript strict mode (`astro/tsconfigs/strict`)
- `sharp` for image optimization (required at build time)
- VSCode: extension `astro-build.astro-vscode` recommended

## Notes

- No CI/CD config present
- No content collections beyond `docs`
- Sidebar auto-generates from files under `reference/`; other sections are manual in `astro.config.mjs`
- Template was created from `npm create astro@latest -- --template starlight`
