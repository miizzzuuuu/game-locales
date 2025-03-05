import { useTranslation } from 'react-i18next';
import { getBasePcode } from '../../../../utils/GameHelper';
import styles from './styles.module.scss';

interface IProps {
    keySlide: string;
}

const Content = ({ keySlide }: IProps) => {
    const { t } = useTranslation();

    const contents = t(`${getBasePcode()}.quick-how-to-play.${keySlide}.content`, {
        returnObjects: true,
        ns: 'game',
    });

    return (
        <>
            {Array.isArray(contents) &&
                contents.map((content, idx) => {
                    if (typeof content !== 'string') {
                        return null;
                    }

                    return (
                        <p
                            key={idx}
                            className={styles.paragraf}
                            dangerouslySetInnerHTML={{ __html: content }}
                        />
                    );
                })}
        </>
    );
};

export default Content;
