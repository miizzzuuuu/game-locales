import CardContainer from '../CardContainer';
import Card from '../Card';

import styles from './styles.module.scss';

import { useFetchTransaction } from '../hooks/useFetchTransaction';
import ContentEmpty from '../ContentEmpty';
import { TransactionHelper } from '../../../../utils/TransactionHelper';
import LabelTranslate from '../../../../components/LabelTranslate';
import { StringHelper } from '../../../../utils/StringHelper';
import { useTranslation } from 'react-i18next';

const Previous = () => {
    const { i18n } = useTranslation();

    const { transactionData, isLoading, lastItemRef } = useFetchTransaction({ date: 'before' });
    const groupTransaction = TransactionHelper.groupTransactionsByDate(transactionData);

    return (
        <div className={styles.container}>
            {transactionData.length === 0 && !isLoading ? (
                <ContentEmpty message={<LabelTranslate value="no-transactions" />} />
            ) : (
                Object.keys(groupTransaction).map((key, indexDate) => {
                    const lastDate = indexDate === Object.keys(groupTransaction).length - 1;

                    return (
                        <div key={key} className={styles.wrapper}>
                            <div className={styles.date}>
                                {StringHelper.formatDateByLocale(
                                    key,
                                    'long',
                                    undefined,
                                    i18n.language,
                                )}
                            </div>

                            <CardContainer>
                                {groupTransaction[key].map((t, index) => (
                                    <Card
                                        key={`${index}-${t.pcode}-${t.periode}`}
                                        data={t}
                                        ref={
                                            lastDate && index === groupTransaction[key].length - 1
                                                ? lastItemRef
                                                : undefined
                                        }
                                    />
                                ))}
                            </CardContainer>
                        </div>
                    );
                })
            )}

            {isLoading && <ContentEmpty message="Loading..." />}
        </div>
    );
};

export default Previous;
