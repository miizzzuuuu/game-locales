import LabelTranslate from '../../../../../components/LabelTranslate';
import Card from '../../Card';

import stylesParent from '../styles.module.scss';

const Introduction = () => {
    return (
        <Card title={<LabelTranslate value="title" keyLang="htp.introduction" />}>
            <div className={stylesParent.container}>
                <LabelTranslate
                    value="content"
                    keyLang="htp.introduction"
                    className={stylesParent['text-htp']}
                />
            </div>
        </Card>
    );
};

export default Introduction;
