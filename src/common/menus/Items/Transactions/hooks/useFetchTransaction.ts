import { useCallback, useEffect, useRef, useState } from 'react';
import { Pcode, Transaction } from '../../../../../types';
import { getTransaction } from '../../../../../services/api/transaction';

interface Params {
    date: 'all' | 'today' | 'before';
}

export const useFetchTransaction = ({ date }: Params) => {
    const [transactionData, setTransactionData] = useState<Array<Transaction<Pcode>>>([]);
    const [totalPage, setTotalPage] = useState(0);

    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const observer = useRef<IntersectionObserver | null>(null);
    const lastItemRef = useCallback(
        (node: HTMLDivElement | null) => {
            if (isLoading) return;

            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setPage((prevPage) => prevPage + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [isLoading, hasMore],
    );

    useEffect(() => {
        let ignore = false;

        const fetchTransaction = async (page: number, date: 'all' | 'today' | 'before') => {
            try {
                setIsLoading(true);
                const response = await getTransaction(page, date);

                if (!ignore) {
                    console.log('transaction data', response);

                    if ('data' in response && 'pagination' in response) {
                        setIsLoading(false);

                        setTransactionData((prev) => [...prev, ...response.data]);
                        setTotalPage(response.pagination.total_pages);
                        setHasMore(response.data.length > 0);
                    } else {
                        throw new Error(
                            "Invalid response format: 'data' or 'pagination' property is missing",
                        );
                    }
                }
            } catch (error: any) {
                console.log(error);
                setIsLoading(false);
            }
        };

        fetchTransaction(page, date);

        return () => {
            ignore = true;
        };
    }, [page, date]);

    return {
        page,
        setPage,
        transactionData,
        totalPage,
        isLoading,
        lastItemRef,
    };
};
