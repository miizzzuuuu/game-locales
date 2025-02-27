import { PropsWithChildren } from 'react';
import HistoryResult from '../../../game/components/HistoryResult';
import { useAppSelector } from '../../../store/hooks';
import { selectDevice } from '../../../store/slice/windowSlice';
import Footer from '../../components/Footer';
import InfoLimitBet from '../../components/InfoLimitBet';
import EventsIdnlive from '../../EventsIdnlive';
import PanelBottom from './PanelBottom';
import PanelRight from './PanelRight';
import styles from './styles.module.scss';

const PortraitLayout = ({ children }: PropsWithChildren) => (
    <>
        <div className={styles['main-area-middle']}>{children}</div>
        <div className={styles['main-area-right']}>
            <PanelRight />
        </div>
    </>
);

const LandscapeLayout = ({ children }: PropsWithChildren) => (
    <>
        <div className={styles['main-area-top']}>{children}</div>
        <div className={styles['main-area-bottom']}>
            <PanelBottom />
        </div>

        <InfoLimitBet />
    </>
);

const LayoutV3 = ({ children }: PropsWithChildren) => {
    const device = useAppSelector(selectDevice);

    return (
        <div className={`${styles.layout}`}>
            <div className={styles['main-area']}>
                {device === 'mobile-portrait' && <PortraitLayout>{children}</PortraitLayout>}
                {device === 'mobile-landscape' && <LandscapeLayout>{children}</LandscapeLayout>}
            </div>

            <HistoryResult />
            <Footer />
            <EventsIdnlive />
        </div>
    );
};

export default LayoutV3;
