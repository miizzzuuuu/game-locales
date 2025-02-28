import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../../../../../store/hooks';
import { selectLanguage, updateSetings } from '../../../../../../../store/slice/settingsSlice';
import { selectDevice } from '../../../../../../../store/slice/windowSlice';
import { langMap } from '../../../../../../utils/LangHelper';
import Dropdown from '../../../Dropdown';
import styles from '../../../Item/styles.module.scss';
import SVGIconLanguage from '../../../SVG/SVGIconLanguage';
import SelectMobile from './SelectMobile';

const SettingLanguage = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const lang = useAppSelector(selectLanguage);
    const device = useAppSelector(selectDevice);

    return (
        <div className={styles.item}>
            <div className={styles.left}>
                <SVGIconLanguage />

                <span className={styles.text}>{t('language')}</span>
            </div>

            {device === 'desktop' ? (
                <Dropdown
                    initialValue={lang}
                    options={Object.keys(langMap)}
                    onChange={(value) => {
                        dispatch(updateSetings({ language: value }));
                    }}
                />
            ) : (
                <SelectMobile
                    initialValue={lang}
                    options={Object.keys(langMap)}
                    onChange={(value) => {
                        dispatch(updateSetings({ language: value }));
                    }}
                />
            )}
        </div>
    );
};

export default SettingLanguage;
