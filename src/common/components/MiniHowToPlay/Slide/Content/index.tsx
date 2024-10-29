import styles from './styles.module.scss';
import { useAppTranslate } from '../../../../../services/i18next/hooks';

interface IProps {
    keySlide: string;
}

const Content = ({ keySlide }: IProps) => {
    const { t } = useAppTranslate(`miniHtp.${keySlide}`);

    const contents = t<string[]>('content', {}, true);

    return (
        <>
            {contents.map((content, idx) => (
                <p
                    key={idx}
                    className={styles.paragraf}
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            ))}
        </>
    );
};

export default Content;
