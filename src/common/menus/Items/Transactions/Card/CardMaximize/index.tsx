import { AnimationEventHandler, forwardRef } from 'react';
import BettingTable from '../BettingTable';
import styles from './styles.module.scss';
import { ITransactionCardProps } from '..';
import NoResult from '../NoResult';
import { TransactionHelper } from '../../../../../utils/TransactionHelper';
import ResultDTWildTransaction from '../../../../../../game/components/ResultDTWildTransaction';

interface IProps extends ITransactionCardProps {
    setExpand: (value: boolean) => void;
}

const CardMaximize = forwardRef<HTMLDivElement, IProps>(({ data, setExpand }, ref) => {
    let element;
    if (!data.detail_result || Array.isArray(data.detail_result)) {
        element = <NoResult />;
    } else if (TransactionHelper.isDragonTigerWild(data)) {
        element = <ResultDTWildTransaction data={data} />;
    }

    const handleAnimationEnd: AnimationEventHandler<HTMLDivElement> = (e) => {
        if (e.animationName.indexOf('accordion-history-close') > 0) {
            setExpand(false);
        }
    };

    return (
        <div className={`${styles.maximize}`} ref={ref} onAnimationEnd={handleAnimationEnd}>
            <div className={styles['maximize-content']}>
                <div className={styles['result-wrapper']}>{element}</div>

                <BettingTable data={data} />
            </div>
        </div>
    );
});

export default CardMaximize;
