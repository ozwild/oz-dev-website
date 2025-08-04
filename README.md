# Oz - Development Website

A personal software development website built with [Gridsome](https://gridsome.org/) (Vue.js static site generator), featuring modular sections, responsive design, and dynamic visual effects.

## Features

- **Static site generation** with Gridsome for fast, SEO-friendly pages
- **Vue.js** component-based architecture
- **SCSS** for custom theming and responsive layouts
- **Dynamic sections** for portfolio, contact, and more
- **Animated effects** using custom Vue components and third-party libraries
- **Easy deployment** to GitHub Pages

## Project Structure

```sh
src/ 
    main.js                 # App entry point
    assets/scss/            # Global and component SCSS styles
    components/
        blocks/             # Reusable UI blocks (e.g., FlexBox, Layer)
        sections/           # Full-page content sections
        ui/                 # UI elements
    layouts/Default.vue     # Main site layout
    media/                  # Images, gifs, and lottie animations
    mixins/                 # Vue mixins (e.g., SEO)
    pages/                  # Static pages (add .vue files here)
static/                     # Static assets (robots.txt, sitemap.xml, etc.)
gridsome.config.js          # Gridsome site config
gridsome.server.js          # Gridsome server config
```


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v12+ recommended)
- [npm](https://www.npmjs.com/)

### Install dependencies

```sh
npm install
```

### Development server

```sh
npm run develop
```
Open http://localhost:8080 to view the site.

### Build for production

```sh
npm run build
```

### Deploy to GitHub Pages

```sh
npm run deploy
```

This builds the site and pushes the output in `dist/` to  `ozwild.github.io` repository.

## Customization

- **Site metadata**: Edit gridsome.config.js for site name, description, and plugins.
- **Theme colors**: Modify SCSS variables in `src/assets/scss/main.scss`.
- **Add sections**: Create new Vue components in `src/components/sections/`.

## License
This project is licensed under the GNU GPLv3. See LICENSE for details.

Made with ❤️ by Oscar Palencia (Ozwild)