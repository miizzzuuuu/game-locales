import { Panel } from '../base/panel';
import { SVGPlayerBonusTitle } from '../base/svgplayertitle';
import { SVGBankBonusTitle } from '../base/svgbanktitle';
import { Label } from '../base/label';
import { SVGUnionPanel } from '../base/svgunion';
import { SVGPairsPanel } from '../base/svgpairs';
import { SVGUserIcon } from '../base/svgusericon';
import { SVGIDNLogoTie } from '../base/svgidnlogotie';
import { CardDetailInfo } from './carddetailinfo';
import { RenderCard } from '../../prefabs/covercards/rcard';
import { ButtonToggleStatic } from '../base/buttontogglestatic';
import { CoinContainer } from './coincontainerset';
import { useEffect, useRef, useState } from 'react';
import { selectIsLandscape } from '../../../../../store/slice/windowSlice';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { usePlaceBet } from '../../../../../common/hooks/usePlaceBet';
import { useGetChipBet } from '../../../../../common/hooks/useGetChipBet';
import { setMessage } from '../../../../../store/slice/gameStateSlice';
import { useAppTranslate } from '../../../../../services/i18next/hooks';

function SummaryPlayerNumber() {
    return (
        <div
            style={{
                position: 'absolute',
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '3px',
                height: '10px',
                width: '90%',
                bottom: '1.1rem',
                left: '50%',
                transform: 'translate(-50%, 0)',
            }}
        >
            <Label
                className="bottom-card-label"
                value="PLAYER"
                style={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontStyle: 'normal',
                    fontWeight: '800',
                    margin: '0px',
                }}
            />
            <Label
                className="bottom-card-label"
                value="1:1"
                style={{
                    color: 'rgba(255, 255, 255, 0.40)',
                    textAlign: 'center',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    margin: '0px',
                }}
            />
        </div>
    );
}

function SummPairPlayerNumber() {
    const { placeBetHanlder } = usePlaceBet();
    return (
        <div
            style={{
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                gap: '3px',
                width: '100%',
                height: '100%',
            }}
        >
            <Label
                value="PLAYER PAIR"
                style={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontSize: '10px',
                    fontStyle: 'normal',
                    fontWeight: '800',
                    margin: '0px',
                }}
            />
            <Label
                value="1:1"
                style={{
                    color: 'rgba(255, 255, 255, 0.40)',
                    textAlign: 'center',
                    fontSize: '10px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    margin: '0px',
                }}
            />
            <ButtonToggleStatic
                onClick={() => {
                    placeBetHanlder({ button: 'playerpair', group: 'playerpair' });
                }}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0)',
                    border: 'none',
                }}
                children={[
                    <CoinContainer
                        symbol="playerpair"
                        bet={{ button: 'playerpair', group: 'playerpair' }}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '0px',
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
                ]}
            />
        </div>
    );
}

function SummPairBankerNumber() {
    const { placeBetHanlder } = usePlaceBet();
    return (
        <div
            style={{
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                gap: '3px',
                width: '100%',
                height: '100%',
            }}
        >
            <Label
                value="BANKER PAIR"
                style={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontSize: '10px',
                    fontStyle: 'normal',
                    fontWeight: '800',
                    margin: '0px',
                }}
            />
            <Label
                value="1:1"
                style={{
                    color: 'rgba(255, 255, 255, 0.40)',
                    textAlign: 'center',
                    fontSize: '10px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    margin: '0px',
                }}
            />
            <ButtonToggleStatic
                onClick={() => {
                    placeBetHanlder({ button: 'bankerpair', group: 'bankerpair' });
                }}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0)',
                    border: 'none',
                }}
                children={[
                    <CoinContainer
                        symbol="bankerpair"
                        bet={{ button: 'bankerpair', group: 'bankerpair' }}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            right: '0px',
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
                ]}
            />
        </div>
    );
}

function CardAreaBank(props: any) {
    return (
        <div
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
            }}
        >
            <RenderCard
                top="0px"
                left="0px"
                right="0px"
                position={{ x: '3px', y: '15px' }}
                rotation={{ z: '0deg' }}
                value={props.slotCard[0]}
                visible={props.slotCard[0] == '' ? false : true}
                submit={props.submit}
            />
            <RenderCard
                top="0px"
                left="0px"
                right="0px"
                position={{ x: '30px', y: '15px' }}
                rotation={{ z: '0deg' }}
                value={props.slotCard[1]}
                visible={props.slotCard[1] == '' ? false : true}
                submit={props.submit}
            />
            <RenderCard
                top="0px"
                left="0px"
                right="0px"
                position={{ x: '63px', y: '15px' }}
                rotation={{ z: '90deg' }}
                value={props.slotCard[2]}
                visible={props.slotCard[2] == '' ? false : true}
                submit={props.submit}
            />
        </div>
    );
}

