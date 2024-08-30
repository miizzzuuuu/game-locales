# Start Game

## Branch Game

Create a new branch named `dev/<GAME-NAME>`

example: `dev/europe-roulette`

then continue developing the game

## Determine the game `pcode` first.

`pcode` is a unique id for each game.

pcode list can be seen in api documentation. or in [pcode](pcode.md)

## [Update Dummy API Response for the Game You Are Developing](docs/api)

## [Customizing Loading Screen](customizing-loading-screen.md)

## [Streaming Customization](streaming-customization.md)

## Enable Letterbox

to enable letterbox, use [this guide](enable-letterbox.md)

## Portrait and Landscape

To differentiate styles with different orientations, use [this guide](docs/css/differentiating.md)

## Main Area Game

### Editing the Main Area Game

To edit the main area of the game, go to `common/components/GameUI`.

```tsx
import LayoutV1 from '../../layouts/v1';

const GameUI = () => {
    return <LayoutV1>{/* Edit here */}</LayoutV1>;
};

export default GameUI;
```

### Organizing Game Components

Place all components related to the game into the `src/game/` folder.

## Betting Panel

To create a betting panel, use [this guide](betting-panel.md).

## Socket Game

### Simulating Socket in Local Game

-   `l`: Open game (`loadNewValue`)
-   `r`: Game result (`gameResult`)
-   `w`: Display win (`receive_totalwin`)
-   `c`: Close timer (`closeTimer`)

### Socket Configuration Location

`src/services/socket/`

### Usage Location

`src/common/components/Game/index.tsx`

## Menu

To change the contents of the menu, use [this guide](menu.md).

## Mini How To Play

To custumize mini how to play, use [this guide](mini-how-to-play.md).

## Build and Upload to Dev

[How to Build and Upload to dev](upload-to-dev-server.md).
