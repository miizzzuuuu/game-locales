import LabelTranslate from '../../../../../components/LabelTranslate';
import { ArrayHelper } from '../../../../../utils/ArrayHelper';
import Card from '../../Card';

import stylesParent from '../styles.module.scss';

const Rules = () => {
    return (
        <Card title={<LabelTranslate value="title" keyLang="htp.rules" />}>
            <div className={stylesParent.container}>
                <ul className={stylesParent['htp-list']}>
                    {ArrayHelper.range(4).map((_, idx) => (
                        <li key={idx}>
                            <LabelTranslate
                                value={`steps.${idx}`}
                                keyLang="htp.rules"
                                className={stylesParent['text-htp']}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </Card>
    );
};

export default Rules;
