import { forwardRef } from 'react';
import ItemWinner from '../ItemWinner';
import styles from './styles.module.scss';
import { TopWinnerData } from '../../../../types';

interface IProps {
    data: TopWinnerData['data'];
    index: number;
}

const Content = forwardRef<HTMLDivElement, IProps>(({ data, index }, ref) => {
    return (
        <div className={`${styles.content} no-scrollbar`}>
            <div
                className={styles.wrapper}
                style={{ transform: `translate3d(0, ${-index * 100}%, 0)` }}
                ref={ref}
            >
                {data.map((winner, idx) => (
                    <ItemWinner
                        key={idx}
                        isFirst={idx === 0}
                        name={winner.username}
                        value={winner.totalWin}
                    />
                ))}
            </div>
        </div>
    );
});

export default Content;
