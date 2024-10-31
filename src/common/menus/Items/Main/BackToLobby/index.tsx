import Item from '../Item';
import SVGIconLobby from '../SVG/SVGIconLobby';

const BackToLobby = () => {
    const handleBackToLobby = () => {
        const changeMainGame = async () => {
            try {
                await fetch('/auth/maingame/change?game=');

                const origin = window.location.origin;

                const parent = window === window.parent ? window : window.parent;
                if (parent.top?.opener) {
                    parent.close();
                } else {
                    parent.location.href = origin;
                }
            } catch (error) {
                throw error;
            }
        };

        changeMainGame();
    };

    return <Item icon={<SVGIconLobby />} text="lobby" onClick={handleBackToLobby} />;
};

export default BackToLobby;
