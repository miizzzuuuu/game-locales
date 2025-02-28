import { ReactNode } from 'react';
import Button from '../../../../components/Button';
import LabelTranslate from '../../../../components/LabelTranslate';
import styles from './styles.module.scss';

interface IProps {
    icon: ReactNode;
    text: string;
    onClick?: () => void;
}

const Item = ({ icon, text, onClick }: IProps) => {
    return (
        <Button className={styles.item} onClick={onClick}>
            {icon}

            <LabelTranslate value={text} className={styles['item-text']} />
        </Button>
    );
};

export default Item;
