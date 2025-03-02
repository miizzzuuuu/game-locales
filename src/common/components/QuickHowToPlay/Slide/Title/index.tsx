import { useTranslation } from 'react-i18next';
import { getQuickHTPPrefix } from '../../../../../game/components/QuickHowToPlayContent/helper';

interface IProps {
    keySlide: string;
}

const Title = ({ keySlide }: IProps) => {
    const { t } = useTranslation();

    return <h1>{t(`quick-htp.${getQuickHTPPrefix()}.${keySlide}.title`, { ns: 'game' })}</h1>;
};

export default Title;
