import { PropsWithChildren } from 'react';
import Footer from '../Footer';
import TopRight from '../TopRight';
import TopLeft from '../TopLeft';
import Main from '../Main';
import WinnerArea from '../WinnerArea';

const GameDesktop = ({ children }: PropsWithChildren) => {
    return (
        <>
            <WinnerArea />
            <TopLeft />
            <TopRight />
            <Footer />
            <Main>{children}</Main>
        </>
    );
};

export default GameDesktop;
