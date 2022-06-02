# Design for a Better World

This is the repository for all aspects of the Design for a Better World website.

## File structure: Overview

|   folder name     |   description |
|   :--             |   :--
|   `data`          |   collection of YAML files used to create cards. Anything changed will probably just be in here
|   `packages`      |   collection of shared packages that may be used across website implementations
|   `styles`        |   CSS styles for the website
|   `website-react` |   an implementation of the site using the UI framework [React](https://reactjs.org/) and meta-framework for React [Next.js](https://nextjs.org/)

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

    * enter the directory of the website implementation you intend to test on (e.g. `website-react`):
        ```sh
        cd website-react
        ```
    * start the development server for working on the website
        ```sh
        pnpm dev
        ```

        While the development server is running, you can visit and view it at `localhost:3000`. Any changes made to the website should automatically reflect on the browser; if it doesn't, try reloading the page 1-2 times.
        
        You can quit the development server by pressing `ctrl + C` in the terminal or simply closing the terminal.