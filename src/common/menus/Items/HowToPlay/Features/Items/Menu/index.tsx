import HowToPlayCardV2 from '../../../HowToPlayCardV2';
import { useTranslation } from 'react-i18next';

const keyLang = 'htp.menu';

const Menu = () => {
    const { t } = useTranslation();

    return <HowToPlayCardV2 title={t(`${keyLang}.title`)}></HowToPlayCardV2>;
};

export default Menu;
