import { useAppSelector } from '../../../../store/hooks';
import { selectLobbyUrl } from '../../../../store/slice/playerSlice';
import SVGIconLobby from '../../../menus/Items/Main/SVG/SVGIconLobby';
import { handleBackToLobby } from '../../../utils/GameHelper';
import ButtoonFooter from '../ButtonFooter';

const ButtonLobby = () => {
    const lobbyUrl = useAppSelector(selectLobbyUrl);

    return (
        <ButtoonFooter
            label="Lobby"
            icon={<SVGIconLobby />}
            onClick={() => handleBackToLobby(lobbyUrl)}
        />
    );
};

export default ButtonLobby;
