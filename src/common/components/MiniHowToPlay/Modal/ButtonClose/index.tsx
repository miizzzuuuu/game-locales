import Button from '../../../Button';
import styles from './styles.module.scss';

interface IProps {
    handleClose: () => void;
}

const ButtonClose = ({ handleClose }: IProps) => {
    return (
        <Button className={styles.button} onClick={handleClose} aria-label="close how to play">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                style={{ width: '2.4rem', height: '2.4rem' }}
            >
                <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="#6B6C80"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </Button>
    );
};

export default ButtonClose;
