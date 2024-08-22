import LabelTranslate from '../../../../components/LabelTranslate';
import styles from './styles.module.scss';

interface IProps {
    keyLang?: string;
    value: string;
}

const Heading2 = ({ keyLang, value }: IProps) => {
    return (
        <LabelTranslate type="h2" className={styles['heading-2']} keyLang={keyLang} value={value} />
    );
};

export default Heading2;
