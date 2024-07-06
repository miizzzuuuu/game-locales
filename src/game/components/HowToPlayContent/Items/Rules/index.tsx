import LabelTranslate from '../../../../../common/components/LabelTranslate';
import HowToPlayCard from '../../../../../common/menus/Items/HowToPlay/HowToPlayCard';
import { ArrayHelper } from '../../../../../common/utils/ArrayHelper';
import stylesParent from '../styles.module.scss';

const Rules = () => {
    return (
        <HowToPlayCard title={<LabelTranslate value="title" keyLang="htp.rules" />}>
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
        </HowToPlayCard>
    );
};

export default Rules;