function CardAreaPlayer(props: any) {
    return (
        <div
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
            }}
        >
            <RenderCard
                top="0px"
                left="auto"
                right="0px"
                position={{ x: '-3px', y: '15px' }}
                rotation={{ z: '0deg' }}
                value={props.slotCard[1]}
                visible={props.slotCard[1] == '' ? false : true}
                submit={props.submit}
            />
            <RenderCard
                top="0px"
                left="auto"
                right="0px"
                position={{ x: '-30px', y: '15px' }}
                rotation={{ z: '0deg' }}
                value={props.slotCard[0]}
                visible={props.slotCard[0] == '' ? false : true}
                submit={props.submit}
            />
            <RenderCard
                top="0px"
                left="auto"
                right="0px"
                position={{ x: '-63px', y: '15px' }}
                rotation={{ z: '90deg' }}
                value={props.slotCard[2]}
                visible={props.slotCard[2] == '' ? false : true}
                submit={props.submit}
            />
        </div>
    );
}

function SummaryBankNumber() {
    return (
        <div
            style={{
                position: 'absolute',
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '3px',
                height: '10px',
                width: '90%',
                bottom: '1.1rem',
                left: '50%',
                transform: 'translate(-50%, 0)',
            }}
        >
            <Label
                className="bottom-card-label"
                value="BANKER"
                style={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontStyle: 'normal',
                    fontWeight: '800',
                    margin: '0px',
                }}
            />
            <Label
                className="bottom-card-label"
                value="1:1"
                style={{
                    color: 'rgba(255, 255, 255, 0.40)',
                    textAlign: 'center',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    margin: '0px',
                }}
            />
        </div>
    );
}

function SummaryTieNumber() {
    return (
        <div
            style={{
                position: 'absolute',
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '3px',
                height: '10px',
                width: 'auto',
                bottom: '20px',
                left: '50%',
                transform: 'translate(-50%, 0)',
            }}
        >
            <Label
                className="bottom-card-label"
                value="TIE"
                style={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontStyle: 'normal',
                    fontWeight: '800',
                    margin: '0px',
                }}
            />
            <Label
                className="bottom-card-label"
                value="9:1"
                style={{
                    color: 'rgba(255, 255, 255, 0.40)',
                    textAlign: 'center',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    margin: '0px',
                }}
            />
        </div>
    );
}

function BoardPlayerNumberAndAmount() {
    const isLandscape = useAppSelector(selectIsLandscape);
    return (
        <>
            <Panel
                style={{
                    width: '60%',
                    height: '32px',
                    position: 'absolute',
                    right: '5px',
                    top: '5px',
                    display: 'inline-flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    gap: '3px',
                }}
                children={[
                    <Label
                        className="bottom-smcard-label"
                        value="12,650,000"
                        style={{
                            color: !isLandscape ? '#48B6FE' : '#FFF',
                            textAlign: 'center',
                            margin: '0px',
                        }}
                    />,
                    <Panel
                        style={{
                            width: 'auto',
                            height: '10px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        children={[
                            <SVGUserIcon fillColor={!isLandscape ? '#48B6FE' : '#FFF'} />,
                            <Label
                                className="bottom-smcard-label"
                                value="10"
                                style={{
                                    color: !isLandscape ? '#48B6FE' : '#FFF',
                                    textAlign: 'center',
                                    fontWeight: '600',
                                    margin: '0px',
                                }}
                            />,
                        ]}
                    />,
                ]}
            />
        </>
    );
}

