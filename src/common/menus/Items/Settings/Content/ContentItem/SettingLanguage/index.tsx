import { useAppDispatch, useAppSelector } from '../../../../../../../store/hooks';
import { selectLanguage, updateSetings } from '../../../../../../../store/slice/settingsSlice';
import LabelTranslate from '../../../../../../components/LabelTranslate';
import { langMap } from '../../../../../../utils/LangHelper';
import Dropdown from '../../../Dropdown';
import styles from '../../../Item/styles.module.scss';
import SVGIconLanguage from '../../../SVG/SVGIconLanguage';

const SettingLanguage = () => {
    const dispatch = useAppDispatch();
    const lang = useAppSelector(selectLanguage);

    return (
        <div className={styles.item}>
            <div className={styles.left}>
                <SVGIconLanguage />

                <span className={styles.text}>
                    <LabelTranslate value="language" />
                </span>
            </div>

            <Dropdown
                initialValue={lang}
                options={Object.keys(langMap)}
                style={{
                    height: '3rem',
                    borderRadius: '0.8rem',
                    border: '0.1rem solid rgba(94, 95, 115, 0.15)',
                    backgroundColor: '#2C2D3F',
                }}
                onChange={(value) => {
                    dispatch(updateSetings({ language: value }));
                }}
            />
        </div>
    );
};

export default SettingLanguage;
