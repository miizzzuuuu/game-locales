import LabelTranslate from '../../../../../common/components/LabelTranslate';
import { Container, Heading2, P } from '../../../../../common/menus/Items/HowToPlay/Components';
import HowToPlayCard from '../../../../../common/menus/Items/HowToPlay/HowToPlayCard';
import { useAppTranslate } from '../../../../../services/i18next/hooks';
import styles from './styles.module.scss';

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

const mainKeys = [
    'single',
    'split',
    'corner',
    'single-row',
    'single-column',
    'double-row',
    'double-column',
];

const fiftyFiftyKeys = ['small', 'big', 'odd', 'even', 'red', 'black'];

const BetDescription = () => {
    const { t } = useAppTranslate('');
    const keyLang = 'htp.bet-description-and-example';

    return (
        <HowToPlayCard title={<LabelTranslate value="title" keyLang={keyLang} />}>
            <Container>
                <Heading2 keyLang={keyLang} value="main-bet.heading" />

                <div className={styles['bet-container']}>
                    {mainKeys.map((betType) => (
                        <div key={betType} className={styles['bet-card']}>
                            <h3 className={styles['bet-name']}>
                                {t(`${keyLang}.main-bet.${betType}.title`)}
                            </h3>
                            <P keyLang={keyLang} value={`main-bet.${betType}.description`} />

                            <h4 className={styles['winning-title']}>
                                {t(`${keyLang}.winning-conditions`)}
                            </h4>
                            <P keyLang={keyLang} value={`main-bet.${betType}.winning-conditions`} />

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
                                            t(`${keyLang}.main-bet.${betType}.examples`, {}, true),
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </div>

                <Heading2 keyLang={keyLang} value="fifty-fifty-bet.heading" />

                <div className={styles['bet-container']}>
                    {fiftyFiftyKeys.map((betType) => (
                        <div key={betType} className={styles['bet-card']}>
                            <h3 className={styles['bet-name']}>
                                {t(`${keyLang}.fifty-fifty-bet.${betType}.title`)}
                            </h3>

                            <h4 className={styles['winning-title']}>
                                {t(`${keyLang}.winning-conditions`)}
                            </h4>
                            <P
                                keyLang={keyLang}
                                value={`fifty-fifty-bet.${betType}.winning-conditions`}
                            />

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
                                            t(
                                                `${keyLang}.fifty-fifty-bet.${betType}.examples`,
                                                {},
                                                true,
                                            ),
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </HowToPlayCard>
    );
};

export default BetDescription;
