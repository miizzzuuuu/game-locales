import { useAppSelector } from '../../../store/hooks';
import { selectEventIdnliveList } from '../../../store/slice/eventIdnliveSlice';
import ButtonAction from '../../components/ButtonAction';
import SVGIconPromotion from '../../menus/Items/Main/SVG/SVGIconPromotion';
import { sendMessageToParent } from '../../utils/FunctionHelper';

const ButtonPromotion = () => {
    const eventsIdnliveList = useAppSelector(selectEventIdnliveList);

    return (
        <ButtonAction
            icon={<SVGIconPromotion />}
            onClick={() => {
                sendMessageToParent({
                    source: 'LIVE_GAME',
                    type: 'OPEN_MODAL_EVENT',
                    payload: eventsIdnliveList[0],
                });
            }}
        />
    );
};

export default ButtonPromotion;
