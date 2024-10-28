import { ITransactionCardProps } from '..';
import ResultDTWildTransaction from '../../../../../../game/components/ResultDTWildTransaction';
import { isDragonTigerWild } from '../../../../../utils/TransactionHelper';
import BettingTable from '../BettingTable';
import NoResult from '../NoResult';
import styles from './styles.module.scss';

interface IProps extends ITransactionCardProps {
    expand: boolean;
}

const CardMaximize = ({ data, expand }: IProps) => {
    let element;
    if (!data.detail_result || Array.isArray(data.detail_result)) {
        element = <NoResult />;
    } else if (isDragonTigerWild(data)) {
        element = <ResultDTWildTransaction data={data} />;
    }

    return (
        <div className={`${styles.maximize}${expand ? ` ${styles.open}` : ''}`}>
            <div className={styles['maximize-content']}>
                {expand && <div className={styles['result-wrapper']}>{element}</div>}

                <BettingTable data={data} />
            </div>
        </div>
    );
};

export default CardMaximize;