function BoardBankNumberAndAmount() {
    const isLandscape = useAppSelector(selectIsLandscape);
    return (
        <>
            <Panel
                style={{
                    width: '60%',
                    height: '32px',
                    position: 'absolute',
                    right: '5px',
                    top: '5px',
                    display: 'inline-flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    gap: '3px',
                }}
                children={[
                    <Label
                        className="bottom-smcard-label"
                        value="12,650,000"
                        style={{
                            color: !isLandscape ? '#FD024D' : '#FFF',
                            textAlign: 'center',
                            margin: '0px',
                        }}
                    />,
                    <Panel
                        style={{
                            width: 'auto',
                            height: '10px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        children={[
                            <SVGUserIcon fillColor={!isLandscape ? '#FD024D' : '#FFF'} />,
                            <Label
                                className="bottom-smcard-label"
                                value="10"
                                style={{
                                    color: !isLandscape ? '#FD024D' : '#FFF',
                                    textAlign: 'center',
                                    fontWeight: '600',
                                    margin: '0px',
                                }}
                            />,
                        ]}
                    />,
                ]}
            />
        </>
    );
}

function BoardTieNumberAndAmount() {
    return (
        <>
            <Panel
                style={{
                    width: '60%',
                    height: '32px',
                    position: 'absolute',
                    right: '5px',
                    top: '5px',
                    display: 'inline-flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    gap: '3px',
                }}
                children={[
                    <Label
                        className="bottom-smcard-label"
                        value="12,650,000"
                        style={{
                            color: '#75F0D0',
                            textAlign: 'center',
                            margin: '0px',
                        }}
                    />,
                    <Panel
                        style={{
                            width: 'auto',
                            height: '10px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        children={[
                            <SVGUserIcon fillColor="#75F0D0" />,
                            <Label
                                className="bottom-smcard-label"
                                value="10"
                                style={{
                                    color: '#75F0D0',
                                    textAlign: 'center',
                                    fontWeight: '600',
                                    margin: '0px',
                                }}
                            />,
                        ]}
                    />,
                ]}
            />
        </>
    );
}

function BoardHeaderInfoGame() {
    // const dispatchBetAction = useDispatch();
    const { placeBetHanlder } = usePlaceBet();
    const { t } = useAppTranslate('');
    const dispatch = useAppDispatch();
    const { chip: chipPlayer } = useGetChipBet({ button: 'player', group: 'player' });
    const { chip: chipBanker } = useGetChipBet({ button: 'banker', group: 'banker' });
    const { chip: chipTie } = useGetChipBet({ button: 'tie', group: 'tie' });
    return (
        <>
            <Panel
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px',
                    zIndex: '2',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                    flex: '0',
                    boxSizing: 'border-box',
                    marginBottom: '-1.2rem',
                }}
                children={[
                    <Panel
                        style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '6px',
                        }}
                        children={[
                            <Panel
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '2px',
                                }}
                                children={[
                                    <Panel
                                        style={{
                                            display: 'flex',
                                            width: '100%',
                                            height: '30px',
                                            padding: '0',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-end',
                                        }}
                                        children={[
                                            <ButtonToggleStatic
                                                className={'panel-board'}
                                                onClick={() => {
                                                    if (
                                                        chipPlayer === 0 &&
                                                        chipBanker === 0 &&
                                                        chipTie === 0
                                                    ) {
                                                        const message = t('common.bet-error-n50', {
                                                            button: 'player bonus',
                                                        });
                                                        console.log('bet error', message);
                                                        dispatch(
                                                            setMessage({
                                                                value: message,
                                                                type: 'danger',
                                                            }),
                                                        );

                                                        return;
                                                    }
                                                    placeBetHanlder({
                                                        button: 'playerbonus',
                                                        group: 'playerbonus',
                                                    });
                                                }}
                                                style={{
                                                    width: '33.333%',
                                                    height: '30px',
                                                    flexShrink: '0',
                                                    position: 'relative',
                                                    border: 'none',
                                                    padding: '0px',
                                                    backgroundColor: 'rgba(0,0,0,0)',
                                                }}
                                                children={[
                                                    <SVGPlayerBonusTitle />,
                                                    <Label
                                                        value="PLAYER BONUS"
                                                        className="child-content"
                                                        style={{
                                                            width: '100%',
                                                            margin: '0px 0px 0px 0px',
                                                            top: '50%',
                                                            left: '50%',
                                                            transform: 'translate(-50%, -50%)',
                                                            color: '#FFF',
                                                            textAlign: 'center',
                                                            fontFamily: 'Manrope',
                                                            fontSize: '9px',
                                                            fontStyle: 'normal',
                                                            fontWeight: '800',
                                                            lineHeight: 'normal',
                                                            letterSpacing: '0.09px',
                                                            textTransform: 'uppercase',
                                                        }}
                                                    />,
                                                    <CoinContainer
                                                        symbol="playerbonus"
                                                        bet={{
                                                            button: 'playerbonus',
                                                            group: 'playerbonus',
                                                        }}
                                                        style={{
                                                            position: 'absolute',
                                                            top: '50%',
                                                            left: '0px',
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
                                                ]}
                                            />,
                                            <ButtonToggleStatic
                                                className={'panel-board'}
                                                onClick={() => {
                                                    if (
                                                        chipPlayer === 0 &&
                                                        chipBanker === 0 &&
                                                        chipTie === 0
                                                    ) {
                                                        const message = t('common.bet-error-n50', {
                                                            button: 'player bonus',
                                                        });
                                                        console.log('bet error', message);
                                                        dispatch(
                                                            setMessage({
                                                                value: message,
                                                                type: 'danger',
                                                            }),
                                                        );

                                                        return;
                                                    }
                                                    placeBetHanlder({
                                                        button: 'bankbonus',
                                                        group: 'bankbonus',
                                                    });
                                                }}
                                                style={{
                                                    width: '33.333%',
                                                    height: '30px',
                                                    flexShrink: '0',
                                                    position: 'relative',
                                                    border: 'none',
                                                    padding: '0px',
                                                    backgroundColor: 'rgba(0,0,0,0)',
                                                }}
                                                children={[
                                                    <SVGBankBonusTitle />,
                                                    <Label
                                                        value="BANK BONUS"
                                                        className="child-content"
                                                        style={{
                                                            width: '100%',
                                                            margin: '0px 0px 0px 0px',
                                                            top: '50%',
                                                            left: '50%',
                                                            transform: 'translate(-50%, -50%)',
                                                            color: '#FFF',
                                                            textAlign: 'center',
                                                            fontFamily: 'Manrope',
                                                            fontSize: '9px',
                                                            fontStyle: 'normal',
                                                            fontWeight: '800',
                                                            lineHeight: 'normal',
                                                            letterSpacing: '0.09px',
                                                            textTransform: 'uppercase',
                                                        }}
                                                    />,
                                                    <CoinContainer
                                                        symbol="bankbonus"
                                                        bet={{
                                                            button: 'bankbonus',
                                                            group: 'bankbonus',
                                                        }}
                                                        style={{
                                                            position: 'absolute',
                                                            top: '50%',
                                                            right: '0px',
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
                                                ]}
                                            />,
                                        ]}
                                    />,
                                ]}
                            />,
                        ]}
                    />,
                ]}
            />
        </>
    );
}

