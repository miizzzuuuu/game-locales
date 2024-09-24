import styles from './styles.module.scss';
import { useAppTranslate } from '../../../../../services/i18next/hooks';

interface IProps {
    keySlide: string;
}

const Content = ({ keySlide }: IProps) => {
    const { t } = useAppTranslate(`miniHtp.${keySlide}`);

    const contents = t('content', {}, true) as string[];

    return (
        <div className={styles.content}>
            {contents.map((content, idx) => (
                <p key={idx}>{content}</p>
            ))}
        </div>
    );
};

export default Content;
