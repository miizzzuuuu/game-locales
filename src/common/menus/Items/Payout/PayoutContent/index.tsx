import styles from './styles.module.scss';
import MenuPayoutTop from './MenuPayoutTop';
import TableMenuPayout from './TableMenuPayout';
import { useFetchPayout } from '../../../../hooks/useFetchPayout';
import Loading from '../../../../components/Loading';
import PayoutNote from './PayoutNote';

const PayoutContent = () => {
    const { loading, data } = useFetchPayout();

    return (
        <div className={styles.container}>
            <MenuPayoutTop />

            <div className={styles['table-wrapper']}>
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        <TableMenuPayout data={data} />
                        <PayoutNote content="payout-no-initial-bet" />
                    </>
                )}
            </div>
        </div>
    );
};

export default PayoutContent;
