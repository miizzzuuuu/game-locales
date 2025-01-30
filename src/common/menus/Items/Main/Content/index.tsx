import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { selectEventIdnliveList } from '../../../../../store/slice/eventIdnliveSlice';
import {
    toggleMenuHTP,
    toggleMenuHistory,
    toggleMenuMain,
    toggleMenuPayout,
    toggleMenuSettings,
} from '../../../../../store/slice/menuSlice';
import { sendMessageToParent } from '../../../../utils/FunctionHelper';
import BackToLobby from '../BackToLobby';
import Item from '../Item';
import SVGIconHistory from '../SVG/SVGIconHistory';
import SVGIconHowToPlay from '../SVG/SVGIconHowToPlay';
import SVGIconPayout from '../SVG/SVGIconPayout';
import SVGIconPromotion from '../SVG/SVGIconPromotion';
import SVGIconSettings from '../SVG/SVGIconSettings';
import styles from './styles.module.scss';

const Content = () => {
    const dispatch = useAppDispatch();

    const eventsIdnliveList = useAppSelector(selectEventIdnliveList);

    return (
        <div className={styles.main}>
            <BackToLobby />

            <Item
                icon={<SVGIconHistory />}
                text="history"
                onClick={() => dispatch(toggleMenuHistory())}
            />
            <Item
                icon={<SVGIconHowToPlay />}
                text="how-to-play"
                onClick={() => dispatch(toggleMenuHTP())}
            />
            <Item
                icon={<SVGIconPayout />}
                text="payout-and-limit"
                onClick={() => dispatch(toggleMenuPayout())}
            />
            {eventsIdnliveList.length > 0 && (
                <Item
                    icon={<SVGIconPromotion />}
                    text="promotion"
                    onClick={() => {
                        sendMessageToParent({
                            source: 'LIVE_GAME',
                            type: 'OPEN_MODAL_EVENT',
                            payload: eventsIdnliveList[0],
                        });

                        dispatch(toggleMenuMain());
                    }}
                />
            )}
            <Item
                icon={<SVGIconSettings />}
                text="settings"
                onClick={() => dispatch(toggleMenuSettings())}
            />
        </div>
    );
};

export default Content;
