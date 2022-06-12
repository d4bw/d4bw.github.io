# website-astro

This is an implementation of the Design for a Better World website, written using [Astro](https://astro.build/). It additionally uses [Solid](https://www.solidjs.com/) for client-side JavaScript components.

## File structure

```
/
├── public/
├── src/
├── .gitignore
├── astro.config.mjs
├── package.json
├── README.md
└── tsconfig.json
```

| item                | description |
| :------------------ | :---------- |
| `public/`           | place to put static files. For example, if we have a file `public/static/example.png`, then that file will be available at `/static/example.png` on the website. Static files should be used sparingly, with local assets preferred whenever possible; if necessary, however, static files should then be scoped inside `public/static/` to avoid any possible route conflicts
| `src/`              | implementation details for the website, encompassing components, pages, utils, etc
| `.gitignore`        | describes files to exclude from version control
| `astro.config.mjs`  | the Astro configuration for this project
| `package.json`      | defines the dependencies, npm scripts, etc for this project
| `README.md`         | the file you're currently reading
| `tsconfig.json`     | configuration file for TypeScript, a superset of JavaScript that adds compile-time type checking

## Commands

The following commands can be run at the root of this folder (i.e. `website-astro`):

| Command           | Action                                                  |
| :---------------- | :------------------------------------------------------ |
| `pnpm i`          | Installs dependencies for all projects in the workspace |
| `pnpm dev`        | Starts a local development server at `localhost:3000`   |
| `pnpm build`      | Builds a production site to `./dist/`                   |
| `pnpm preview`    | Runs the built production site locally                  |