function BrightSideRowDetail() {
    const background =
        'linear-gradient(180deg, #009DF5 0%, #012468 124.17%), linear-gradient(0deg, rgba(103, 101, 101, 0.49) -14.17%, rgba(255, 249, 249, 0.70) 109.17%)';
    return (
        <Panel
            style={{
                display: 'flex',
                width: '100%',
                alignItems: 'flex-start',
                gap: '2px',
                flex: '1 0 0',
            }}
            children={[
                <CardDetailInfo
                    symbol="small"
                    forceRight={true}
                    textContent="small"
                    textHeader="0.54:1"
                    border="1px solid #0189DE"
                    background={background}
                />,
                <CardDetailInfo
                    symbol="tie0"
                    forceRight={true}
                    textContent="0"
                    textHeader="150:1"
                    border="1px solid #0189DE"
                    background={background}
                />,
                <CardDetailInfo
                    symbol="tie1"
                    forceRight={true}
                    textContent="1"
                    textHeader="215:1"
                    border="1px solid #0189DE"
                    background={background}
                />,
                <CardDetailInfo
                    symbol="tie2"
                    forceRight={true}
                    textContent="2"
                    textHeader="220:1"
                    border="1px solid #0189DE"
                    background={background}
                />,
                <CardDetailInfo
                    symbol="tie3"
                    forceRight={true}
                    textContent="3"
                    textHeader="200:1"
                    border="1px solid #0189DE"
                    background={background}
                />,
                <CardDetailInfo
                    symbol="tie4"
                    forceRight={true}
                    textContent="4"
                    textHeader="120:1"
                    border="1px solid #0189DE"
                    background={background}
                />,
            ]}
        />
    );
}

