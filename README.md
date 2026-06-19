# whereismypasta

A showcase for [Airbourne Lens](https://youtube.com/@AirbourneLens) — cinematic 4K aerial drone footage captured across the globe.

Built with [Astro](https://astro.build) and deployed on [Cloudflare Pages](https://pages.cloudflare.com).

## Project structure

```
/
├── .github/workflows/lint.yml   # ESLint on push/PR
├── public/                       # Static assets (logo, favicon)
├── src/
│   ├── components/
│   │   ├── Header.tsx            # Sticky nav with mobile menu
│   │   ├── FeaturedVideo.tsx     # Latest upload embed
│   │   ├── VideoGrid.tsx         # Highlight cards with badges + animations
│   │   └── icons.tsx             # SVG icon components
│   ├── layouts/
│   │   └── BaseLayout.astro      # Shared page shell
│   ├── pages/
│   │   ├── index.astro           # Home (hero, featured, highlights)
│   │   ├── locations.astro       # Destination directory
│   │   └── about.astro           # Channel description
│   └── styles/
│       └── global.css            # Warm dark palette
├── eslint.config.js
├── bun.lock
└── package.json
```

## Commands

| Command                    | Action                                |
| :------------------------- | :------------------------------------ |
| `bun install`              | Install dependencies                  |
| `bun run dev`              | Start dev server at `localhost:4321`  |
| `bun run build`            | Build production site to `./dist/`    |
| `bun run preview`          | Preview build locally                 |
| `bun run lint`             | Run ESLint across all files           |
| `bun run lint:fix`         | Auto-fix lint issues                  |

## Tech stack

- **Astro** 6 — static site generation
- **React** — interactive components (header, video grid)
- **TypeScript** — strict mode
- **Bun** — package manager and runtime
- **ESLint** — code quality (astro, typescript, react plugins)
- **Cloudflare Pages** — hosting and deployment

## Deployment

Pushes to `main` are auto-deployed via Cloudflare Pages. Branch previews are generated for all pull requests.
