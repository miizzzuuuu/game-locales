import {  useState, useTransition } from 'react';
import styles from './styles.module.scss';
import Tabs from '../Tabs';
import Today from '../Today';
import Previous from '../Previous';


export type TabTransactions = 'today' | 'previous';

const Content = () => {
    const [_, startTransition] = useTransition();
    const [tab, setTab] = useState<TabTransactions>('today');

    function selectTab(nextTab: TabTransactions) {
        startTransition(() => {
            setTab(nextTab);
        });
    }


    return (
        <>
            <Tabs activeTab={tab} setActiveTab={selectTab} />

            <div className={styles['menu-history-main']}>
                {
                    <>
                        {tab === 'today' && <Today />}
                        {/* @ts-ignore */}
                        {tab === 'previous' &&  <Previous />}
                    </>

                }

            </div>
        </>
    );
};

export default Content;
