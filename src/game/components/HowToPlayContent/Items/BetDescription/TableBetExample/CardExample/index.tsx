import { useTranslation } from 'react-i18next';
import { P } from '../../../../../../../common/components/HowToPlay/ui';
import RenderCard2 from '../../../../../Card/RenderCard2';
import { prefixBetDescription } from '../../../../helper';
import { CardData } from '../../helper';
import styles from './style.module.scss';

type IProps = {
    cardName: string;
    card?: CardData;
};

const CardExample = ({ cardName, card }: IProps) => {
    const { t } = useTranslation();

    if (!card) {
        return null;
    }

    return (
        <div className={styles.item}>
            <P className={styles.name}>{t(cardName, { ns: 'game' })}</P>

            <RenderCard2 value={card.card} className={styles.card} />

            <P className={styles.value}>
                {card.value ?? t(`${prefixBetDescription}.any`, { ns: 'game' })}
            </P>
        </div>
    );
};

export default CardExample;
