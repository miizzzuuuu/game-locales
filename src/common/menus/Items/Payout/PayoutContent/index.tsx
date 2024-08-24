import styles from './styles.module.scss';
import MenuPayoutTop from './MenuPayoutTop';
import MenuPayoutNote from './MenuPayoutNote';
import TableMenuPayout from './TableMenuPayout';
import { useFetchPayout } from '../../../../hooks/useFetchPayout';
import { useState } from 'react';
import Loading from '../../../../components/Loading';

const PayoutContent = () => {
    const { loading, data } = useFetchPayout();
    const [showPayoutNote] = useState(false);

    return (
        <div className={styles.container}>
            <MenuPayoutTop />

            <div className={styles['table-wrapper']}>
                {loading ? <Loading /> : <TableMenuPayout data={data} />}
            </div>

            {showPayoutNote && <MenuPayoutNote />}
        </div>
    );
};

export default PayoutContent;
