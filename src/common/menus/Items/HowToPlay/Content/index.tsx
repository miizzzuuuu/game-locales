import { MenuContentContainer } from '../../../MenuContentContainer';
import Introduction from '../Items/Introduction';
import Rules from '../Items/Rules';

import styles from './styles.module.scss';

const Content = () => {
    return (
        <div className={styles.htp}>
            <MenuContentContainer>
                <Introduction />
                <Rules />
            </MenuContentContainer>
        </div>
    );
};

export default Content;
