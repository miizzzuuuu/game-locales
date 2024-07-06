import { CSSProperties } from 'react';
import styles from './styles.module.scss';
import SVGLogoFooter from './SVG/SVGLogoFooter';

interface IProps {
    style?: CSSProperties;
}

const Footer = ({ style }: IProps) => {
    return (
        <div className={styles['menu-footer']} style={style}>
            <span className={styles['menu-footer-copyright']}>
                © 2024 Request network // All Right Reserved
            </span>

            <div className={styles['menu-footer-logo']}>
                <SVGLogoFooter style={{ height: '100%' }} />
            </div>
        </div>
    );
};

export default Footer;
