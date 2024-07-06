import { Fragment } from 'react';
import CardContainer from '../CardContainer';
import Card from '../Card';

import styles from './styles.module.scss';

import { useFetchTransaction } from '../hooks/useFetchTransaction';
import ContentEmpty from '../ContentEmpty';
import { useAppSelector } from '../../../../../store/hooks';
import { selectLanguage } from '../../../../../store/slice/settingsSlice';
import { TransactionHelper } from '../../../../utils/TransactionHelper';
import LabelTranslate from '../../../../components/LabelTranslate';
import { LangHelper } from '../../../../utils/LangHelper';

const Previous = () => {
    const { transactionData, isLoading, lastItemRef } = useFetchTransaction({ date: 'before' });
    const groupTransaction = TransactionHelper.groupTransactionsByDate(transactionData);

    const lang = useAppSelector(selectLanguage);

    return (
        <div className={styles.container}>
            {transactionData.length === 0 && !isLoading ? (
                <ContentEmpty message={<LabelTranslate value="no-transactions" />} />
            ) : (
                Object.keys(groupTransaction).map((key, indexDate) => {
                    const lastDate = indexDate === Object.keys(groupTransaction).length - 1;

                    return (
                        <Fragment key={key}>
                            <div className={styles.date}>
                                {LangHelper.formatDateByLocale(key, lang, 'long')}
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
                        </Fragment>
                    );
                })
            )}

            {isLoading && <ContentEmpty message="Loading..." />}
        </div>
    );
};

export default Previous;
