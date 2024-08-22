import { Fragment } from 'react/jsx-runtime';
import LabelTranslate from '../../../../../common/components/LabelTranslate';
import {
    Container,
    Heading2,
    Heading3,
    P,
} from '../../../../../common/menus/Items/HowToPlay/Components';
import HowToPlayCard from '../../../../../common/menus/Items/HowToPlay/HowToPlayCard';

import styles from './styles.module.scss';

const contents = [
    {
        key: 'introduction',
    },
    {
        key: 'lucky-numbers',
        options: {
            minNumbers: 2,
            maxNumbers: 12,
            minMultiplier: 30,
            maxMultiplier: 95,
        },
    },
    {
        key: 'jackpot-number',
        options: {
            minJackpotMultiplier: 100,
            maxJackpotMultiplier: 500,
        },
    },
    {
        key: 'how-to-get-bonuses',
    },
];

const examples = [
    {
        period: 1,
        numbers: '1, 2, 3, 4, 5, 6',
        bet: 1000,
        luckyNumbers: '1, 3, 5, 20, 22',
        luckyMultiplier: 95,
        jackpotNumber: 6,
        jackpotMultiplier: 500,
        gameResult: 3,
        totalWinnings: 95000,
    },
    {
        period: 2,
        numbers: '1, 2, 3, 4, 5, 6',
        bet: 1000,
        luckyNumbers: '1, 3, 5, 20, 22',
        luckyMultiplier: 95,
        jackpotNumber: 6,
        jackpotMultiplier: 500,
        gameResult: 6,
        totalWinnings: 500000,
    },
    {
        period: 3,
        numbers: '1, 2, 3, 4, 5, 6',
        bet: 1000,
        luckyNumbers: '1, 3, 5, 20, 22',
        luckyMultiplier: 95,
        jackpotNumber: 6,
        jackpotMultiplier: 500,
        gameResult: 4,
        totalWinnings: 19000,
    },
];

const BonusSystem = () => {
    const keyLang = 'htp.bonus-system';

    return (
        <HowToPlayCard title={<LabelTranslate value="title" keyLang={keyLang} />}>
            <Container>
                {contents.map((content) => {
                    return (
                        <Fragment key={content.key}>
                            <Heading2 keyLang={keyLang} value={`${content.key}.heading`} />
                            <P
                                keyLang={keyLang}
                                value={`${content.key}.content`}
                                option={content.options}
                            />
                        </Fragment>
                    );
                })}

                {examples.map((example, idx) => {
                    const prefix = `example-${idx + 1}`;

                    return (
                        <div className={styles['example']} key={idx}>
                            <Heading3 keyLang={keyLang} value={`${prefix}.title`} />

                            <P keyLang={keyLang} value={`${prefix}.period`} option={example} />

                            <P keyLang={keyLang} value={`${prefix}.description`} option={example} />

                            <P
                                keyLang={keyLang}
                                value={`${prefix}.result`}
                                option={example}
                                multiLine
                            />

                            <div className={styles['result']}>
                                <P
                                    keyLang={keyLang}
                                    value={`${prefix}.winnings`}
                                    option={example}
                                    multiLine
                                />
                            </div>
                        </div>
                    );
                })}
            </Container>
        </HowToPlayCard>
    );
};

export default BonusSystem;
