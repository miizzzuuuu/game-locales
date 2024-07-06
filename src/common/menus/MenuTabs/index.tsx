import { ReactNode } from 'react';

import styles from './styles.module.scss';

interface IProps {
    children: ReactNode | undefined;
}

const MenuTabs = ({ children }: IProps) => {
    return <div className={styles['menu-tabs']}>{children}</div>;
};

export default MenuTabs;
