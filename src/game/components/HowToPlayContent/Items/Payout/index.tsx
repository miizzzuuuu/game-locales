import LabelTranslate from '../../../../../common/components/LabelTranslate';
import Loading from '../../../../../common/components/Loading';
import { useFetchPayout } from '../../../../../common/hooks/useFetchPayout';
import { Container, Heading2 } from '../../../../../common/menus/Items/HowToPlay/Components';
import HowToPlayCard from '../../../../../common/menus/Items/HowToPlay/HowToPlayCard';
import PayoutNote from '../../../../../common/menus/Items/Payout/PayoutContent/PayoutNote';
import TableMenuPayout from '../../../../../common/menus/Items/Payout/PayoutContent/TableMenuPayout';
import Bonus from './Bonus';
import styles from './styles.module.scss';

const Payout = () => {
    const keyLang = 'htp.payout';
    const { loading, data } = useFetchPayout();

    return (
        <HowToPlayCard title={<LabelTranslate value="title" keyLang={keyLang} />}>
            <Container>
                <div className={styles.wrapper}>
                    <div>
                        <Heading2 keyLang={keyLang} value="bet-payout" uppercase />
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
        </HowToPlayCard>
    );
};

export default Payout;
