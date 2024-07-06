import { ReactNode } from 'react';

import { Dropdown } from '../Dropdown';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { selectLanguage, updateSetings } from '../../../../../store/slice/settingsSlice';
import { LangHelper } from '../../../../utils/LangHelper';

import styles from '../Item/styles.module.scss';

interface IProps {
    label: ReactNode | undefined;
    icon: ReactNode;
}

const SettingLanguage = ({ label, icon }: IProps) => {
    const dispatch = useAppDispatch();
    const lang = useAppSelector(selectLanguage);

    return (
        <div className={styles.item}>
            <div className={styles.left}>
                {icon}

                <span className={styles.text}>{label}</span>
            </div>

            <Dropdown
                initialValue={lang}
                options={Object.keys(LangHelper.langMap)}
                style={{
                    height: '3rem',
                    borderRadius: '0.8rem',
                    border: '0.1rem solid rgba(94, 95, 115, 0.15)',
                    background: '#2C2D3F',
                }}
                onChange={(value) => dispatch(updateSetings({ language: value }))}
            />
        </div>
    );
};

export default SettingLanguage;
