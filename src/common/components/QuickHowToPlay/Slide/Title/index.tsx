import { useTranslation } from 'react-i18next';

interface IProps {
    keySlide: string;
}

const Title = ({ keySlide }: IProps) => {
    const { t } = useTranslation();

    return <h1>{t(`miniHtp.${keySlide}.title`, { ns: 'game' })}</h1>;
};

export default Title;
