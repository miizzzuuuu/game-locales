import { Label } from '../base/label';
import { ButtonToggleStatic } from '../base/buttontogglestatic';
import { CoinContainer } from './coincontainerset';
import { useAppSelector } from '../../../../../store/hooks';
import { selectIsLandscape } from '../../../../../store/slice/windowSlice';
import { usePlaceBet } from '../../../../../common/hooks/usePlaceBet';

export function CardDetailInfo(props: any) {
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
                          justifyContent: 'space-between',
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
                          justifyContent: 'center',
                          flex: '1 0 0',
                          borderRadius:
                              props.borderRadius == undefined ? '2px' : props.borderRadius,
                          width: '100%',
                          border: `${props.border}`,
                          background: `${props.background}`,
                          textAlign: 'center',
                          paddingTop: '10%',
                          paddingBottom: '10%',
                      }
            }
            children={
                !isLandscape
                    ? [
                          <Label
                              style={{
                                  color: '#FFF',
                                  fontFamily: 'Manrope',
                                  fontSize: '0.8rem',
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
                                  fontSize: '1.2rem',
                                  fontStyle: 'normal',
                                  fontWeight: '700',
                                  lineHeight: 'normal',
                                  letterSpacing: '0.01rem',
                                  textTransform: 'uppercase',
                                  margin: '0rem 0rem 2.2rem 0rem',
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
                                  width: '4vh',
                                  height: '4vh',
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
                              className={isLandscape ? 'bottom-smcard-label' : ''}
                              style={{
                                  color: '#FFF',
                                  fontFamily: 'Manrope',
                                  fontStyle: 'normal',
                                  fontWeight: '700',
                                  lineHeight: 'normal',
                                  textTransform: 'uppercase',
                                  margin: '0px',
                              }}
                              value={props.textHeader}
                          />,
                          <Label
                              className={isLandscape ? 'bottom-smcard-label' : ''}
                              style={{
                                  color: '#FFF',
                                  textAlign: 'center',
                                  fontFamily: 'Manrope',
                                  fontStyle: 'normal',
                                  fontWeight: '800',
                                  lineHeight: 'normal',
                                  letterSpacing: '0.1px',
                                  textTransform: 'uppercase',
                                  margin: '0px 5px',
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
                                  width: '4vw',
                                  height: '4vw',
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
