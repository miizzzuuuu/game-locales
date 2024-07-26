import ContentEmpty from '../ContentEmpty';
import { useFetchTransaction } from '../hooks/useFetchTransaction';
import LabelTranslate from '../../../../components/LabelTranslate';
import { MenuHistoryList } from '../History/menuhistory';

const Today = () => {
    const { transactionData, isLoading } = useFetchTransaction({ date: 'today' });

    return (
        <div>
            {transactionData.length === 0 && !isLoading && (
                <ContentEmpty message={<LabelTranslate value="no-transactions" />} />
            )}

            {
                transactionData.length > 0 && <MenuHistoryList date={transactionData[0] ? transactionData[0].tglbel : ""} tab={"today"} data={transactionData as any} isLandscape={false} />
            }

            {isLoading && <ContentEmpty message="Loading..." />}
        </div>
    );
};

export default Today;
