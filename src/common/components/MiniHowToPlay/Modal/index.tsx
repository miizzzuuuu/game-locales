import { ReactNode, useState } from 'react';
import Slider from '../Slider';
import ButtonClose from './ButtonClose';
import ButtonDetails from './ButtonDetails';
import DontShowAgain from './DontShowAgain';
import Indicators from './Indicators';
import styles from './styles.module.scss';
import { toggleMenuHTP } from '../../../../store/slice/menuSlice';
import { useAppDispatch } from '../../../../store/hooks';
import { GameHelper } from '../../../utils/GameHelper';
import { updateMiniHowToPlay } from '../../../../services/api/miniHowToPlay';

export type ModalItem = {
    title: ReactNode;
    graphic: (index: number) => ReactNode;
    content: ReactNode;
};

export interface ModalProps {
    data: ModalItem[];
}

export interface IProps extends ModalProps {
    showUI: boolean;
    setShowUI: (value: boolean) => void;
}

const Modal = ({ data, showUI, setShowUI }: IProps) => {
    const dispatch = useAppDispatch();

    const [dontShowAgain, setDontShowAgain] = useState(false);

    const [index, setIndex] = useState(0);

    const handleClose = () => {
        if (showUI) {
            setShowUI(false);
            GameHelper.hideMiniHowToPlayLocalStorage();

            if (dontShowAgain) {
                updateMiniHowToPlay({ show: false });
            }
        }
    };

    const openHTPDetail = () => {
        handleClose();

        dispatch(toggleMenuHTP());
    };

    return (
        <div className={`${styles.modal}${!showUI ? ` ${styles.close}` : ''}`}>
            <ButtonClose handleClose={handleClose} />

            <div className={styles.body}>
                <Slider data={data} index={index} setIndex={setIndex} />
            </div>

            <ButtonDetails show={index === data.length - 1} openHTPDetail={openHTPDetail} />
            <Indicators data={data} index={index} setIndex={setIndex} />
            <DontShowAgain checked={dontShowAgain} setChecked={setDontShowAgain} />
        </div>
    );
};

export default Modal;
