import { memo } from 'react';

interface IProps {
    data: string;
}

const BettingItemTransaction = ({ data }: IProps) => {
    const textData = () => {
        const indexWild = data.indexOf('wild');
        if (indexWild >= 0) {
            return data.slice(0, indexWild) + ' wild';
        }

        const indexPair = data.indexOf('pair');
        if (indexPair >= 0) {
            return data.slice(0, indexPair) + ' pair';
        }

        return data;
    };

    return <span style={{ textTransform: 'capitalize' }}>{textData()}</span>;
};

const MemoizedMemoizeBettingItemTransaction = memo(BettingItemTransaction);
export default MemoizedMemoizeBettingItemTransaction;
