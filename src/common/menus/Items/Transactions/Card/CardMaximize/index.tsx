import BettingTable from '../BettingTable';
import styles from './styles.module.scss';
import { ITransactionCardProps } from '..';
import NoResult from '../NoResult';
import { TransactionHelper } from '../../../../../utils/TransactionHelper';
import ResultDTWildTransaction from '../../../../../../game/components/ResultDTWildTransaction';

interface IProps extends ITransactionCardProps {
    expand: boolean;
}

const CardMaximize = ({ data, expand }: IProps) => {
    let element;
    if (!data.detail_result || Array.isArray(data.detail_result)) {
        element = <NoResult />;
    } else if (TransactionHelper.isDragonTigerWild(data)) {
        element = <ResultDTWildTransaction data={data} />;
    }

    return (
        <div className={`${styles.maximize}${expand ? ` ${styles.open}` : ''}`}>
            <div className={styles['maximize-content']}>
                <div className={styles['result-wrapper']}>{element}</div>

                <BettingTable data={data} />
            </div>
        </div>
    );
};

export default CardMaximize;
