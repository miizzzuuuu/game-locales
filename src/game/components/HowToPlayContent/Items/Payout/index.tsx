import { useTranslation } from 'react-i18next';
import Loading from '../../../../../common/components/Loading';
import { useFetchPayout } from '../../../../../common/hooks/useFetchPayout';
import { Container } from '../../../../../common/menus/Items/HowToPlay/Components';
import HowToPlayCardV2 from '../../../../../common/menus/Items/HowToPlay/HowToPlayCardV2';
import PayoutNote from '../../../../../common/menus/Items/Payout/PayoutContent/PayoutNote';
import TableMenuPayout from '../../../../../common/menus/Items/Payout/PayoutContent/TableMenuPayout';
import Bonus from './Bonus';
import styles from './styles.module.scss';

const keyLang = 'htp.payout';

const Payout = () => {
    const { t } = useTranslation();
    const { loading, data } = useFetchPayout();

    return (
        <HowToPlayCardV2 title={t('payout-and-limit')}>
            <Container>
                <div className={styles.wrapper}>
                    <div>
                        {loading ? (
                            <Loading />
                        ) : (
                            <>
                                <TableMenuPayout data={data} />
                                <PayoutNote content="payout-no-initial-bet" />
                            </>
                        )}
                    </div>

                    <Bonus keyLang={keyLang} />
                </div>
            </Container>
        </HowToPlayCardV2>
    );
};

export default Payout;
