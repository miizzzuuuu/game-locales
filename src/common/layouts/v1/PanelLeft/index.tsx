import { Suspense } from 'react';
import ButtonMenu from '../../../components/ButtonMenu';
import { BUTTON_COMPONENTS, BUTTON_FEATURES, BUTTON_KEY } from '../../../utils/Features';
import styles from './style.module.scss';

const BUTTON_LEFT: BUTTON_KEY[] = ['HIDE_CHIP', 'FAVORITE', 'STATISTIC', 'PATTERN'];

const PanelLeft = () => {
    return (
        <div className={styles['panel-left']}>
            <Suspense>
                {BUTTON_LEFT.map((key) => {
                    if (!BUTTON_FEATURES[key]) {
                        return null;
                    }
                    const Component = BUTTON_COMPONENTS[key];
                    return <Component key={key} />;
                })}
            </Suspense>

            <ButtonMenu />
        </div>
    );
};

export default PanelLeft;
