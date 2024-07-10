import { useEffect, useState } from 'react';
import { PayoutData } from '../../types';
import { getGamePayout } from '../../services/api/gamePayout';

export const useFetchPayout = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<PayoutData[]>([]);

    useEffect(() => {
        let ignore = false;

        const fetchPlayerSettings = async () => {
            try {
                setLoading(true);
                const respData = await getGamePayout();

                if (!ignore) {
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

    return { loading, data };
};
