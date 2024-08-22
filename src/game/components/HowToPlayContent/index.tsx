import { MenuContentContainer } from '../../../common/menus/MenuContentContainer';
import Introduction from './Items/Introduction';
import PlacingABet from './Items/PlacingABet';
import Rules from './Items/Rules';

import styles from './styles.module.scss';

const HowToPlayContent = () => {
    return (
        <div className={styles.htp}>
            <MenuContentContainer>
                <Introduction />
                <Rules />
                <PlacingABet />
            </MenuContentContainer>
        </div>
    );
};

export default HowToPlayContent;
