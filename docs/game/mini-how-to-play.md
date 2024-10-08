## Mini How To Play

### Enable Features `mini How-To-Play`

`src/common/utils/Features.ts`

set `MINI_HOW_TO_PLAY` to `true`

```ts
...

export const Features: FeaturesType = {
    ...
    MINI_HOW_TO_PLAY: true,
};
```

how to add mini how to play

edit the file in the `src/game/components/MiniHowToPlayContent` folder

### how to add a slide:

add an item to the `data` array

```ts
const data: ModalItem[] = [Slide1, Slide2, Slide3, ...];
```

### Slide Format

-   title
-   graphic (svg or animasi svg)
-   content (text)

example slide:

```ts
import { ModalItem } from '../../../../common/components/MiniHowToPlay/Modal';
import Title from '../../../../common/components/MiniHowToPlay/Slide/Title';
import Content from '../../../../common/components/MiniHowToPlay/Slide/Content';
import Graphic from '../../../../common/components/MiniHowToPlay/Slide/Graphic';
import { GraphicComponentProps } from '../../../../common/components/MiniHowToPlay/Slide';

import SLIDE_1 from '../assets/slide-1.json';

const keySlide = 'slide-1';

export const GraphicComponent = ({ isActive }: GraphicComponentProps) => (
    <Graphic isActive={isActive} animationData={SLIDE_1} style={{ width: '28rem' }} />
);

const Slide1: ModalItem = {
    title: <Title keySlide={keySlide} />,
    graphic: (index: number) => <GraphicComponent isActive={index === 0} />,
    content: <Content keySlide={keySlide} />,
};

export default Slide1;
```

## Add or Edit Content

`src/locales/{lang}/mini-htp.json`

_Example:_

`src/locales/en/mini-htp.json`

```json
{
    "slide-1": {
        "title": "How to Play",
        "content": [
            "This is a game where a small ball is thrown into a spinning wheel that has 37 slots numbered from 0 to 36."
        ]
    },
    "slide-2": {
        "title": "Betting",
        "content": [
            "You can bet on numbers, number ranges, colors, or whether the outcome is odd or even. Once your bet is placed, the wheel is spun and a ball is thrown in."
        ]
    },
    "slide-3": {
        "title": "Game Outcome",
        "content": [
            "The ball will stop in one of the slots, and any bets that match the result will win."
        ]
    }
}
```