function DarkSideRowDetail() {
    const background =
        'linear-gradient(180deg, #00D59D 0%, #004130 100%), linear-gradient(180deg, #00F5C9 0%, #00846C 124.17%)';
    return (
        <Panel
            style={{
                display: 'flex',
                width: '100%',
                alignItems: 'flex-start',
                gap: '2px',
                flex: '1 0 0',
            }}
            children={[
                <CardDetailInfo
                    symbol="big"
                    forceRight={true}
                    textContent="big"
                    textHeader="0.54:1"
                    border="1px solid #00D59D"
                    background={background}
                />,
                <CardDetailInfo
                    symbol="tie5"
                    forceRight={true}
                    textContent="5"
                    textHeader="110:1"
                    border="1px solid #00D59D"
                    background={background}
                />,
                <CardDetailInfo
                    symbol="tie6"
                    forceRight={true}
                    textContent="6"
                    textHeader="45:1"
                    border="1px solid #00D59D"
                    background={background}
                />,
                <CardDetailInfo
                    symbol="tie7"
                    forceRight={true}
                    textContent="7"
                    textHeader="45:1"
                    border="1px solid #00D59D"
                    background={background}
                />,
                <CardDetailInfo
                    symbol="tie8"
                    forceRight={true}
                    textContent="8"
                    textHeader="80:1"
                    border="1px solid #00D59D"
                    background={background}
                />,
                <CardDetailInfo
                    symbol="tie9"
                    forceRight={true}
                    textContent="9"
                    textHeader="80:1"
                    border="1px solid #00D59D"
                    background={background}
                />,
            ]}
        />
    );
}

