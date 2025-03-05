import { useTranslation } from 'react-i18next';
import { Container, P } from '../../../../../common/components/HowToPlay/ui';
import HowToPlayCardV2 from '../../../../../common/menus/Items/HowToPlay/HowToPlayCardV2';
import { prefixDTWCard } from '../../helper';
import TableCardValue from './TableCardValue';

const DTWCard = () => {
    const { t } = useTranslation();

    return (
        <HowToPlayCardV2 title={t(`${prefixDTWCard}.title`, { ns: 'game' })}>
            <Container>
                <P>{t(`${prefixDTWCard}.content`, { ns: 'game' })}</P>

                <TableCardValue />
            </Container>
        </HowToPlayCardV2>
    );
};

export default DTWCard;
