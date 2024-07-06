import styles from './styles.module.scss';
import MenuPayoutTop from './MenuPayoutTop';
import MenuPayoutNote from './MenuPayoutNote';
import { useEffect, useState } from 'react';
import { getGamePayout } from '../../../services/api/gamePayout';
import { PayoutData } from '../../../types';
import TableMenuPayout from './TableMenuPayout';

const PayoutContent = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<PayoutData[]>([]);

    useEffect(() => {
        let ignore = false;

        const fetchPlayerSettings = async () => {
            try {
                setLoading(true);
                const respData = await getGamePayout();

                if (ignore) {
                    console.log('pyaout', respData);

                    setData(respData);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlayerSettings();

        return () => {
            ignore = true;
        };
    }, []);

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
