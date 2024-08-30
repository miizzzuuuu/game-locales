import { ReactNode, useState } from 'react';
import Slider from '../Slider';
import ButtonClose from './ButtonClose';
import ButtonDetails from './ButtonDetails';
import DontShowAgain from './DontShowAgain';
import Indicators from './Indicators';
import styles from './styles.module.scss';

export type ModalItem = {
    title: string;
    graphic: ReactNode;
    content: ReactNode;
};

export interface ModalProps {
    data: ModalItem[];
}

const Modal = ({ data }: ModalProps) => {
    const [activeIndex] = useState(0);

    return (
        <div className={styles.modal}>
            <ButtonClose />

            <div className={styles.body}>
                <Slider data={data} />
            </div>

            <ButtonDetails show={activeIndex === data.length - 1} />
            <Indicators data={data} />
            <DontShowAgain />
        </div>
    );
};

export default Modal;