//less info
function BoardContainerGameStats(props: any) {
    const isLandscape = useAppSelector(selectIsLandscape);
    const { placeBetHanlder } = usePlaceBet();
    return (
        <Panel
            className={props.className}
            style={{
                flex: '1',
                height: '100%',
                display: 'flex',
                padding: '0px 0px',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2.5px',
            }}
            children={[
                <Panel
                    style={{
                        flex: '1',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        gap: '2px',
                        margin: '0px 0px 0px 0px',
                    }}
                    children={[
                        <Panel
                            className={'panel-board'}
                            style={{
                                flex: '3.5',
                                width: '100%',
                                borderRadius: '2px',
                                border: '1px solid #0189DE',
                                fontFamily: 'Manrope',
                                position: 'relative',
                                boxSizing: 'border-box',
                                padding: '0px',
                                background: !isLandscape
                                    ? 'linear-gradient(270deg, #009DF5 -21.58%, #012468 121.58%), linear-gradient(270deg, #04A7CA -21.58%, #001E87 121.58%)'
                                    : 'linear-gradient(180deg, #009DF5 -14.02%, #012468 114.59%)',
                            }}
                            children={[
                                BoardPlayerNumberAndAmount(),
                                SummaryPlayerNumber(),
                                <CardAreaPlayer slotCard={props.slotCardP} submit={props.submit} />,
                                <ButtonToggleStatic
                                    onClick={() => {
                                        placeBetHanlder({ button: 'player', group: 'player' });
                                    }}
                                    style={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: 'rgba(0,0,0,0)',
                                        border: 'none',
                                    }}
                                    children={[
                                        <CoinContainer
                                            symbol="player"
                                            bet={{ button: 'player', group: 'player' }}
                                            style={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '0px',
                                                transform: 'translateY(-50%)',
                                                width: isLandscape ? '4vw' : '4vh',
                                                height: isLandscape ? '4vw' : '4vh',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '0px',
                                                alignContent: 'center',
                                                justifyContent: 'center',
                                            }}
                                        ></CoinContainer>,
                                    ]}
                                />,
                            ]}
                        />,
                        !isLandscape ? (
                            <Panel
                                className={'panel-board'}
                                style={{
                                    flex: '1',
                                    width: '100%',
                                    boxSizing: 'border-box',
                                    borderRadius: '2px',
                                    border: '1px solid #0189DE',
                                    background:
                                        'linear-gradient(270deg, #009DF5 -21.58%, #012468 121.58%), linear-gradient(270deg, #04A7CA -21.58%, #001E87 121.58%)',
                                }}
                                children={[<SummPairPlayerNumber />]}
                            />
                        ) : (
                            <></>
                        ),
                    ]}
                />,
                <Panel
                    style={{
                        flex: '1',
                        height: '100%',
                        margin: '0',
                        padding: '0',
                        position: 'relative',
                    }}
                    children={[
                        <Panel
                            className={'panel-board'}
                            style={{
                                width: '100%',
                                height: '71%',
                                zIndex: '3',
                                position: 'relative',
                                boxSizing: 'border-box',
                            }}
                            children={[
                                <SVGUnionPanel />,
                                BoardTieNumberAndAmount(),
                                SummaryTieNumber(),
                                <SVGIDNLogoTie />,
                                <ButtonToggleStatic
                                    onClick={() => {
                                        console.log('Tie');
                                        placeBetHanlder({ button: 'tie', group: 'tie' });
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
                                            symbol="tie"
                                            bet={{ button: 'tie', group: 'tie' }}
                                            style={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                width: isLandscape ? '4vw' : '5vh',
                                                height: isLandscape ? '4vw' : '5vh',
                                                transform: 'translate(-50%, -50%)',
                                                display: 'flex',
                                                gap: '0px',
                                                alignContent: 'center',
                                                justifyContent: 'center',
                                            }}
                                        ></CoinContainer>,
                                    ]}
                                />,
                            ]}
                        />,
                        <Panel
                            className="child-content"
                            style={{
                                width: '100%',
                                height: '58%',
                                bottom: '0px',
                                margin: '0px',
                                zIndex: '2',
                            }}
                            children={[<SVGPairsPanel />]}
                        />,
                    ]}
                />,
                <Panel
                    style={{
                        flex: '1',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '2px',
                        height: '100%',
                        margin: '0px 0px 0px 0px',
                        boxSizing: 'border-box',
                    }}
                    children={[
                        <Panel
                            className={'panel-board'}
                            style={{
                                flex: '3.5',
                                width: '100%',
                                borderRadius: '2px',
                                border: '1px solid #F30049',
                                position: 'relative',
                                boxSizing: 'border-box',
                                background: !isLandscape
                                    ? 'linear-gradient(270deg, #59001B -0.72%, #F30049 100.72%)'
                                    : 'linear-gradient(0deg, #59001B 4.15%, #F30049 95.28%)',
                            }}
                            children={[
                                BoardBankNumberAndAmount(),
                                SummaryBankNumber(),
                                <CardAreaBank slotCard={props.slotCardB} submit={props.submit} />,
                                <ButtonToggleStatic
                                    onClick={() => {
                                        placeBetHanlder({ button: 'banker', group: 'banker' });
                                    }}
                                    id="toggle-bank"
                                    style={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: 'rgba(0,0,0,0)',
                                        border: 'none',
                                    }}
                                    children={[
                                        <CoinContainer
                                            symbol="banker"
                                            bet={{ button: 'banker', group: 'banker' }}
                                            style={{
                                                position: 'absolute',
                                                top: '50%',
                                                right: '0px',
                                                transform: 'translateY(-50%)',
                                                width: isLandscape ? '4vw' : '4vh',
                                                height: isLandscape ? '4vw' : '4vh',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '0px',
                                                alignContent: 'center',
                                                justifyContent: 'center',
                                            }}
                                        ></CoinContainer>,
                                    ]}
                                />,
                            ]}
                        />,
                        !isLandscape ? (
                            <Panel
                                className={'panel-board'}
                                style={{
                                    flex: '1',
                                    width: '100%',
                                    borderRadius: '2px',
                                    boxSizing: 'border-box',
                                    border: '1px solid #F30049',
                                    background:
                                        'linear-gradient(270deg, #59001B -0.72%, #F30049 100.72%)',
                                }}
                                children={[<SummPairBankerNumber />]}
                            />
                        ) : (
                            <></>
                        ),
                    ]}
                />,
            ]}
        />
    );
}

//more info
function BoardContainerGameStatsDetail(props: any) {
    return (
        <Panel
            className={props.className}
            style={{
                flex: '1',
                display: 'flex',
                height: '100%',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '2px',
            }}
            children={[
                <Panel
                    style={{
                        display: 'flex',
                        flex: '0',
                        padding: '4px 0px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'stretch',
                        borderRadius: '2px',
                        background:
                            'linear-gradient(90deg, rgba(103, 101, 101, 0.00) 0%, rgba(103, 101, 101, 0.54) 49.71%, rgba(103, 101, 101, 0.00) 100%)',
                    }}
                    children={[
                        <Label
                            style={{
                                color: '#FFF',
                                textAlign: 'center',
                                fontFamily: 'Manrope',
                                fontSize: '8px',
                                fontStyle: 'normal',
                                fontWeight: '800',
                                lineHeight: 'normal',
                                letterSpacing: '0.25px',
                                textTransform: 'uppercase',
                                margin: '0px',
                            }}
                            value="tie on"
                        />,
                    ]}
                />,
                <BrightSideRowDetail />,
                <DarkSideRowDetail />,
            ]}
        />
    );
}

