import { lazy, Suspense } from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectEventIdnliveList } from '../../store/slice/eventIdnliveSlice';

const LuckyAngpao = lazy(() => import('./LuckyAngpao'));
const SantaCashBox = lazy(() => import('./SantaCashBox'));

const EventsIdnlive = () => {
    const eventsIdnliveList = useAppSelector(selectEventIdnliveList);

    return (
        <>
            {eventsIdnliveList.map((event) => {
                if (event.name === 'santa-cash-box') {
                    return (
                        <Suspense key={event.name}>
                            <SantaCashBox event={event} />
                        </Suspense>
                    );
                }

                if (event.name === 'lucky-angpao') {
                    return (
                        <Suspense key={event.name}>
                            <LuckyAngpao event={event} />
                        </Suspense>
                    );
                }

                return null;
            })}
        </>
    );
};

export default EventsIdnlive;
