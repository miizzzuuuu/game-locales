import { BUTTON_CONFIG } from '../../../utils/Features';
import { LEFT_BUTTONS } from '../constants';
import PanelUI from '../PanelUI';
import styles from './style.module.scss';

const PanelLeft = () => {
    return (
        <PanelUI className={styles['panel-left']}>
            {/* <Suspense>
                {LEFT_BUTTONS.map((key) => {
                    const config = BUTTON_CONFIG[key];
                    if (!config.enabled) return null;

                    const Component = config.component;
                    return <Component key={key} />;
                })}
            </Suspense> */}

            {LEFT_BUTTONS.map((key) => {
                const config = BUTTON_CONFIG[key];
                if (!config.enabled) return null;

                const Component = config.component;
                return <Component key={key} />;
            })}
        </PanelUI>
    );
};

export default PanelLeft;
