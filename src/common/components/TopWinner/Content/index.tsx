import { useRef } from 'react';
import { useTopWinner } from '../hooks/useTopWinner';
import ItemWinner from '../ItemWinner';
import styles from './styles.module.scss';

const Content = () => {
    const winnerContentRef = useRef<HTMLDivElement>(null);

    const { winnerData } = useTopWinner({ ref: winnerContentRef });

    return (
        <div className={`${styles.content} no-scrollbar`} ref={winnerContentRef}>
            {winnerData.map((winner, idx) => (
                <ItemWinner
                    key={idx}
                    isFirst={idx === 0}
                    name={winner.username}
                    value={winner.totalWin}
                />
            ))}
        </div>
    );
};

export default Content;
