# Start Game

Determine the game `pcode` first.

`pcode` is a unique id for each game.

pcode list can be seen in api documentation. or in [pcode](pcode.md)

## [Update Dummy API Response for the Game You Are Developing](docs/api)

## [Customizing Loading Screen](customizing-loading-screen.md)

## [Streaming Customization](streaming-customization.md)

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

To create a betting panel, use [this guide.](betting-panel.md)
