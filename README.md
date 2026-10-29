# Developer Portfolio

A personal developer portfolio built with React, Vite, JavaScript, and CSS. Profile details, skills, and project cards live in data files so you can customize the site without rewriting layout components.

## Setup

1. Install [Node.js](https://nodejs.org/) (LTS).
2. Open this folder in a terminal.
3. Install dependencies:

```bash
npm install
```

## Development

Start the local development server:

```bash
npm run dev
```

Vite prints a local URL, usually `http://localhost:5173`. Open that address in your browser.

## Production build

```bash
npm run build
npm run preview
```

`npm run build` writes static files to `dist/`. `npm run preview` serves that production build locally.

## Customize

Edit these files:

| What to change | File |
| --- | --- |
| Name, headline, about text, email, GitHub, LinkedIn, skills | `src/data/profile.js` |
| Project cards, GitHub URLs, optional live demos | `src/data/projects.js` |
| Colors, spacing, typography | `src/index.css` (`:root` variables) |
| Page title and description | `index.html` |
| Favicon | `public/favicon.svg` |

Replace placeholder project cards before publishing. Do not invent GitHub repositories or demo URLs.

To connect the contact form to a real service (for example Formspree), set `formEndpoint` in `src/data/profile.js`. Until that value is set, the form validates input and explains that nothing has been delivered.

## Deploy

Any static host works with the `dist/` folder:

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)

Typical settings: build command `npm run build`, publish directory `dist`.
