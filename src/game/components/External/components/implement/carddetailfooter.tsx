import { Label } from '../base/label';
import { ButtonToggleStatic } from '../base/buttontogglestatic';
import { CoinContainer } from './coincontainerset';
import { usePlaceBet } from '../../../../../common/hooks/usePlaceBet';
import { useAppSelector } from '../../../../../store/hooks';
import { selectIsLandscape } from '../../../../../store/slice/windowSlice';

export function CardDetailFooter(props: any) {
    const isLandscape = useAppSelector(selectIsLandscape);
    const { placeBetHanlder } = usePlaceBet();
    return (
        <ButtonToggleStatic
            onClick={() => {
                placeBetHanlder({ button: props.symbol, group: props.symbol });
            }}
            style={
                !isLandscape
                    ? {
                          position: 'relative',
                          display: 'flex',
                          height: '98%',
                          flexDirection: 'column',
                          alignItems: 'center',
                          flex: '1 0 0',
                          alignSelf: 'center',
                          borderRadius: '2px',
                          border: `${props.border}`,
                          background: `${props.background}`,
                      }
                    : {
                          position: 'relative',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '0.3rem',
                          flex: '1 0 0',
                          borderRadius:
                              props.borderRadius == undefined ? '0.2rem' : props.borderRadius,
                          height: '100%',
                          border: `${props.border}`,
                          background: `${props.background}`,
                          textAlign: 'center',
                      }
            }
            children={
                !isLandscape
                    ? [
                          <Label
                              style={{
                                  color: '#FFF',
                                  fontFamily: 'Manrope',
                                  fontSize: '8px',
                                  fontStyle: 'normal',
                                  fontWeight: '700',
                                  lineHeight: 'normal',
                                  textTransform: 'uppercase',
                              }}
                              value={props.textHeader}
                          />,
                          <Label
                              style={{
                                  color: '#FFF',
                                  textAlign: 'center',
                                  fontFamily: 'Manrope',
                                  fontSize: '1rem',
                                  fontStyle: 'normal',
                                  fontWeight: '800',
                                  lineHeight: 'normal',
                                  letterSpacing: '0.01rem',
                                  textTransform: 'uppercase',
                                  margin: '0rem 0rem 1.2rem 0rem',
                              }}
                              value={props.textContent}
                          />,
                          <CoinContainer
                              symbol={props.symbol}
                              bet={{ button: props.symbol, group: props.symbol }}
                              style={{
                                  position: 'absolute',
                                  top: '50%',
                                  left: props.forceRight ? 'auto' : '0px',
                                  right: props.forceRight ? '0px' : 'auto',
                                  transform: 'translateY(-50%)',
                                  width: '3vh',
                                  height: '3vh',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: '0px',
                                  alignContent: 'center',
                                  justifyContent: 'center',
                              }}
                          ></CoinContainer>,
                      ]
                    : [
                          <Label
                              className={isLandscape ? 'bottom-betcard-label' : ''}
                              style={{
                                  color: '#FFF',
                                  textAlign: 'center',
                                  fontFamily: 'Manrope',
                                  fontStyle: 'normal',
                                  fontWeight: '800',
                                  lineHeight: 'normal',
                                  letterSpacing: '0.1px',
                                  textTransform: 'uppercase',
                              }}
                              value={props.textContent}
                          />,
                          <Label
                              className={isLandscape ? 'bottom-betcard-title' : ''}
                              style={{
                                  color: '#FFF',
                                  fontFamily: 'Manrope',
                                  fontStyle: 'normal',
                                  fontWeight: '700',
                                  lineHeight: 'normal',
                                  textTransform: 'uppercase',
                                  margin: '0px 0px 5px 0px',
                              }}
                              value={props.textHeader}
                          />,
                          <CoinContainer
                              symbol={props.symbol}
                              bet={{ button: props.symbol, group: props.symbol }}
                              style={{
                                  position: 'absolute',
                                  top: '50%',
                                  left: props.forceRight ? 'auto' : '0px',
                                  right: props.forceRight ? '0px' : 'auto',
                                  transform: 'translateY(-50%)',
                                  width: '3vw',
                                  height: '3vw',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: '0px',
                                  alignContent: 'center',
                                  justifyContent: 'center',
                              }}
                          ></CoinContainer>,
                      ]
            }
        />
    );
}
