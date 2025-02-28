import { BUTTON_CONFIG } from '../../../utils/Features';
import { TOP_BUTTONS } from '../constants';
import styles from './styles.module.scss';

const PanelTop = () => {
    return (
        <div className={styles['panel-top']}>
            {/* <Suspense>
                {TOP_BUTTONS.map((key) => {
                    const config = BUTTON_CONFIG[key];
                    if (!config.enabled) {
                        return null;
                    }
                    const Component = config.component;
                    return <Component key={key} />;
                })}
            </Suspense> */}

            {TOP_BUTTONS.map((key) => {
                const config = BUTTON_CONFIG[key];
                if (!config.enabled) {
                    return null;
                }
                const Component = config.component;
                return <Component key={key} />;
            })}
        </div>
    );
};

export default PanelTop;
