import SVGIconLobby from '../../../menus/Items/Main/SVG/SVGIconLobby';
import { handleBackToLobby } from '../../../utils/GameHelper';
import ButtoonFooter from '../ButtonFooter';

const ButtonLobby = () => {
    return <ButtoonFooter label="Lobby" icon={<SVGIconLobby />} onClick={handleBackToLobby} />;
};

export default ButtonLobby;
