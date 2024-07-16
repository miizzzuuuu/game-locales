import { Label } from '../base/label';
import { Panel } from '../base/panel';
import { SVGRandCircleFilled } from '../base/svgrandcircle';
import { SVGRandCircleOutline } from '../base/svgrandcircleout';
import { SVGRandStroke } from '../base/svgrandstroke';

export function DetailSummPlayerCard() {
    return (
        <>
            <Panel
                style={{
                    display: 'flex',
                    width: '41px',
                    height: '16px',
                    padding: '0px 2px 0px 3px',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderRadius: '4px',
                    background: '#2673D9',
                }}
                children={[
                    <Label
                        value="P"
                        style={{
                            color: '#FFF',
                            textAlign: 'center',
                            fontSize: '9.691px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: 'normal',
                            textTransform: 'uppercase',
                        }}
                    />,
                    <Panel
                        style={{
                            display: 'flex',
                            padding: '1px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '1.5px',
                            borderRadius: '3px',
                            background:
                                'linear-gradient(99deg, #FFF 0.53%, rgba(255, 255, 255, 0.85) 99.77%)',
                            boxShadow: '0px 1px 1.5px 0px rgba(0, 0, 0, 0.16)',
                        }}
                        children={[
                            <Panel
                                style={{
                                    display: 'flex',
                                    width: '8px',
                                    height: '8px',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '6.364px',
                                }}
                                children={[<SVGRandCircleOutline />]}
                            />,
                            <Panel
                                style={{
                                    display: 'flex',
                                    width: '8px',
                                    height: '8px',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '6.364px',
                                }}
                                children={[<SVGRandCircleFilled />]}
                            />,
                            <Panel
                                style={{
                                    display: 'flex',
                                    width: '8px',
                                    height: '8px',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '6.364px',
                                }}
                                children={[<SVGRandStroke />]}
                            />,
                        ]}
                    />,
                ]}
            />
        </>
    );
}

export function DetailSummBankCard() {
    return (
        <>
            <Panel
                style={{
                    display: 'flex',
                    width: '41px',
                    height: '16px',
                    padding: '0px 2px 0px 3px',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderRadius: '4px',
                    background: '#F10149',
                }}
                children={[
                    <Label
                        value="B"
                        style={{
                            color: '#FFF',
                            textAlign: 'center',
                            fontSize: '9.691px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: 'normal',
                            textTransform: 'uppercase',
                        }}
                    />,
                    <Panel
                        style={{
                            display: 'flex',
                            padding: '1px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '1.5px',
                            borderRadius: '3px',
                            background:
                                'linear-gradient(99deg, #FFF 0.53%, rgba(255, 255, 255, 0.85) 99.77%)',
                            boxShadow: '0px 1px 1.5px 0px rgba(0, 0, 0, 0.16)',
                        }}
                        children={[
                            <Panel
                                style={{
                                    display: 'flex',
                                    width: '8px',
                                    height: '8px',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '6.364px',
                                }}
                                children={[<SVGRandCircleOutline />]}
                            />,
                            <Panel
                                style={{
                                    display: 'flex',
                                    width: '8px',
                                    height: '8px',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '6.364px',
                                }}
                                children={[<SVGRandCircleFilled />]}
                            />,
                            <Panel
                                style={{
                                    display: 'flex',
                                    width: '8px',
                                    height: '8px',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '6.364px',
                                }}
                                children={[<SVGRandStroke color="#F10149" />]}
                            />,
                        ]}
                    />,
                ]}
            />
        </>
    );
}

export function SummaryIndex() {
    return (
        <>
            <Panel
                style={{
                    display: 'flex',
                    width: '100%',
                    flex: '0',
                    padding: '0rem 0.8rem',
                    justifyContent: 'space-between',
                    boxSizing: 'border-box',
                }}
                children={[
                    <Panel
                        style={{
                            display: 'flex',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px',
                        }}
                        children={[
                            <Panel
                                style={{
                                    display: 'flex',
                                    height: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '6px',
                                }}
                                children={[
                                    <Label
                                        value="#18"
                                        style={{
                                            color: '#FFF',
                                            fontWeight: '400',
                                            fontSize: '12px',
                                            margin: '0',
                                        }}
                                    />,
                                ]}
                            />,
                            <Panel
                                style={{
                                    display: 'flex',
                                    height: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '2px',
                                }}
                                children={[
                                    <Panel
                                        style={{
                                            display: 'flex',
                                            width: '12px',
                                            height: '12px',
                                            padding: '2.4px',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: '6px',
                                            borderRadius: '60px',
                                            background: '#0180D3',
                                        }}
                                        children={[
                                            <Label
                                                value="P"
                                                style={{
                                                    color: '#FFF',
                                                    fontWeight: '400',
                                                    fontSize: '9px',
                                                    margin: '0',
                                                }}
                                            />,
                                        ]}
                                    />,
                                    <Label
                                        value="11"
                                        style={{
                                            color: '#FFF',
                                            fontWeight: '400',
                                            fontSize: '12px',
                                            margin: '0',
                                        }}
                                    />,
                                ]}
                            />,
                            <Panel
                                style={{
                                    display: 'flex',
                                    height: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '2px',
                                }}
                                children={[
                                    <Panel
                                        style={{
                                            display: 'flex',
                                            width: '12px',
                                            height: '12px',
                                            padding: '2.4px',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: '6px',
                                            borderRadius: '60px',
                                            background: '#F10149',
                                        }}
                                        children={[
                                            <Label
                                                value="B"
                                                style={{
                                                    color: '#FFF',
                                                    fontWeight: '400',
                                                    fontSize: '9px',
                                                    margin: '0',
                                                }}
                                            />,
                                        ]}
                                    />,
                                    <Label
                                        value="6"
                                        style={{
                                            color: '#FFF',
                                            fontWeight: '400',
                                            fontSize: '12px',
                                            margin: '0',
                                        }}
                                    />,
                                ]}
                            />,
                            <Panel
                                style={{
                                    display: 'flex',
                                    height: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '2px',
                                }}
                                children={[
                                    <Panel
                                        style={{
                                            display: 'flex',
                                            width: '12px',
                                            height: '12px',
                                            padding: '2.4px',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: '6px',
                                            borderRadius: '60px',
                                            background: '#01C995',
                                        }}
                                        children={[
                                            <Label
                                                value="T"
                                                style={{
                                                    color: '#FFF',
                                                    fontWeight: '400',
                                                    fontSize: '9px',
                                                    margin: '0',
                                                }}
                                            />,
                                        ]}
                                    />,
                                    <Label
                                        value="6"
                                        style={{
                                            color: '#FFF',
                                            fontWeight: '400',
                                            fontSize: '12px',
                                            margin: '0',
                                        }}
                                    />,
                                ]}
                            />,
                        ]}
                    />,
                    <Panel
                        style={{
                            display: 'flex',
                            height: '100%',
                            alignItems: 'center',
                            gap: '5px',
                        }}
                        children={[DetailSummPlayerCard(), DetailSummBankCard()]}
                    />,
                ]}
            />
        </>
    );
}
