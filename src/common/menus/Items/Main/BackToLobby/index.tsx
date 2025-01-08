import { useAppSelector } from '../../../../../store/hooks';
import { selectLobbyUrl } from '../../../../../store/slice/playerSlice';
import Item from '../Item';
import SVGIconLobby from '../SVG/SVGIconLobby';

const urlLobbyLocal = import.meta.env.VITE_URL_LOBBY ?? window.location.origin;

const BackToLobby = () => {
    const lobbyUrl = useAppSelector(selectLobbyUrl);

    const handleBackToLobby = () => {
        const changeMainGame = async () => {
            await fetch('/auth/maingame/change?game=');

            // const origin = window.location.origin;

            const parent = window === window.parent ? window : window.parent;
            if (parent.top?.opener) {
                parent.close();
            } else {
                parent.location.href = lobbyUrl ? lobbyUrl : urlLobbyLocal;
            }
        };

        void changeMainGame();
    };

    return <Item icon={<SVGIconLobby />} text="lobby" onClick={handleBackToLobby} />;
};

export default BackToLobby;
