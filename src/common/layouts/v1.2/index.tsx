import { PropsWithChildren, useState } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { selectDevice } from '../../../store/slice/windowSlice';
import Footer from '../../components/Footer';
import FooterV2 from '../../components/FooterV2';
import InfoLimitBet from '../../components/InfoLimitBet';
import PanelBottom from '../v1/PanelBottom';
import PanelLeft from '../v1/PanelLeft';
import PanelRight from '../v1/PanelRight';
import PanelTop from '../v1/PanelTop';
import styles from './styles.module.scss';

const LayoutV1_2 = ({ children }: PropsWithChildren) => {
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

            {(device === 'desktop' || device === 'mobile-landscape') && (
                <div className={styles['main-wrapper']}>
                    <div className={styles.left}>
                        <PanelLeft />
                    </div>

                    <div className={styles.main}>{children}</div>

                    <div className={styles.left}>
                        <PanelRight />
                    </div>
                </div>
            )}

            {device === 'mobile-portrait' ? (
                <Footer />
            ) : (
                <>
                    <InfoLimitBet />
                    <FooterV2 />
                </>
            )}
        </div>
    );
};

export default LayoutV1_2;
