import CardContainer from '../CardContainer';
import Card from '../Card';
import ContentEmpty from '../ContentEmpty';
import { useFetchTransaction } from '../hooks/useFetchTransaction';
import LabelTranslate from '../../../../components/LabelTranslate';

const Today = () => {
    const { transactionData, isLoading, lastItemRef } = useFetchTransaction({ date: 'today' });

    return (
        <div>
            {transactionData.length === 0 && !isLoading && (
                <ContentEmpty message={<LabelTranslate value="no-transactions" />} />
            )}

            {transactionData.length > 0 && (
                <CardContainer>
                    {transactionData.map((t, index) => (
                        <Card
                            ref={index === transactionData.length - 1 ? lastItemRef : undefined}
                            key={`${index}-${t.pcode}-${t.periode}`}
                            data={t}
                        />
                    ))}
                </CardContainer>
            )}

            {isLoading && <ContentEmpty message="Loading..." />}
        </div>
    );
};

export default Today;
