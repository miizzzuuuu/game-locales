import styles from './styles.module.scss';

interface IProps {
    table: JSX.Element;
    heading: JSX.Element;
}

const Section = ({ heading, table }: IProps) => {
    return (
        <div className={styles['bet-container']}>
            {heading}
            <div className={styles['bet-card']}>
                <div className={styles['bet-container']}>{table}</div>
            </div>
        </div>
    );
};

export default Section;
