import { PropsWithChildren, useState } from 'react';
import styles from './styles.module.scss';
import { useAppSelector } from '../../../store/hooks';
import { selectDevice } from '../../../store/slice/windowSlice';
import { DisplayHelper } from '../../utils/DisplayHelper';
import Footer from '../../components/Footer';
import PanelBottom from './PanelBottom';

const LayoutV1 = ({ children }: PropsWithChildren) => {
    const device = useAppSelector(selectDevice);
    const deviceClassName = DisplayHelper.getDeviceClassName(styles, device);

    const [offsetStreaming] = useState(true);

    return (
        <div
            className={`${styles['layout']}${deviceClassName}${offsetStreaming ? ` ${styles['offset-streaming']}` : ''}`}
        >
            <div className={styles.main}>{children}</div>

            {device === 'mobile-portrait' && (
                <>
                    <PanelBottom />
                </>
            )}

            <Footer />
        </div>
    );
};

export default LayoutV1;
