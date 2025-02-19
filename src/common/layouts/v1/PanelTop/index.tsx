import { Suspense } from 'react';
import { BUTTON_COMPONENTS, BUTTON_FEATURES, BUTTON_KEY } from '../../../utils/Features';
import styles from './styles.module.scss';

const BUTTON_LEFT: BUTTON_KEY[] = ['HIDE_CHIP', 'FAVORITE', 'STATISTIC'];

const PanelTop = () => {
    return (
        <div className={styles['panel-top']}>
            <Suspense>
                {BUTTON_LEFT.map((key) => {
                    if (!BUTTON_FEATURES[key]) {
                        return null;
                    }
                    const Component = BUTTON_COMPONENTS[key];
                    return <Component key={key} />;
                })}
            </Suspense>
        </div>
    );
};

export default PanelTop;