/*Begin Landscape part*/
function LandscapePlayerOption() {
    const background = 'linear-gradient(270deg, #009DF5 -21.58%, #012468 121.58%)';
    return (
        <Panel className="flex-side-board">
            <CardDetailInfo
                symbol="playerbonus"
                textContent="PLAYER BONUS"
                textHeader=""
                borderRadius="6px 2px 2px 2px"
                border="1px solid #0189DE"
                background={background}
            />
            <CardDetailInfo
                symbol="playerpair"
                textContent="PLAYER PAIR"
                textHeader="11:1"
                border="1px solid #0189DE"
                background={background}
            />
            <CardDetailInfo
                symbol="small"
                textContent="SMALL"
                textHeader="0.54:1"
                border="1px solid #0189DE"
                background={background}
            />
        </Panel>
    );
}

function LandscapeBankerOption() {
    const background = 'linear-gradient(270deg, #59001B -0.72%, #F30049 100.72%)';
    return (
        <Panel className="flex-side-board">
            <CardDetailInfo
                symbol="bankbonus"
                forceRight={true}
                textContent="BANKER BONUS"
                textHeader=""
                borderRadius="2px 6px 2px 2px"
                border="1px solid #F30049"
                background={background}
            />
            <CardDetailInfo
                symbol="bankerpair"
                forceRight={true}
                textContent="BANKER PAIR"
                textHeader="11:1"
                border="1px solid #F30049"
                background={background}
            />
            <CardDetailInfo
                symbol="big"
                forceRight={true}
                textContent="BIG"
                textHeader="0.54:1"
                border="1px solid #F30049"
                background={background}
            />
        </Panel>
    );
}
/*End Landscape part*/

function BoardContainerInfoGame(props: any) {
    const isLandscape = useAppSelector(selectIsLandscape);

    const cardContainer = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const updateDimensions = () => {
        if (cardContainer.current) {
            const { width, height } = cardContainer.current.getBoundingClientRect();
            const updateHeight: number = (width * 145) / 356;
            setDimensions({ width: width, height: updateHeight });
            console.log('Bet Panel: ' + width + ', ' + height);
        }
    };

    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    return (
        <>
            {isLandscape ? <LandscapePlayerOption /> : <></>}
            <div
                ref={cardContainer}
                className={isLandscape == true ? 'flex-main-item' : ''}
                style={
                    !isLandscape
                        ? {
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              paddingTop: '2px',
                              paddingRight: '10px',
                              paddingLeft: '10px',
                              position: 'relative',
                              width: '100%',
                              height: `${dimensions.height}px`,
                              boxSizing: 'border-box',
                              flexShrink: '0',
                          }
                        : {
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              paddingTop: '0px',
                              paddingRight: '0px',
                              paddingLeft: '0px',
                              flex: '4',
                              position: 'relative',
                              width: '100%',
                              boxSizing: 'border-box',
                              flexShrink: '0',
                          }
                }
            >
                <BoardContainerGameStats
                    className={`panel-appear ${props.isDetail == true ? 'disappear' : ''}`}
                    slotCardP={props.slotCardP}
                    slotCardB={props.slotCardB}
                    submit={props.submit}
                />
                <BoardContainerGameStatsDetail
                    className={`panel-appear ${props.isDetail == false ? 'disappear' : ''}`}
                />
            </div>
            {isLandscape ? <LandscapeBankerOption /> : <></>}
        </>
    );
}

export function BoardInfoGame(props: any) {
    const isLandscape = useAppSelector(selectIsLandscape);
    // console.log({ slotP: props.slotCardP });
    // console.log({ slotB: props.slotCardB });

    if (isLandscape) {
        return (
            <>
                <BoardContainerInfoGame
                    isDetail={props.isDetail}
                    slotCardP={props.slotCardP}
                    slotCardB={props.slotCardB}
                    submit={props.submit}
                />
            </>
        );
    }

    return (
        <>
            <BoardHeaderInfoGame />
            <BoardContainerInfoGame
                isDetail={props.isDetail}
                slotCardP={props.slotCardP}
                slotCardB={props.slotCardB}
                submit={props.submit}
            />
        </>
    );
}
