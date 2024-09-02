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
import Content from '../../../../common/components/MiniHowToPlay/Slide/Content';
import Graphic from '../../../../common/components/MiniHowToPlay/Slide/Graphic';
import SVGWheel from '../assets/SVGWheel';

export const title = 'Cara Bermain';

export const GraphicComponent = () => {
    return (
        <Graphic>
            <div>
                <SVGWheel />
            </div>
        </Graphic>
    );
};

export const ContentComponent = () => {
    return (
        <Content>
            <p>
                Permainan dimana 1 bola kecil dilemparkan kedalam Roda berputar yang memiliki 37
                slot dengan angka dari 0 hingga 36 Angka.
            </p>
        </Content>
    );
};

const Slide1: ModalItem = {
    title,
    graphic: <GraphicComponent />,
    content: <ContentComponent />,
};

export default Slide1;
```
