# IDNLIVE GAMES BOILERPLATE

node v22.13.1
npm 10.9.2
pnpm 10.2.0

## Quick start

1. Clone this repo using `git clone --depth=1 ssh://git@gitdewa99.com:8822/idnlive/idnlive-game-modules.git <YOUR_PROJECT_NAME>`
2. Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.
3. Run `pnpm install` in order to install dependencies. At this point you can run `pnpm dev` to see the example app at `http://localhost:4000?pcode=<PCODE_YOUR_GAME>`.

List pcode: [pcode](docs/game/pcode.md)

## Start project

To start creating a game, follow [these steps](docs/game).

## Documentation

- [**Guide to `idnlive-game-modules`**](docs/general/introduction.md): An introduction for newcomers to this boilerplate.
- [Overview](docs/general): A short overview of the included tools
- [**Commands**](docs/general/commands.md): Getting the most out of this boilerplate
- [Styling](docs/css): How to work with the CSS tooling
- [Game](docs/game): Start a game project.

# New Update

- the translation for "show chip missing" is added
- fix the time format, change it to 24-hour
- hide log text during loading in production mode
- update width menu in landscape
