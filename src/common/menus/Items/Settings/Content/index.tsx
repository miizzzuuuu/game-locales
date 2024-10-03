import Separator from '../Separator';
import AutoRebet from './ContentItem/AutoRebet';
import GameSound from './ContentItem/GameSound';
import GameVolume from './ContentItem/GameVolume';

import StreamingQuality from './ContentItem/StreamingQuality';
import StreamingSound from './ContentItem/StreamingSound';
import StreamingVideo from './ContentItem/StreamingVideo';
import StreamingVolume from './ContentItem/StreamingVolume';
import SettingLanguage from './ContentItem/SettingLanguage';

import styles from './styles.module.scss';

const Content = () => {
    return (
        <div className={styles['menu-settings']}>
            <StreamingVideo />
            <StreamingQuality />

            <Separator />

            <StreamingSound />
            <StreamingVolume />

            <Separator />

            <GameSound />
            <GameVolume />

            <Separator />

            <AutoRebet />

            <Separator />

            <SettingLanguage />
        </div>
    );
};

export default Content;
