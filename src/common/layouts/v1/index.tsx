import { PropsWithChildren, useState } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { selectDevice } from '../../../store/slice/windowSlice';
import Footer from '../../components/Footer';
import InfoLimitBet from '../../components/InfoLimitBet';
import EventsIdnlive from '../../EventsIdnlive';
import PanelBottom from './PanelBottom';
import PanelLeft from './PanelLeft';
import PanelRight from './PanelRight';
import PanelTop from './PanelTop';
import styles from './styles.module.scss';

const LayoutV1 = ({ children }: PropsWithChildren) => {
    const device = useAppSelector(selectDevice);

    const [offsetStreaming] = useState(true);

    return (
        <div
            className={`${styles.layout}${offsetStreaming ? ` ${styles['offset-streaming']}` : ''}`}
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

            {device === 'mobile-landscape' && (
                <>
                    <div className={styles['main-wrapper']}>
                        <div className={styles.left}>
                            <PanelLeft />
                        </div>

                        <div className={styles.main}>{children}</div>

                        <div className={styles.left}>
                            <PanelRight />
                        </div>
                    </div>

                    <InfoLimitBet />
                </>
            )}

            <Footer />
            <EventsIdnlive />
        </div>
    );
};

export default LayoutV1;
