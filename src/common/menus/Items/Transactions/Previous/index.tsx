import styles from './styles.module.scss';
import { useFetchTransaction } from '../hooks/useFetchTransaction';
import ContentEmpty from '../ContentEmpty';
import { TransactionHelper } from '../../../../utils/TransactionHelper';
import LabelTranslate from '../../../../components/LabelTranslate';
import { MenuHistoryList } from '../History/menuhistory';

const Previous = () => {
    const { transactionData, isLoading } = useFetchTransaction({ date: 'before' });
    const groupTransaction = TransactionHelper.groupTransactionsByDate(transactionData);


    return (
        <div className={styles.container}>
            {transactionData.length === 0 && !isLoading ? (
                <ContentEmpty message={<LabelTranslate value="no-transactions" />} />
            ) : (
                Object.keys(groupTransaction).map((key) => <MenuHistoryList date={groupTransaction[key][0] && groupTransaction[key][0].tglbel} tab={"before"} data={groupTransaction[key] as any} isLandscape={false} />)
                
            )}

            {isLoading && <ContentEmpty message="Loading..." />}
        </div>
    );
};

export default Previous;
