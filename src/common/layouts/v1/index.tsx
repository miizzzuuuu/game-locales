import { PropsWithChildren, useState } from 'react';
import styles from './styles.module.scss';
import { useAppSelector } from '../../../store/hooks';
import { selectDevice } from '../../../store/slice/windowSlice';
import { DisplayHelper } from '../../utils/DisplayHelper';
import Footer from '../../components/Footer';
import PanelBottom from './PanelBottom';
import PanelLeft from './PanelLeft';
import PanelRight from './PanelRight';
import PanelTop from './PanelTop';

const LayoutV1 = ({ children }: PropsWithChildren) => {
    const device = useAppSelector(selectDevice);
    const deviceClassName = DisplayHelper.getDeviceClassName(styles, device);

    const [offsetStreaming] = useState(true);

    return (
        <div
            className={`${styles['layout']}${deviceClassName}${offsetStreaming ? ` ${styles['offset-streaming']}` : ''}`}
        >
            {device === 'mobile-portrait' && (
                <>
                    <div className={styles.main}>{children}</div>

                    <div className={styles.bottom}>
                        <PanelBottom />
                    </div>

                    <div className={styles.top}>
                        <PanelTop />
                    </div>
                </>
            )}

            {device === 'desktop' ||
                (device === 'mobile-landscape' && (
                    <div className={styles['main-wrapper']}>
                        <div className={styles.left}>
                            <PanelLeft />
                        </div>

                        <div className={styles.main}>{children}</div>

                        <div className={styles.left}>
                            <PanelRight />
                        </div>
                    </div>
                ))}

            <Footer />
        </div>
    );
};

export default LayoutV1;
