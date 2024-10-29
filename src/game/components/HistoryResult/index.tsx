import { useRef } from 'react';
import { useDragToScroll } from '../../../common/hooks/useDragToScroll';
import { historyResultDummy } from './data';
import Item from './Item';
import styles from './styles.module.scss';

const HistoryResult = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useDragToScroll({ slider: containerRef });

    return (
        <div className={`${styles.wrapper} no-scrollbar`} ref={containerRef}>
            {historyResultDummy.map((data, idx) => {
                return <Item key={idx} data={data} />;
            })}
        </div>
    );
};

export default HistoryResult;
