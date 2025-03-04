import { useState, useTransition } from 'react';
import HowToPlayContent from '../../../../../game/components/HowToPlayContent';
import Features from '../../../../components/HowToPlay/Features';
import Tabs from '../Tabs';
import styles from './styles.module.scss';

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
                {tab === 'features' && <Features />}
            </div>
        </>
    );
};

export default Content;
