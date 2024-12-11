import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';
import { useAppSelector } from '../../../store/hooks';
import { selectDevice } from '../../../store/slice/windowSlice';
import Footer from '../../components/Footer';
import PanelLeft from './PanelLeft';
import PanelRight from './PanelRight';
import PanelBottom from './PanelBottom';
import EventsIdnlive from '../../EventsIdnlive';

const LayoutV2 = ({ children }: PropsWithChildren) => {
    const device = useAppSelector(selectDevice);

    return (
        <div className={`${styles.layout}`}>
            <div className={styles['main-area']}>
                {device === 'mobile-portrait' && (
                    <>
                        <div className={styles['main-area-left']}>
                            <PanelLeft />
                        </div>
                        <div className={styles['main-area-middle']}>{children}</div>
                        <div className={styles['main-area-right']}>
                            <PanelRight />
                        </div>
                    </>
                )}

                {(device === 'mobile-landscape' || device === 'desktop') && (
                    <>
                        <div className={styles['main-area-top']}>{children}</div>
                        <div className={styles['main-area-bottom']}>
                            <PanelBottom />
                        </div>
                    </>
                )}
            </div>

            <Footer />
            <EventsIdnlive />
        </div>
    );
};

export default LayoutV2;
