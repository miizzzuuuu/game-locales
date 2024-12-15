import { useEffect, useState } from 'react';
import { getEventsList } from '../../services/api/eventIdnlive';
import { useAppDispatch } from '../../store/hooks';
import { setEventsList } from '../../store/slice/eventIdnliveSlice';

function useFetchEventList() {
    const dispatch = useAppDispatch();

    const [finish, setFinish] = useState(false);

    useEffect(() => {
        let ignore = false;

        const fetchEvensIdnliveList = async () => {
            try {
                const data = await getEventsList();

                if (!ignore) {
                    const eventRunning = data.filter((events) => events.status === 'running');
                    if (eventRunning.length > 0) {
                        dispatch(setEventsList(eventRunning));
                    }
                }
            } catch (error) {
                console.log('fetch events list', error);
            } finally {
                if (!ignore) {
                    setFinish(true);
                }
            }
        };

        void fetchEvensIdnliveList();

        return () => {
            ignore = true;
        };
    }, [dispatch]);

    return { finish };
}

export { useFetchEventList };
