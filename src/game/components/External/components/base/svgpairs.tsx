import { Label } from './label';
import { ButtonToggleStatic } from './buttontogglestatic';
import { CoinContainer } from '../implement/coincontainerset';
import { usePlaceBet } from '../../../../../common/hooks/usePlaceBet';
import { useAppSelector } from '../../../../../store/hooks';
import { selectIsLandscape } from '../../../../../store/slice/windowSlice';

export function SVGPairsPanel() {
    const { placeBetHanlder } = usePlaceBet();
    const isLandscape = useAppSelector(selectIsLandscape);
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                gap: '1.8px',
            }}
        >
            <div
                className={'panel-board'}
                style={{
                    position: 'relative',
                    width: '50%',
                    height: '100%',
                }}
            >
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 54 80"
                    fill="none"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M2 79.5C1.17157 79.5 0.5 78.8284 0.5 78V3.3419C7.86384 25.0788 27.9903 40.9696 52.0079 42.1948C52.8432 42.2374 53.5 42.9148 53.5 43.7285V78C53.5 78.8284 52.8284 79.5 52 79.5H2Z"
                        fill="url(#paint0_linear_570_8088)"
                    />
                    <path
                        d="M2 79.5C1.17157 79.5 0.5 78.8284 0.5 78V3.3419C7.86384 25.0788 27.9903 40.9696 52.0079 42.1948C52.8432 42.2374 53.5 42.9148 53.5 43.7285V78C53.5 78.8284 52.8284 79.5 52 79.5H2Z"
                        fill="url(#paint1_linear_570_8088)"
                    />
                    <path
                        d="M2 79.5C1.17157 79.5 0.5 78.8284 0.5 78V3.3419C7.86384 25.0788 27.9903 40.9696 52.0079 42.1948C52.8432 42.2374 53.5 42.9148 53.5 43.7285V78C53.5 78.8284 52.8284 79.5 52 79.5H2Z"
                        stroke="#FFBE83"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_570_8088"
                            x1="24.6754"
                            y1="75.7665"
                            x2="24.6754"
                            y2="-4.43931"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#A48955" />
                            <stop offset="1" stop-color="#A48955" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_570_8088"
                            x1="27"
                            y1="0"
                            x2="27"
                            y2="80"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#FFBE83" />
                            <stop offset="1" stop-color="#E17512" />
                        </linearGradient>
                    </defs>
                </svg>
                <div
                    style={{
                        position: 'absolute',
                        display: 'inline-flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '4px',
                        left: '50%',
                        bottom: '10px',
                        width: '95%',
                        transform: 'translate(-50%, 0%)',
                    }}
                >
                    <Label
                        className="bottom-smcard-label"
                        value="PERFECT PAIR"
                        style={{
                            color: '#FFF',
                            textAlign: 'center',
                            fontStyle: 'normal',
                            fontWeight: '800',
                            margin: '0px',
                        }}
                    />
                    <Label
                        className="bottom-smcard-label"
                        value="21:1"
                        style={{
                            color: 'rgba(255, 255, 255, 0.40)',
                            textAlign: 'center',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            margin: '0px',
                        }}
                    />
                </div>
                <ButtonToggleStatic
                    onClick={() => {
                        placeBetHanlder({ button: 'perfectpair', group: 'perfectpair' });
                    }}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: '0px',
                        left: '0px',
                        backgroundColor: 'rgba(0,0,0,0)',
                        border: 'none',
                    }}
                    children={[
                        <CoinContainer
                            symbol="perfectpair"
                            bet={{ button: 'perfectpair', group: 'perfectpair' }}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '0px',
                                transform: 'translateY(-50%)',
                                width: isLandscape ? '3vw' : '4vh',
                                height: isLandscape ? '3vw' : '4vh',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0px',
                                alignContent: 'center',
                                justifyContent: 'center',
                            }}
                        ></CoinContainer>,
                    ]}
                />
            </div>
            <div
                className={'panel-board'}
                style={{
                    position: 'relative',
                    width: '50%',
                    height: '100%',
                }}
            >
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 54 80"
                    fill="none"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M2 79.5C1.17157 79.5 0.5 78.8284 0.5 78V43.731C0.5 42.9173 1.15674 42.24 1.99205 42.1974C26.0108 40.9718 46.1376 25.0801 53.5 3.34275V78C53.5 78.8284 52.8284 79.5 52 79.5H2Z"
                        fill="url(#paint0_linear_570_8075)"
                    />
                    <path
                        d="M2 79.5C1.17157 79.5 0.5 78.8284 0.5 78V43.731C0.5 42.9173 1.15674 42.24 1.99205 42.1974C26.0108 40.9718 46.1376 25.0801 53.5 3.34275V78C53.5 78.8284 52.8284 79.5 52 79.5H2Z"
                        fill="url(#paint1_linear_570_8075)"
                    />
                    <path
                        d="M2 79.5C1.17157 79.5 0.5 78.8284 0.5 78V43.731C0.5 42.9173 1.15674 42.24 1.99205 42.1974C26.0108 40.9718 46.1376 25.0801 53.5 3.34275V78C53.5 78.8284 52.8284 79.5 52 79.5H2Z"
                        stroke="#FFBE83"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_570_8075"
                            x1="27"
                            y1="0"
                            x2="27"
                            y2="80"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#FFD600" />
                            <stop offset="1" stop-color="#E17512" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_570_8075"
                            x1="27"
                            y1="0"
                            x2="27"
                            y2="80"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#FFBE83" />
                            <stop offset="1" stop-color="#E17512" />
                        </linearGradient>
                    </defs>
                </svg>
                <div
                    style={{
                        position: 'absolute',
                        display: 'inline-flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '4px',
                        left: '50%',
                        bottom: '10px',
                        width: '95%',
                        transform: 'translate(-50%, 0%)',
                    }}
                >
                    <Label
                        className="bottom-smcard-label"
                        value="MIXED PAIR"
                        style={{
                            color: '#FFF',
                            textAlign: 'center',
                            fontStyle: 'normal',
                            fontWeight: '800',
                            margin: '0px',
                        }}
                    />
                    <Label
                        className="bottom-smcard-label"
                        value="5:1"
                        style={{
                            color: 'rgba(255, 255, 255, 0.40)',
                            textAlign: 'center',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            margin: '0px',
                        }}
                    />
                </div>
                <ButtonToggleStatic
                    onClick={() => {
                        placeBetHanlder({ button: 'eitherpair', group: 'eitherpair' });
                    }}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: '0px',
                        left: '0px',
                        backgroundColor: 'rgba(0,0,0,0)',
                        border: 'none',
                    }}
                    children={[
                        <CoinContainer
                            symbol="eitherpair"
                            bet={{ button: 'eitherpair', group: 'eitherpair' }}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                right: '0px',
                                transform: 'translateY(-50%)',
                                width: isLandscape ? '3vw' : '4vh',
                                height: isLandscape ? '3vw' : '4vh',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0px',
                                alignContent: 'center',
                                justifyContent: 'center',
                            }}
                        ></CoinContainer>,
                    ]}
                />
            </div>
        </div>
    );
}
