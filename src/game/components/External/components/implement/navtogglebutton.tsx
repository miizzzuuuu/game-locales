import { useSelector } from 'react-redux';
import { Button } from '../base/button';
import { Label } from '../base/label';
import { Panel } from '../base/panel';
import { StateMainPage } from '../../model/betselection';

export function NavigationToggleButton(props: any) {
    const isLandscape = useSelector((state: StateMainPage) => state.landscape);

    if (isLandscape == true) {
        return (
            <Button
                className={`rbutton`}
                onClick={() => {
                    props.onClick?.();
                    // audioManager.playAudio("toggle");
                }}
                disabled={props.disabled}
                style={{
                    flex: '0',
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '2px',
                    backgroundColor: 'rgba(255, 255, 255, 0)',
                    border: 'none',
                }}
            >
                <Panel
                    className={`${props.overrideclass == true ? props.className : ''}`}
                    style={
                        props.overrideclass == false || props.overrideclass == undefined
                            ? {
                                  display: 'flex',
                                  width: props.width,
                                  height: props.height,
                                  padding: '0px 0px',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  borderRadius: '8px',
                                  border: !props.state
                                      ? '0.8px solid rgba(133, 135, 157, 0.32)'
                                      : 'none',
                                  background: !props.state
                                      ? 'rgba(0, 0, 0, 0.32)'
                                      : 'rgba(0, 0, 0, 0)',
                                  backdropFilter: 'blur(2px)',
                              }
                            : {
                                  display: 'flex',
                                  padding: '0px 0px',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  borderRadius: '8px',
                                  border: !props.state
                                      ? '0.8px solid rgba(133, 135, 157, 0.32)'
                                      : 'none',
                                  background: !props.state
                                      ? 'rgba(0, 0, 0, 0.32)'
                                      : 'rgba(0, 0, 0, 0)',
                                  backdropFilter: 'blur(2px)',
                              }
                    }
                >
                    {props.state == true ? props.svgiconOn : props.svgicon}
                </Panel>
                <Label
                    value={!props.state ? props.title : props.titleOn}
                    style={{
                        color: '#85879D',
                        fontSize: '10px',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: 'normal',
                        letterSpacing: '-0.18px',
                        margin: '0px 0px 0px 0px',
                    }}
                />
            </Button>
        );
    }

    return (
        <Button
            className="rbutton"
            disabled={props.disabled}
            onClick={() => {
                props.onClick?.();
                // audioManager.playAudio("toggle");
            }}
            style={{
                width: isLandscape ? 'auto' : '10.5%',
                height: '100%',
                position: 'relative',
                justifyContent: 'center',
                textAlign: 'center',
                gap: '5px',
                backgroundColor: 'rgba(255, 255, 255, 0)',
                border: 'none',
                padding: '0px',
            }}
            children={[
                <Panel
                    style={{
                        display: 'flex',
                        width: props.width,
                        height: props.height,
                        padding: '0px 0px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '8px',
                        border: !props.state ? '0.8px solid rgba(133, 135, 157, 0.32)' : 'none',
                        background: !props.state ? 'rgba(0, 0, 0, 0.32)' : 'rgba(0, 0, 0, 0)',
                        backdropFilter: 'blur(2px)',
                    }}
                    children={[props.state == true ? props.svgiconOn : props.svgicon]}
                />,
                <Label
                    value={!props.state ? props.title : props.titleOn}
                    style={{
                        color: '#85879D',
                        fontSize: '10px',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: 'normal',
                        letterSpacing: '-0.18px',
                        margin: '5px 0px 0px 0px',
                    }}
                />,
            ]}
        />
    );
}
