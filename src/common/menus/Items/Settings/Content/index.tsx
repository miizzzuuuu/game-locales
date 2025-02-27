import Separator from '../../../../components/Separator';
import AutoRebet from './ContentItem/AutoRebet';
import GameEffect from './ContentItem/GameEffect';
import GameEffectVolume from './ContentItem/GameEffectVolume';

import StreamingQuality from './ContentItem/StreamingQuality';
import StreamingSound from './ContentItem/StreamingSound';
import StreamingVideo from './ContentItem/StreamingVideo';
import StreamingVolume from './ContentItem/StreamingVolume';
import SettingLanguage from './ContentItem/SettingLanguage';

import styles from './styles.module.scss';
import GameMusic from './ContentItem/GameMusic';
import GameMusicVolume from './ContentItem/GameMusicVolume';

const Content = () => {
    return (
        <div className={styles['menu-settings']}>
            <StreamingVideo />
            <StreamingQuality />

            <Separator />

            <StreamingSound />
            <StreamingVolume />

            <Separator />

            <GameMusic />
            <GameMusicVolume />

            <Separator />

            <GameEffect />
            <GameEffectVolume />

            <Separator />

            <AutoRebet />

            <Separator />

            <SettingLanguage />
        </div>
    );
};

export default Content;
