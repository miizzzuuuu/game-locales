import { ModalProps } from '..';
import Button from '../../../Button';
import SVGNext from './SVG/SVGNext';
import SVGPrev from './SVG/SVGPrev';

import styles from './styles.module.scss';

interface DotProps {
    isActive?: boolean;
}

const Dot = ({ isActive }: DotProps) => {
    return <div className={`${styles.dot}${isActive ? ` ${styles.active}` : ''}`}></div>;
};

const Indicators = ({ data }: ModalProps) => {
    return (
        <div className={styles.indicator}>
            <Button className={styles.arrow} disabled>
                <SVGPrev />
            </Button>

            <div className={styles['dot-wrapper']}>
                {data.map((_, idx) => (
                    <Dot key={idx} />
                ))}
            </div>

            <Button className={styles.arrow}>
                <SVGNext />
            </Button>
        </div>
    );
};

export default Indicators;
