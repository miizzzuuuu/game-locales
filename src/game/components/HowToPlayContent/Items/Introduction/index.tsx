import LabelTranslate from '../../../../../common/components/LabelTranslate';
import HowToPlayCard from '../../../../../common/menus/Items/HowToPlay/HowToPlayCard';

import stylesParent from '../styles.module.scss';

const Introduction = () => {
    return (
        <HowToPlayCard title={<LabelTranslate value="title" keyLang="htp.introduction" />}>
            <div className={stylesParent.container}>
                <LabelTranslate
                    value="content"
                    keyLang="htp.introduction"
                    className={stylesParent['text-htp']}
                />
            </div>
        </HowToPlayCard>
    );
};

export default Introduction;
