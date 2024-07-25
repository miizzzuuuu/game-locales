import { forwardRef } from 'react';
import ItemWinner from '../ItemWinner';
import styles from './styles.module.scss';
import { TopWinnerData } from '../../../../types';

interface IProps {
    data: TopWinnerData['data'];
}

const Content = forwardRef<HTMLDivElement, IProps>(({ data }, ref) => {
    return (
        <div className={`${styles.content} no-scrollbar`} ref={ref}>
            {data.map((winner, idx) => (
                <ItemWinner
                    key={idx}
                    isFirst={idx === 0}
                    name={winner.username}
                    value={winner.totalWin}
                />
            ))}
        </div>
    );
});

export default Content;
