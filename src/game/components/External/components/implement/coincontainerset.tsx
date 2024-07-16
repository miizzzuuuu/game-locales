import React from 'react';
import { useGetChipBet } from '../../../../../common/hooks/useGetChipBet';
import { Bet } from '../../../../../types';
import TableBetChip from '../../../../../common/components/ChipBet';

interface CoinContainerParameter {
    className?: string;
    bet?: Bet | undefined;
    symbol?: string;
    style?: React.CSSProperties | undefined;
    children?: React.ReactNode | null;
}

export const CoinContainer: React.FC<CoinContainerParameter> = ({
    className = '',
    bet,
    symbol = 'default',
    style = undefined,
    children = [],
}) => {
    const { chip, color } = useGetChipBet(bet == undefined ? { button: '', group: '' } : bet);

    return (
        <div key={symbol} className={className} style={style}>
            {children}
            {chip > 0 && (
                <TableBetChip
                    value={chip}
                    color={color}
                    style={{ width: '100%', height: '100%' }}
                    isForTable={true}
                />
            )}
        </div>
    );
};
