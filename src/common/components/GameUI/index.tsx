import { lazy, Suspense } from 'react';
import MainArea from '../../../game/components/MainArea';
import MainAreaDesktop from '../../../game/components/MainAreaDesktop';
import { useAppSelector } from '../../../store/hooks';
import { selectDevice } from '../../../store/slice/windowSlice';
import GameDesktop from '../../desktop/GameDesktop';
import { FEATURES } from '../../utils/Features';

const LAYOUT_COMPONENTS = {
    1: lazy(() => import('../../layouts/v1')),
    2: lazy(() => import('../../layouts/v2')),
    3: lazy(() => import('../../layouts/v3')),
} as const;

const Layout = LAYOUT_COMPONENTS[FEATURES.LAYOUT_VERSION] ?? LAYOUT_COMPONENTS[1];

const DesktopGame = () => (
    <GameDesktop>
        <MainAreaDesktop />
    </GameDesktop>
);

const GameUI = () => {
    const device = useAppSelector(selectDevice);

    if (device === 'desktop') {
        return <DesktopGame />;
    }

    return (
        <Suspense fallback={null}>
            <Layout>
                <MainArea />
            </Layout>
        </Suspense>
    );
};

export default GameUI;
