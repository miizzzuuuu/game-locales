import ActionArea from '../ActionArea';
import ButtonLobby from './ButtonLobby';
// import ButtonMultiGame from './ButtonMultiGame';
import DateTime from './DateTime';
import styles from './styles.module.scss';
import TotalBet from './TotalBet';
import UserInfo from './UserInfo';

const Separator = () => {
    return <div className={styles.sparator} />;
};

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={`${styles.wrapper} ${styles.left}`}>
                <UserInfo />
                <Separator />
                <TotalBet />
            </div>

            <ActionArea />

            <div className={`${styles.wrapper} ${styles.right}`}>
                <DateTime />
                <Separator />
                <div className={styles.buttons}>
                    <ButtonLobby />
                    {/* <ButtonMultiGame /> */}
                </div>
            </div>
        </div>
    );
}

export default Footer;
