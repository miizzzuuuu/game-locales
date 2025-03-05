import { useTranslation } from 'react-i18next';
import { getBasePcode } from '../../../../utils/GameHelper';

interface IProps {
    keySlide: string;
}

const Title = ({ keySlide }: IProps) => {
    const { t } = useTranslation();

    return <h1>{t(`${getBasePcode()}.quick-how-to-play.${keySlide}.title`, { ns: 'game' })}</h1>;
};

export default Title;
