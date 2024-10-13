import LabelTranslate from '../../../../../../common/components/LabelTranslate';
import { P } from '../../../../../../common/menus/Items/HowToPlay/Components';
import styles from './styles.module.scss';


interface IHowtoplayTablebet {
    data: string[]
}

const SideBetTable = ({ data }: IHowtoplayTablebet) => {
    const keyLang = 'htp.side-bet';

    return (
        <div className={styles['table-wrapper']}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>
                            <LabelTranslate keyLang={keyLang} value="title" className="text-capitalize" /></th>
                        <th>
                            <LabelTranslate keyLang={keyLang} value="description" className="text-capitalize" />
                        </th>
                        <th>
                            <LabelTranslate keyLang={keyLang} value="examples" className="text-capitalize" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((tableKeyLang, index) => (
                        <tr key={index} className={``}>
                            <td className="text-nowrap">
                                <LabelTranslate keyLang={'htp.side-bet.table.'.concat(tableKeyLang)} value="title" className="text-capitalize" />
                            </td>
                            <td>
                                <P keyLang={'htp.side-bet.table.'.concat(tableKeyLang)} value='description' className={`${styles['text-center']}`}></P>
                            </td>
                            <td>
                                <LabelTranslate value="dragon" keyLang={'htp.side-bet.table.'.concat(tableKeyLang).concat('.examples')} />
                                <LabelTranslate value="tiger" keyLang={'htp.side-bet.table.'.concat(tableKeyLang).concat('.examples')} />
                                <LabelTranslate value="wild" keyLang={'htp.side-bet.table.'.concat(tableKeyLang).concat('.examples')} />
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};

export default SideBetTable;
