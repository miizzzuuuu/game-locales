import { Panel } from '../base/panel';
import React from 'react';
import { ButtonToggle } from '../base/buttontoggle';

interface PanelTopProps {
    children: React.ReactNode;
    onClick: () => void | null;
}

export const PanelTopToggle: React.FC<PanelTopProps> = ({ children, onClick }) => {
    return (
        <Panel
            style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: '1rem',
                alignSelf: 'stretch',
                margin: '-3rem 0.5rem 0.5rem 0.5rem',
                zIndex: '2',
            }}
            children={[
                <ButtonToggle
                    onClick={() => {
                        onClick?.();
                    }}
                    style={{
                        width: '7rem',
                        height: '2rem',
                        borderRadius: '10rem',
                        border: '0.08rem solid rgba(133, 135, 157, 0.32)',
                        background: 'rgba(0, 0, 0, 0.32)',
                        backdropFilter: 'blur(0.2rem)',
                        display: 'flex',
                        padding: '0.4rem 0.8rem 0.4rem 1.2rem',
                        alignItems: 'center',
                        gap: '0.2rem',
                    }}
                    children={children}
                    // children={[
                    //     <Label
                    //         value="More Bet"
                    //         style={{
                    //             margin: '0',
                    //             color: '#FFF',
                    //             textAlign: 'center',
                    //             fontSize: '0.9rem',
                    //             fontStyle: 'normal',
                    //             fontWeight: '500',
                    //             lineHeight: 'normal',
                    //             letterSpacing: '0.009rem',
                    //             textTransform: 'uppercase',
                    //         }}
                    //     />,
                    //     <Chevron reverse={false} />,
                    // ]}
                    // childrenOff={[
                    //     <Chevron reverse={true} />,
                    //     <Label
                    //         value="Less Bet"
                    //         style={{
                    //             margin: '0',
                    //             color: '#FFF',
                    //             textAlign: 'center',
                    //             fontSize: '0.9rem',
                    //             fontStyle: 'normal',
                    //             fontWeight: '500',
                    //             lineHeight: 'normal',
                    //             letterSpacing: '0.009rem',
                    //             textTransform: 'uppercase',
                    //         }}
                    //     />,
                    // ]}
                />,
            ]}
        />
    );
};
