import { useAppSelector } from '../../../../../store/hooks';
import { selectLobbyUrl } from '../../../../../store/slice/playerSlice';
import { handleBackToLobby } from '../../../../utils/GameHelper';
import Item from '../Item';
import SVGIconLobby from '../SVG/SVGIconLobby';

const BackToLobby = () => {
    const lobbyUrl = useAppSelector(selectLobbyUrl);

    return (
        <Item icon={<SVGIconLobby />} text="lobby" onClick={() => handleBackToLobby(lobbyUrl)} />
    );
};

export default BackToLobby;
