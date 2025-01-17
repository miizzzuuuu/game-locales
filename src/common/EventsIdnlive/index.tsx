import { useAppSelector } from '../../store/hooks';
import { selectEventIdnliveList } from '../../store/slice/eventIdnliveSlice';
import SantaCashBox from './SantaCashBox';

const EventsIdnlive = () => {
    const eventsIdnliveList = useAppSelector(selectEventIdnliveList);

    return (
        <>
            {eventsIdnliveList.map((event) => {
                if (event.name === 'santa-cash-box') {
                    return <SantaCashBox key={event.name} event={event} />;
                }

                return null;
            })}
        </>
    );
};

export default EventsIdnlive;
