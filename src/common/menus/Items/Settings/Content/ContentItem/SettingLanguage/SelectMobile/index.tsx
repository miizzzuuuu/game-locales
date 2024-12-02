import { ChangeEvent } from 'react';
import { SVGIconChevronDown } from '../../../../../../../components/SVG/SVGIconChevronDown';
import { langLogo, langName } from '../../../../../../../utils/LangHelper';
import styles from './styles.module.scss';

interface IProps {
    initialValue?: string;
    options?: string[];
    onChange?: (value: string) => void;
}

const SelectMobile = ({ initialValue, options, onChange }: IProps) => {
    const IconSelected = initialValue && langLogo[initialValue];

    return (
        <div className={styles.container}>
            <div className={styles.selected}>
                {IconSelected && <IconSelected className={styles.icon} />}

                <span className={styles.text}>{initialValue && langName[initialValue]}</span>

                <SVGIconChevronDown className={styles.arrow} />
            </div>

            <select
                name="language"
                className={styles.select}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange?.(e.target.value)}
            >
                {options?.map((opt) => (
                    <option key={opt} value={opt}>
                        {langName[opt]}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectMobile;
