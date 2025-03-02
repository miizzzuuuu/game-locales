import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../../../components/Button';
import styles from './styles.module.scss';

interface IProps {
    icon: ReactNode;
    text: string;
    onClick?: () => void;
}

const Item = ({ icon, text, onClick }: IProps) => {
    const { t } = useTranslation();

    return (
        <Button className={styles.item} onClick={onClick}>
            {icon}

            <p className={styles.text}>{t(text)}</p>
        </Button>
    );
};

export default Item;
