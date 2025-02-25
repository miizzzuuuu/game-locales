import { Suspense } from 'react';
import ButtonMenu from '../../../components/ButtonMenu';
import { BUTTON_CONFIG } from '../../../utils/Features';
import { LEFT_BUTTONS } from '../constants';
import styles from './style.module.scss';

const PanelLeft = () => {
    return (
        <div className={styles['panel-left']}>
            <Suspense>
                {LEFT_BUTTONS.map((key) => {
                    const config = BUTTON_CONFIG[key];
                    if (!config.enabled) return null;

                    const Component = config.component;
                    return <Component key={key} />;
                })}
            </Suspense>

            <ButtonMenu />
        </div>
    );
};

export default PanelLeft;
