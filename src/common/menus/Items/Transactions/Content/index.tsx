import { useEffect, useState, useTransition } from 'react';
import styles from './styles.module.scss';
import Tabs from '../Tabs';
import Today from '../Today';
import Previous from '../Previous';
import { MenuHistoryList, Transaction } from '../History/menuhistory';
import { TransactionHelper } from '../../../../utils/TransactionHelper';
import { GameHelper } from '../../../../utils/GameHelper';
function getBefore() {
    const t = new Date
        , n = t.getFullYear()
        , r = (t.getMonth() + 1).toString().padStart(2, "0")
        , i = t.getDate().toString().padStart(2, "0");
    return `${n}-${r}-${Number(i) - 1}`
}

export type TabTransactions = 'today' | 'previous';

const Content = () => {
    const [_, startTransition] = useTransition();
    const [tab, setTab] = useState<TabTransactions>('today');

    function selectTab(nextTab: TabTransactions) {
        startTransition(() => {
            setTab(nextTab);
        });
    }

    const [transaction, setTransData] = useState(new Array<Transaction>());
    async function callTransactions() {
        const f = `&date=${tab == "today" ? "today" : "before"}`
            , call = await fetch(`https://dev.menangtoto.pw/v2/transactions/${GameHelper.pcode}?page=1${f}`, {
                method: "GET",
                headers: {},
                body: null
            });

        if (!call.ok) {
            throw new Error("Error can't reach the server");
        }
        const data = await call.json();
        if (tab == "previous") {
            const formated = TransactionHelper.groupTransactionsByDate(data.data) as any;
            console.log(formated);
            setTransData(formated);
        } else
            setTransData(data.data);
    }

    useEffect(() => {
        callTransactions();
    }, []);

    useEffect(() => {
        async function callTransactions() {
            const f = `&date=${tab == "today" ? "today" : "before"}`
                , call = await fetch(`https://dev.menangtoto.pw/v2/transactions/${GameHelper.pcode}?page=1${f}`, {
                    method: "GET",
                    headers: {},
                    body: null
                });

            if (!call.ok) {
                throw new Error("Error can't reach the server");
            }
            const data = await call.json();
            if (tab == "previous") {
                const formated = TransactionHelper.groupTransactionsByDate(data.data) as any;
                console.log(formated);
                setTransData(formated);
            } else
                setTransData(data.data);
        }
        callTransactions();
    }, [tab]);

    return (
        <>
            <Tabs activeTab={tab} setActiveTab={selectTab} />

            <div className={styles['menu-history-main']}>
                {
                    transaction ? <>
                        {tab === 'today' && <MenuHistoryList date={transaction[0] ? transaction[0].tglbel : ""} tab={"today"} data={transaction} isLandscape={false} />}
                        {/* @ts-ignore */}
                        {tab === 'previous' && Object.keys(transaction).length && Object.keys(transaction).map((key) => <MenuHistoryList date={transaction[key][0] && transaction[key][0].tglbel} tab={"before"} data={transaction[key]} isLandscape={false} />)}
                    </>
                        : <></>
                }

            </div>
        </>
    );
};

export default Content;
