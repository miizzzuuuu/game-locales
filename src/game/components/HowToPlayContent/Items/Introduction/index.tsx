import LabelTranslate from '../../../../../common/components/LabelTranslate';
import { P } from '../../../../../common/menus/Items/HowToPlay/Components';
import HowToPlayCard from '../../../../../common/menus/Items/HowToPlay/HowToPlayCard';

import stylesParent from '../styles.module.scss';

const Introduction = () => {
    const keyLang = 'htp.introduction';

    return (
        <HowToPlayCard title={<LabelTranslate value="title" keyLang={keyLang} />}>
            <div className={stylesParent.container}>
                <P keyLang={keyLang} value="content" />
            </div>
        </HowToPlayCard>
    );
};

export default Introduction;
