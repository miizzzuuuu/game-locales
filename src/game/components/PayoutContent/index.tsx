import styles from './styles.module.scss';
import MenuPayoutTop from './MenuPayoutTop';
import MenuPayoutNote from './MenuPayoutNote';
import TableMenuPayout from './TableMenuPayout';
import { useFetchPayout } from '../../../common/hooks/useFetchPayout';

const PayoutContent = () => {
    const { loading, data } = useFetchPayout();

    return (
        <div className={styles.container}>
            <MenuPayoutTop />

            <div className={styles['table-wrapper']}>
                {loading ? (
                    <div className={styles.loading}>
                        <p className={styles['loading-text']}>Loading...</p>
                    </div>
                ) : (
                    <TableMenuPayout data={data} />
                )}
            </div>

            <MenuPayoutNote />
        </div>
    );
};

export default PayoutContent;
