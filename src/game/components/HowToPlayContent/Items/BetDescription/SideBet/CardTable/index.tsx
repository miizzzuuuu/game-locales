import LabelTranslate from './../../../../../../../common/components/LabelTranslate';
import { getBasePcode } from './../../../../../../../common/utils/GameHelper';
import { RenderCardV2 } from './../../../../../ResultDTWildTransaction/base/rcard-v2';
import styles from './style.module.scss';

export interface ICardExample {
    data: {
        dragon: string;
        wild: string;
        tiger: string;
    };
}

const CardExample = ({ data }: ICardExample) => {
    const keyLang = getBasePcode();

    return (
        <div className={styles['container']}>
            {Object.keys(data).map((key) => {
                // @ts-ignore
                const dataString = data[key];
                return (
                    !!dataString && (
                        <div key={key} className={styles['item']}>
                            <LabelTranslate value={key} keyLang={keyLang} />
                            <RenderCardV2
                                value={dataString.concat('s')}
                                visible={true}
                                submit={true}
                            />
                        </div>
                    )
                );
            })}
        </div>
    );
};

export default CardExample;
