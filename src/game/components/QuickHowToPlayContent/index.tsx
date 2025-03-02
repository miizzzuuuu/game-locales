import ModalQuickHTP, { ModalItem } from '../../../common/components/QuickHowToPlay/ModalQuickHTP';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';

interface IProps {
    showUI: boolean;
    setShowUI: (value: boolean) => void;
}

const data: ModalItem[] = [Slide1, Slide2, Slide3];

const QuickHowToPlayContent = ({ showUI, setShowUI }: IProps) => {
    return <ModalQuickHTP data={data} showUI={showUI} setShowUI={setShowUI} />;
};

export default QuickHowToPlayContent;
