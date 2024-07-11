import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

interface IProps extends PropsWithChildren {
    className?: string;
}

const PanelUI = ({ children, className }: IProps) => {
    return (
        <div className={`${styles['panel-ui']}${className ? ` ${className}` : ''}`}>{children}</div>
    );
};

export default PanelUI;
