import { ModalItem } from '../../../../common/components/MiniHowToPlay/Modal';
import Content from '../../../../common/components/MiniHowToPlay/Slide/Content';
import Graphic from '../../../../common/components/MiniHowToPlay/Slide/Graphic';

import SLIDE_3 from '../assets/slide-3.json';
import Lottie from 'lottie-react';

export const title = 'Hasil Permainan';

export const GraphicComponent = () => {
    return (
        <Graphic>
            <Lottie animationData={SLIDE_3} loop style={{ width: '24rem' }} />
        </Graphic>
    );
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
    graphic: <GraphicComponent />,
    content: <ContentComponent />,
};

export default Slide3;
