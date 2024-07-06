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

    return (
        <div className={styles.result}>
            <SVGResult24D value={Number(detail_result.angka)} />

            {detail_result.thunder?.data_thunder?.prize_thunder && (
                <div className={styles.multiplier}>
                    <span className={styles['multiplier-text']}>
                        {detail_result.thunder.data_thunder.prize_thunder}x
                    </span>
                </div>
            )}
        </div>
    );
};

export default Result24DTransaction;
