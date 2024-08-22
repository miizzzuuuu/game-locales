import LabelTranslate from '../../../../../common/components/LabelTranslate';
import HowToPlayCard from '../../../../../common/menus/Items/HowToPlay/HowToPlayCard';

import stylesParent from '../styles.module.scss';

const Introduction = () => {
    const keyLang = 'htp.introduction';

    return (
        <HowToPlayCard title={<LabelTranslate value="title" keyLang={keyLang} />}>
            <div className={stylesParent.container}>
                <LabelTranslate
                    value="content"
                    keyLang={keyLang}
                    className={stylesParent['text-htp']}
                />
            </div>
        </HowToPlayCard>
    );
};

export default Introduction;
