import LabelTranslate from '../../../../../../common/components/LabelTranslate';
import { getBasePcode } from '../../../../../../common/utils/GameHelper';
import { RenderCardV2 } from '../../../../ResultDTWildTransaction/base/rcard-v2';
import styles from './style.module.scss';
import { t } from 'i18next';

export interface ICardExample {
    data: {
        dragon?: string;
        tiger?: string;
        wild?: string;
    };

    dataValue: {
        dragon?: string;
        tiger?: string;
        wild?: string;
    };
}

const CardExample = ({ data, dataValue }: ICardExample) => {
    const keyLang = getBasePcode();

    return (
        <div className={styles['container']}>
            {Object.keys(data).map((key) => {
                // @ts-ignore
                const dataString = data[key];

                return (
                    <div key={key} className={styles['item']}>
                        <LabelTranslate value={key} keyLang={keyLang} />
                        <RenderCardV2 value={dataString} visible={true} submit={true} />
                        <span
                            style={{
                                textAlign: 'center',
                            }}
                        >
                            {[dataString].every((item) => !item)
                                ? t('htp.bet-description-and-example.anything').toUpperCase()
                                : dataValue
                                  ? // @ts-ignore
                                    dataValue[key]
                                  : 0}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default CardExample;
