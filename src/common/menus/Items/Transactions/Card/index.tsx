import { forwardRef, useRef, useState } from 'react';
import CardMaximize from './CardMaximize';
import CardMinimize from './CardMinimize';

import styles from './styles.module.scss';
import stylesMaximize from './CardMaximize/styles.module.scss';
import { Pcode, Transaction } from '../../../../../types';

export interface ITransactionCardProps {
    data: Transaction<Pcode>;
}

const Card = forwardRef<HTMLDivElement, ITransactionCardProps>(({ data }, cardRef) => {
    const contentRef = useRef<HTMLDivElement>(null);

    const [expand, setExpand] = useState(false);
    const [hide, setHide] = useState(false);

    const handleClick = () => {
        if (expand) {
            // close
            contentRef.current?.classList.remove(stylesMaximize.open);
            contentRef.current?.classList.add(stylesMaximize.close);
        } else {
            // open
            contentRef.current?.classList.remove(stylesMaximize.close);
            contentRef.current?.classList.add(stylesMaximize.open);
            setExpand(true);
        }

        setHide((prev) => !prev);
    };

    return (
        <div
            className={`${styles.card} ${hide ? ` ${styles.expand}` : ''}`}
            onClick={handleClick}
            ref={cardRef}
        >
            <CardMinimize data={data} />
            <CardMaximize data={data} setExpand={setExpand} ref={contentRef} />
        </div>
    );
});

export default Card;
