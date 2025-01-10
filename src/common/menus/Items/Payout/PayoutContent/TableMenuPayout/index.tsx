import { useTranslation } from 'react-i18next';
import { Fragment } from 'react/jsx-runtime';
import { useAppSelector } from '../../../../../../store/hooks';
import { selectCurrency, selectShowCurrency } from '../../../../../../store/slice/playerSlice';
import { PayoutData } from '../../../../../../types';
import LabelTranslate from '../../../../../components/LabelTranslate';
import { getBasePcode } from '../../../../../utils/GameHelper';
import { formatCurrency, formatNumber } from '../../../../../utils/StringHelper';
import styles from './styles.module.scss';

interface IProps {
    data: PayoutData[];
}

const TableMenuPayout = ({ data }: IProps) => {
    const { i18n } = useTranslation();

    const currency = useAppSelector(selectCurrency);
    const showCurrency = useAppSelector(selectShowCurrency);

    const basePcode = getBasePcode();

    return (
        <div className={styles['"payout-table-container"']}>
            <table className={styles['payout-table']}>
                <thead>
                    <tr>
                        <th className="text-left">
                            <LabelTranslate value="bet" className="text-nowrap" />
                        </th>
                        <th>
                            <LabelTranslate value="limit-bet" className="text-nowrap" />
                        </th>
                        <th>
                            <LabelTranslate value="payout" className="text-nowrap" />
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
                                        className="text-nowrap text-capitalize"
                                    />
                                </td>
                                <td className="text-center text-cyan text-nowrap">
                                    {formatCurrency(
                                        item.min,
                                        currency,
                                        i18n.language,
                                        !showCurrency,
                                    )}{' '}
                                    - {formatNumber(item.max, i18n.language)}
                                </td>
                                <td
                                    className={`${'text-center'}${item.payout ? '' : ' ' + styles.shading}`}
                                >
                                    {typeof item.payout === 'number'
                                        ? `${formatNumber(item.payout, i18n.language)}:1`
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
                                                className="text-nowrap text-capitalize"
                                            />
                                        </td>
                                        <td className="text-center text-cyan"></td>
                                        <td className="text-center">
                                            {typeof child.payout === 'number'
                                                ? `${formatNumber(child.payout, i18n.language)}:1`
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
