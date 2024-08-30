import Modal, { ModalItem } from '../../../common/components/MiniHowToPlay/Modal';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';

const data: ModalItem[] = [Slide1, Slide2, Slide3];

const MiniHowToPlayContent = () => {
    return <Modal data={data} />;
};

export default MiniHowToPlayContent;
