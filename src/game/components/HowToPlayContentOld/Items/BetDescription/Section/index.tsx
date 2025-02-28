import { Heading2, P } from '../../../../../../common/menus/Items/HowToPlay/Components';
import { useAppTranslate } from '../../../../../../services/i18next/hooks';
import styles from '../styles.module.scss';

interface IProps {
    keyLang?: string;
    prefix: string;
    dataKeys: string[];
}

const renderExamples = (examples: { bet: string; result: string; status: string }[]) => {
    if (!Array.isArray(examples)) {
        return null;
    }

    return examples.map((example, index) => (
        <tr key={index}>
            <td>{example.bet}</td>
            <td>{example.result}</td>
            <td>
                <p
                    className={
                        example.status === 'WIN' ||
                        example.status === 'MENANG' ||
                        example.status === '승리' ||
                        example.status === 'ชนะ' ||
                        example.status === 'THẮNG' ||
                        example.status === '赢'
                            ? styles.win
                            : styles.lose
                    }
                >
                    {example.status}
                </p>
            </td>
        </tr>
    ));
};

const Section = ({ keyLang, prefix, dataKeys }: IProps) => {
    const { t } = useAppTranslate('');

    const keyLangWithPrefix = `${keyLang}.${prefix}`;

    return (
        <div>
            <Heading2 keyLang={keyLangWithPrefix} uppercase value="heading" />

            <div className={styles['bet-container']}>
                {dataKeys.map((betType) => (
                    <div key={betType} className={styles['bet-card']}>
                        <h3 className={styles['bet-name']}>
                            {t(`${keyLangWithPrefix}.${betType}.title`)}
                        </h3>
                        <P keyLang={keyLangWithPrefix} value={`${betType}.description`} />

                        <h4 className={styles['winning-title']}>
                            {t(`${keyLang}.winning-conditions`)}
                        </h4>
                        <P keyLang={keyLangWithPrefix} value={`${betType}.winning-conditions`} />

                        <div className={styles['example-table-container']}>
                            <table className={styles['example-table']}>
                                <thead>
                                    <tr>
                                        <th>{t(`${keyLang}.bet`)}</th>
                                        <th>{t(`${keyLang}.result`)}</th>
                                        <th>{t(`${keyLang}.status`)}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderExamples(
                                        t(`${keyLangWithPrefix}.${betType}.examples`, {}, true),
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section;
