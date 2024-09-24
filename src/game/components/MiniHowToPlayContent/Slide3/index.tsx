import { ModalItem } from '../../../../common/components/MiniHowToPlay/Modal';
import { GraphicComponentProps } from '../../../../common/components/MiniHowToPlay/Slide';
import Content from '../../../../common/components/MiniHowToPlay/Slide/Content';
import Graphic from '../../../../common/components/MiniHowToPlay/Slide/Graphic';

import SLIDE_3 from '../assets/slide-3.json';

export const title = 'Hasil Permainan';

export const GraphicComponent = ({ isActive }: GraphicComponentProps) => {
    return <Graphic isActive={isActive} animationData={SLIDE_3} />;
};

export const ContentComponent = () => {
    return (
        <Content>
            <p>
                Bola akan berhenti disalah satu slot, dan taruhan yang sesuai dengan hasil tersebut
                akan menang.
            </p>
        </Content>
    );
};

const Slide3: ModalItem = {
    title,
    graphic: (index: number) => <GraphicComponent isActive={index === 2} />,
    content: <ContentComponent />,
};

export default Slide3;
