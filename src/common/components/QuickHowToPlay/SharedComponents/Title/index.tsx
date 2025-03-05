import { useTranslation } from 'react-i18next';
import { getPcode } from '../../../../utils/GameHelper';

interface IProps {
    keySlide: string;
}

const Title = ({ keySlide }: IProps) => {
    const { t } = useTranslation();

    return <h1>{t(`quick-how-to-play.${keySlide}.title`, { ns: getPcode() })}</h1>;
};

export default Title;
