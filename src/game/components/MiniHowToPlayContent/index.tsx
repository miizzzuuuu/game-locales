import Modal, { ModalItem } from '../../../common/components/MiniHowToPlay/Modal';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';

const data: ModalItem[] = [Slide1, Slide2, Slide3, Slide4];

interface IProps {
    showUI: boolean;
    setShowUI: (value: boolean) => void;
}

const MiniHowToPlayContent = ({ showUI, setShowUI }: IProps) => {
    return <Modal data={data} showUI={showUI} setShowUI={setShowUI} />;
};

export default MiniHowToPlayContent;
