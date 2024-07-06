import { useAppDispatch } from '../../../../../store/hooks';
import {
    toggleMenuHTP,
    toggleMenuHistory,
    toggleMenuPayout,
    toggleMenuSettings,
} from '../../../../../store/slice/menuSlice';
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
            <Item icon={<SVGIconPromotion />} text="promotion" />
            <Item
                icon={<SVGIconSettings />}
                text="settings"
                onClick={() => dispatch(toggleMenuSettings())}
            />
        </div>
    );
};

export default Content;
