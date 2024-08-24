import { Fragment } from 'react/jsx-runtime';
import LabelTranslate from '../../../../../components/LabelTranslate';
import { StringHelper } from '../../../../../utils/StringHelper';
import { useAppSelector } from '../../../../../../store/hooks';
import { selectCurrency } from '../../../../../../store/slice/playerSlice';
import { PayoutData } from '../../../../../../types';

import styles from './styles.module.scss';
import { GameHelper } from '../../../../../utils/GameHelper';

interface IProps {
    data: PayoutData[];
}

const TableMenuPayout = ({ data }: IProps) => {
    const currency = useAppSelector(selectCurrency);

    const basePcode = GameHelper.getBasePcode();

    const formatPayout = (value: number) => {
        return StringHelper.formatNumber(value);
    };

    return (
        <div className={styles['"payout-table-container"']}>
            <table className={styles['payout-table']}>
                <thead>
                    <tr>
                        <th className="text-left">
                            <LabelTranslate value="bet" />
                        </th>
                        <th>
                            <LabelTranslate value="limit-bet" />
                        </th>
                        <th>
                            <LabelTranslate value="payout" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, idx) => (
                        <Fragment key={idx}>
                            <tr>
                                <td>
                                    <LabelTranslate
                                        value={item.name}
                                        keyLang={basePcode}
                                        style={{ textTransform: 'capitalize' }}
                                    />
                                </td>
                                <td className="text-center text-cyan">
                                    {StringHelper.formatCurrency(item.min, currency)} -{' '}
                                    {StringHelper.formatNumber(item.max)}
                                </td>
                                <td
                                    className={`${'text-center'}${item.payout ? '' : ' ' + styles.shading}`}
                                >
                                    {typeof item.payout === 'number'
                                        ? `${formatPayout(item.payout)}:1`
                                        : item.payout}
                                </td>
                            </tr>
                            {item.items.length > 0 &&
                                item.items.map((child, idxChild) => (
                                    <tr key={`${idx}-${idxChild}`} className={styles['sub-item']}>
                                        <td className={styles['bet-child']}>
                                            <LabelTranslate
                                                value={child.name}
                                                keyLang={basePcode}
                                                style={{ textTransform: 'capitalize' }}
                                            />
                                        </td>
                                        <td className="text-center text-cyan"></td>
                                        <td className="text-center">
                                            {typeof child.payout === 'number'
                                                ? `${formatPayout(child.payout)}:1`
                                                : child.payout}
                                        </td>
                                    </tr>
                                ))}
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableMenuPayout;
