import { MenuContentContainer } from '../../../menus/MenuContentContainer';
import General from './Items/General';
import Menu from './Items/Menu';
import Settings from './Items/Settings';

const Features = () => {
    return (
        <MenuContentContainer>
            <General />
            <Menu />
            <Settings />
        </MenuContentContainer>
    );
};

export default Features;
