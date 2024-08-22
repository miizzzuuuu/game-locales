import LabelTranslate from '../../../../../common/components/LabelTranslate';
import { P, Ul } from '../../../../../common/menus/Items/HowToPlay/Components';
import HowToPlayCard from '../../../../../common/menus/Items/HowToPlay/HowToPlayCard';
import { ArrayHelper } from '../../../../../common/utils/ArrayHelper';
import stylesParent from '../styles.module.scss';

const Rules = () => {
    const keyLang = 'htp.rules';

    return (
        <HowToPlayCard title={<LabelTranslate value="title" keyLang={keyLang} />}>
            <div className={stylesParent.container}>
                <Ul>
                    {ArrayHelper.range(4).map((_, idx) => (
                        <li key={idx}>
                            <P keyLang={keyLang} value={`steps.${idx}`} />
                        </li>
                    ))}
                </Ul>
            </div>
        </HowToPlayCard>
    );
};

export default Rules;
