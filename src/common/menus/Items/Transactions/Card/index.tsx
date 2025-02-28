import { useState } from 'react';
import { Pcode, Transaction } from '../../../../../types';
import CardMaximize from './CardMaximize';
import CardMinimize from './CardMinimize';
import styles from './styles.module.scss';

export interface ITransactionCardProps {
    data: Transaction<Pcode>;
}

export type IProps = ITransactionCardProps & {
    ref?: (node: HTMLDivElement | null) => void;
};

const Card = ({ data, ref }: IProps) => {
    const [expand, setExpand] = useState(false);

    return (
        <div
            className={`${styles.card} ${expand ? ` ${styles.expand}` : ''}`}
            onClick={() => setExpand((prev) => !prev)}
            ref={ref}
        >
            <CardMinimize data={data} />
            <CardMaximize data={data} expand={expand} />
        </div>
    );
};

Card.displayName = 'Card';

export default Card;
