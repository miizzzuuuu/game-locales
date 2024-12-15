import { PropsWithChildren } from 'react';
import EventsIdnlive from '../../EventsIdnlive';
import Footer from '../Footer';
import Main from '../Main';
import TopLeft from '../TopLeft';
import TopRight from '../TopRight';
import WinnerArea from '../WinnerArea';

const GameDesktop = ({ children }: PropsWithChildren) => {
    return (
        <>
            <WinnerArea />
            <TopLeft />
            <TopRight />
            <Footer />
            <EventsIdnlive />

            <Main>{children}</Main>
        </>
    );
};

export default GameDesktop;
