import { Pcode24D, Transaction } from '../../../types';
import SVGResult24D from './SVG/SVGResult24D';
import styles from './styles.module.scss';

interface IProps {
    data: Transaction<Pcode24D>;
}

const Result24DTransaction = ({ data }: IProps) => {
    const { detail_result } = data;

    if (!detail_result || Array.isArray(detail_result)) {
        return null;
    }

    const betWin = data.detail_betting.filter((data) => {
        data.type === 'n' && data.win_amount > 0;
    });

    return (
        <div className={styles.result}>
            <SVGResult24D value={Number(detail_result.angka)} />

            {betWin.length > 0 && (
                <div className={styles.multiplier}>
                    <span className={styles['multiplier-text']}>{betWin[0].prize}x</span>
                </div>
            )}
        </div>
    );
};

export default Result24DTransaction;
