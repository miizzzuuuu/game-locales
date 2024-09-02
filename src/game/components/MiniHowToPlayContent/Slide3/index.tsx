import { ModalItem } from '../../../../common/components/MiniHowToPlay/Modal';
import Content from '../../../../common/components/MiniHowToPlay/Slide/Content';
import Graphic from '../../../../common/components/MiniHowToPlay/Slide/Graphic';
import SVGResult from '../assets/SVGResult';

export const title = 'Hasil Permainan';

export const GraphicComponent = () => {
    return (
        <Graphic>
            <SVGResult style={{ width: '16rem' }} />
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
