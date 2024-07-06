import { MenuContentContainer } from '../../../../common/menus/MenuContentContainer';
import Introduction from '../Items/Introduction';
import Rules from '../Items/Rules';
import styles from './styles.module.scss';

const HowToPlayContent = () => {
    return (
        <div className={styles.htp}>
            <MenuContentContainer>
                <Introduction />
                <Rules />
            </MenuContentContainer>
        </div>
    );
};

export default HowToPlayContent;
