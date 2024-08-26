import { useState, useTransition } from 'react';
import styles from './styles.module.scss';
import Tabs from '../Tabs';
import HowToPlayContent from '../../../../../game/components/HowToPlayContent';
import FeatureContent from '../FeatureContent';

export type TabHowToPlay = 'game' | 'features';

const Content = () => {
    const [_, startTransition] = useTransition();
    const [tab, setTab] = useState<TabHowToPlay>('game');

    function selectTab(nextTab: TabHowToPlay) {
        startTransition(() => {
            setTab(nextTab);
        });
    }

    return (
        <>
            <Tabs activeTab={tab} setActiveTab={selectTab} />

            <div className={styles['htp-main']}>
                {tab === 'game' && <HowToPlayContent />}
                {tab === 'features' && <FeatureContent />}
            </div>
        </>
    );
};

export default Content;
