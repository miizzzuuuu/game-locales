import { handleBackToLobby } from '../../../../utils/GameHelper';
import Item from '../Item';
import SVGIconLobby from '../SVG/SVGIconLobby';

const BackToLobby = () => {
    return <Item icon={<SVGIconLobby />} text="lobby" onClick={handleBackToLobby} />;
};

export default BackToLobby;
