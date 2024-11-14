import { PropsWithChildren } from 'react';
import Footer from '../Footer';
import TopLeft from '../TopLeft';
import TopRight from '../TopRight';
import Main from '../Main';

const GameDesktop = ({ children }: PropsWithChildren) => {
    return (
        <>
            <TopLeft />
            <TopRight />
            <Footer />
            <Main>{children}</Main>
        </>
    );
};

export default GameDesktop;
