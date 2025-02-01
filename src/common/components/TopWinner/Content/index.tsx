import { RefObject } from 'react';
import { TopWinnerData } from '../../../../types';
import ItemWinner from '../ItemWinner';
import styles from './styles.module.scss';

interface IProps {
    data: TopWinnerData['data'];
    index: number;
    ref: RefObject<HTMLDivElement | null>;
}

const Content = ({ data, index, ref }: IProps) => {
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
};

Content.displayName = 'Content';

export default Content;
