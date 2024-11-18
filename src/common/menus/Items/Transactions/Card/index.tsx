import { forwardRef, useState } from 'react';
import { Pcode, Transaction } from '../../../../../types';
import CardMaximize from './CardMaximize';
import CardMinimize from './CardMinimize';
import styles from './styles.module.scss';

export interface ITransactionCardProps {
    data: Transaction<Pcode>;
}

const Card = forwardRef<HTMLDivElement, ITransactionCardProps>(({ data }, cardRef) => {
    const [expand, setExpand] = useState(false);

    return (
        <div
            className={`${styles.card} ${expand ? ` ${styles.expand}` : ''}`}
            onClick={() => setExpand((prev) => !prev)}
            ref={cardRef}
        >
            <CardMinimize data={data} />
            <CardMaximize data={data} expand={expand} />
        </div>
    );
});

Card.displayName = 'Card';

export default Card;
