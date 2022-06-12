# Design for a Better World

This is the repository for all aspects of the Design for a Better World website.

## File structure

```
/
├── .github/
├── data/
├── node_modules/
├── packages/
├── styles/
├── website-astro/
├── .gitignore
├── .npmrc
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── README.md
```

| item                  | description |
| :-------------------- | :---------- |
| `.github/`            | configuration files for GitHub, such as automatic workflows for building and deploying the site.
| `data/`               | collection of YAML files used to create cards. Anything changed will probably just be in here
| `node_modules/`       | external dependencies for the entire workspace. Should never be edited manually.
| `packages/`           | collection of shared packages that may be used across website implementations
| `styles/`             | CSS styles for the website
| `website-astro/`      | an implementation of the site using the static site generation framework [Astro](https://astro.build/), with [Solid](https://www.solidjs.com/) for client-side JavaScript components
| `.gitignore`          | describes files to exclude from version control
| `.npmrc`              | configures package manager behavior
| `package.json`        | marks this entire project as a workspace
| `pnpm-lock.yaml`      | lockfile of all installed dependencies and their versions across all projects in this workspace. Should never be edited manually
| `pnpm-workspace.yaml` | configuration for setting up this folder as a workspace
| `README.md`           | the file you're currently reading 

## Technology

This repository uses [pnpm](https://pnpm.io/) as a package manager, and uses `pnpm`'s [workspace feature](https://pnpm.io/workspaces).

Styles are written in [SCSS](https://sass-lang.com/) and compiled down to regular CSS.

The React website is built using [Next.js](https://nextjs.org/) upon [React](https://reactjs.org/), and uses [Framer Motion](https://www.framer.com/motion/) for animations.

All JavaScript code is written in [TypeScript](https://www.typescriptlang.org/) and compiled back down to JavaScript at build time.

## Development - getting started

1. Prerequisites

    * [Node.js](https://nodejs.org/en/) must be installed. `Node.js` ships with the package manager `npm`.
    * `pnpm` must be installed. With `npm` installed, this can be done by running the following in the terminal:
        ```sh
        npm install -g pnpm
        ```

2. Initializing the repository

    * clone the repository to your local file system by running the following command in the terminal:
        ```sh
        git clone https://github.com/d4bw/website.git
        ```
    * install all required packages by running the following in the terminal:
        ```sh
        pnpm install
        ```

3. Develop the website locally

    * enter the directory of the website implementation you intend to test on (e.g. `website-astro`):
        ```sh
        cd website-astro
        ```
    * start the development server for working on the website
        ```sh
        pnpm dev
        ```

        While the development server is running, you can visit and view it at `localhost:3000`. Any changes made to the website should automatically reflect on the browser; if it doesn't, try reloading the page 1-2 times.
        
        You can quit the development server by pressing `ctrl + C` in the terminal or simply closing the terminal.