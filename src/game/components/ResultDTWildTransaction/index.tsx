import { useRef } from 'react';
import { PcodeDragonTigerWild, Transaction } from '../../../types';
import RenderCardV2 from '../Card/RenderCard2';
import DragonOrnamen from './SVG/DragonOrnamen';
import TigerOrnamen from './SVG/TigerOrnamen';
import styles from './styles.module.scss';

interface IProps {
    data: Transaction<PcodeDragonTigerWild>;
}

function getValueOfLeterCard(letter: string) {
    if (letter == 'A') return 1;
    if (letter == 'T') return 10;
    if (letter == 'J') return 11;
    if (letter == 'Q') return 12;
    if (letter == 'K') return 13;
}

const ResultDTWildTransaction = ({ data }: IProps) => {
    const { detail_result } = data;

    if (!detail_result || Array.isArray(detail_result)) {
        return null;
    }

    const winner = detail_result.result;
    const slotCardDragon = detail_result.dragon;
    const slotCardTiger = detail_result.tiger;
    const slotCardWild = detail_result.wild;

    const cardContainer = useRef<HTMLDivElement>(null);
    const cardContainer2 = useRef<HTMLDivElement>(null);

    return (
        <div className={styles.result}>
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    boxSizing: 'border-box',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: '0.3rem',
                }}
            >
                <div
                    style={{
                        flex: '1',
                        display: 'flex',
                        height: '6.8rem',
                        padding: '1.2rem',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderRadius: '0.4rem 0.2rem 0.2rem 0.4rem',
                        border:
                            winner == 'dragon' ? '0.06rem solid #F30049' : '0.06rem solid #4C4D66',
                        background:
                            winner == 'dragon'
                                ? 'linear-gradient(0deg, #F30049 -39.84%, rgba(1, 137, 222, 0.00) 100%)'
                                : 'linear-gradient(180deg, #42445F 0%, #2F3046 100%)',
                        position: 'relative',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            gap: '0.5rem',
                            position: 'absolute',
                            left: '0.7rem',
                            top: '0.7rem',
                            width: '80%',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                gap: '0.2rem',
                                alignItems: 'center',
                            }}
                        >
                            <p
                                style={{
                                    color: '#FFF',
                                    textAlign: 'center',
                                    textShadow: '0px 0.1rem 0.2rem rgba(0, 0, 0, 0.20)',
                                    fontFamily: 'Manrope',
                                    fontSize: '1.1rem',
                                    fontStyle: 'normal',
                                    fontWeight: '800',
                                    lineHeight: 'normal',
                                    letterSpacing: '0.011rem',
                                    textTransform: 'uppercase',
                                    padding: '0px',
                                    margin: '0px',
                                }}
                            >
                                DRAGON
                            </p>

                            <div
                                className="badge-win"
                                style={{
                                    display: winner == 'dragon' ? 'flex' : 'none',
                                    padding: '0px',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    zIndex: 2,
                                    position: 'absolute',
                                    right: 0,
                                }}
                            >
                                <p
                                    style={{
                                        color: '#FFF',
                                        textAlign: 'center',
                                        textShadow: '0px 0.1rem 0.2rem rgba(0, 0, 0, 0.20)',
                                        fontFamily: 'Manrope',
                                        fontSize: '1.2rem',
                                        fontStyle: 'normal',
                                        fontWeight: '800',
                                        lineHeight: 'normal',
                                        letterSpacing: '0.011rem',
                                        textTransform: 'uppercase',
                                        padding: '0px',
                                        margin: '0px',
                                        borderRadius: '0.3rem',
                                        border: '0.04rem solid #51FF15',
                                        background:
                                            'linear-gradient(108deg, rgba(59, 232, 0, 0.75) 2.97%, rgba(64, 248, 0, 0.75) 49.79%, rgba(59, 232, 0, 0.75) 98.51%)',
                                        boxShadow: '-0.2rem 0.4rem 0.6rem 0px rgba(0, 0, 0, 0.20)',
                                        backdropFilter: 'blur(0.4rem)',
                                    }}
                                >
                                    WIN
                                </p>
                            </div>
                        </div>

                        <p
                            style={{
                                color: '#FFF',
                                textAlign: 'center',
                                textShadow: '0px 0.1rem 0.2rem rgba(0, 0, 0, 0.20)',
                                fontFamily: 'Manrope',
                                fontSize: '1.8rem',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                lineHeight: 'normal',
                                letterSpacing: '0.011rem',
                                textTransform: 'uppercase',
                                padding: '0px',
                                margin: '0px',
                            }}
                        >
                            {Number(
                                isNaN(Number(detail_result.dragon[0]))
                                    ? getValueOfLeterCard(detail_result.dragon[0])
                                    : detail_result.dragon[0],
                            )}
                        </p>
                    </div>

                    <DragonOrnamen />

                    <div
                        ref={cardContainer}
                        className="player-cards-board-history"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            gap: '0.3rem',
                            position: 'absolute',
                            right: '1rem',
                            bottom: '0.5rem',
                            height: '46%',
                        }}
                    >
                        <div
                            className="card-container-item"
                            style={{
                                height: '100%',
                                width: `2rem`,
                                background: 'rgba(255, 255, 255, 0)',
                                marginRight: '1.5rem',
                                marginTop: '-0.5rem',
                            }}
                        >
                            <RenderCardV2
                                value={slotCardDragon}
                                style={{ width: '2rem', fontSize: '2rem' }}
                            />
                        </div>
                    </div>
                </div>
                <div
                    className="mid-board-history"
                    style={{
                        flex: '1',
                        display: 'flex',
                        alignSelf: 'stretch',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'stretch',
                        borderRadius: '0.4rem 0.2rem 0.2rem 0.4rem',
                        position: 'relative',
                        height: '6.8rem',
                        minWidth: 'calc(100%/3)',
                    }}
                >
                    <span>
                        <div
                            className={[
                                styles.triangle_border_1,
                                detail_result.wild[0] == detail_result.dragon[0] &&
                                detail_result.wild[0] == detail_result.tiger[0]
                                    ? styles.win
                                    : '',
                            ].join(' ')}
                        ></div>

                        <div
                            className={[
                                styles.triangle_1,
                                detail_result.wild[0] == detail_result.dragon[0] &&
                                detail_result.wild[0] == detail_result.tiger[0]
                                    ? styles.win
                                    : '',
                            ].join(' ')}
                        >
                            <span
                                style={{
                                    wordSpacing: '2rem',
                                    paddingLeft: '0.5rem',
                                    paddingTop: '0.25rem',
                                    width: '5rem',
                                    display: 'flex',
                                }}
                            >
                                SUPER WILD
                            </span>
                        </div>
                    </span>

                    <span>
                        <div
                            className={[
                                styles.triangle_border,
                                detail_result.dragon[0] == detail_result.tiger[0] ? styles.win : '',
                            ].join(' ')}
                        ></div>
                        <div
                            className={[
                                styles.triangle,
                                detail_result.dragon[0] == detail_result.tiger[0] ? styles.win : '',
                            ].join(' ')}
                        >
                            <span
                                style={{
                                    float: 'right',
                                    wordSpacing: '2rem',
                                    paddingLeft: '2.5rem',
                                    paddingTop: '3.25rem',
                                    width: '5rem',
                                    display: 'flex',
                                }}
                            >
                                TIE
                            </span>
                        </div>
                    </span>
                    <div
                        className="badge-win"
                        style={{
                            display:
                                detail_result.wild[0] == detail_result.tiger[0] &&
                                detail_result.wild[0] == detail_result.dragon[0]
                                    ? 'flex'
                                    : 'none',
                            padding: '0px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            top: '3rem',
                            left: '0.5rem',
                            zIndex: 2,
                        }}
                    >
                        <p
                            style={{
                                color: '#FFF',
                                textAlign: 'center',
                                textShadow: '0px 0.1rem 0.2rem rgba(0, 0, 0, 0.20)',
                                fontFamily: 'Manrope',
                                fontSize: '1.2rem',
                                fontStyle: 'normal',
                                fontWeight: '800',
                                lineHeight: 'normal',
                                letterSpacing: '0.011rem',
                                textTransform: 'uppercase',
                                padding: '0px',
                                margin: '0px',
                                borderRadius: '0.3rem',
                                border: '0.04rem solid #51FF15',
                                background:
                                    'linear-gradient(108deg, rgba(59, 232, 0, 0.75) 2.97%, rgba(64, 248, 0, 0.75) 49.79%, rgba(59, 232, 0, 0.75) 98.51%)',
                                boxShadow: '-0.2rem 0.4rem 0.6rem 0px rgba(0, 0, 0, 0.20)',
                                backdropFilter: 'blur(0.4rem)',
                            }}
                        >
                            WIN
                        </p>
                    </div>
                    <div
                        className="badge-win"
                        style={{
                            display: winner == 'tie' ? 'flex' : 'none',
                            padding: '0px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            bottom: '2.5rem',
                            right: '0.5rem',
                            zIndex: 2,
                        }}
                    >
                        <p
                            style={{
                                color: '#FFF',
                                textAlign: 'center',
                                textShadow: '0px 0.1rem 0.2rem rgba(0, 0, 0, 0.20)',
                                fontFamily: 'Manrope',
                                fontSize: '1.2rem',
                                fontStyle: 'normal',
                                fontWeight: '800',
                                lineHeight: 'normal',
                                letterSpacing: '0.011rem',
                                textTransform: 'uppercase',
                                padding: '0px',
                                margin: '0px',
                                borderRadius: '0.3rem',
                                border: '0.04rem solid #51FF15',
                                background:
                                    'linear-gradient(108deg, rgba(59, 232, 0, 0.75) 2.97%, rgba(64, 248, 0, 0.75) 49.79%, rgba(59, 232, 0, 0.75) 98.51%)',
                                boxShadow: '-0.2rem 0.4rem 0.6rem 0px rgba(0, 0, 0, 0.20)',
                                backdropFilter: 'blur(0.4rem)',
                            }}
                        >
                            WIN
                        </p>
                    </div>

                    <div
                        className="card-container-item"
                        style={{
                            height: '2.5rem',
                            width: `2rem`,
                            background: 'rgba(255, 255, 255, 0)',
                            left: '50%',
                            top: '50%',
                            position: 'absolute',
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <RenderCardV2
                            value={slotCardWild}
                            style={{ width: '2rem', fontSize: '2rem' }}
                        />
                    </div>
                </div>
                <div
                    className="banker-board-history"
                    style={{
                        flex: '1',
                        display: 'flex',
                        height: '6.8rem',
                        padding: '1.2rem',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderRadius: '0.2rem 0.4rem 0.4rem 0.2rem',
                        border:
                            winner == 'tiger' ? '0.06rem solid #FF7A00' : '0.06rem solid #4C4D66',
                        background:
                            winner == 'tiger'
                                ? 'linear-gradient(0deg, #FF7A00 -39.84%, rgba(243, 0, 73, 0.00) 100%)'
                                : 'linear-gradient(180deg, #42445F 0%, #2F3046 100%)',
                        position: 'relative',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                            gap: '0.5rem',
                            position: 'absolute',
                            right: '0.7rem',
                            top: '0.7rem',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                gap: '0.2rem',
                                alignItems: 'center',
                            }}
                        >
                            <div
                                className="badge-win"
                                style={{
                                    display: winner == 'tiger' ? 'flex' : 'none',
                                    padding: '0px',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    zIndex: 2,
                                }}
                            >
                                <p
                                    style={{
                                        color: '#FFF',
                                        textAlign: 'center',
                                        textShadow: '0px 0.1rem 0.2rem rgba(0, 0, 0, 0.20)',
                                        fontFamily: 'Manrope',
                                        fontSize: '1.2rem',
                                        fontStyle: 'normal',
                                        fontWeight: '800',
                                        lineHeight: 'normal',
                                        letterSpacing: '0.11px',
                                        textTransform: 'uppercase',
                                        padding: '0px',
                                        margin: '0px',
                                        borderRadius: '0.3rem',
                                        border: '0.04rem solid #51FF15',
                                        background:
                                            'linear-gradient(108deg, rgba(59, 232, 0, 0.75) 2.97%, rgba(64, 248, 0, 0.75) 49.79%, rgba(59, 232, 0, 0.75) 98.51%)',
                                        boxShadow: '-0.2rem 0.4rem 0.6rem 0px rgba(0, 0, 0, 0.20)',
                                        backdropFilter: 'blur(0.4rem)',
                                    }}
                                >
                                    WIN
                                </p>
                            </div>
                            <p
                                style={{
                                    color: '#FFF',
                                    textAlign: 'center',
                                    textShadow: '0px 0.1rem 0.2rem rgba(0, 0, 0, 0.20)',
                                    fontFamily: 'Manrope',
                                    fontSize: '1.1rem',
                                    fontStyle: 'normal',
                                    fontWeight: '800',
                                    lineHeight: 'normal',
                                    letterSpacing: '0.011rem',
                                    textTransform: 'uppercase',
                                    padding: '0px',
                                    margin: '0px',
                                }}
                            >
                                TIGER
                            </p>
                        </div>

                        <p
                            style={{
                                color: '#FFF',
                                textAlign: 'center',
                                textShadow: '0px 1px 0.2rem rgba(0, 0, 0, 0.20)',
                                fontFamily: 'Manrope',
                                fontSize: '1.8rem',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                lineHeight: 'normal',
                                letterSpacing: '0.011rem',
                                textTransform: 'uppercase',
                                padding: '0px',
                                margin: '0px',
                            }}
                        >
                            {Number(
                                isNaN(Number(detail_result.tiger[0]))
                                    ? getValueOfLeterCard(detail_result.tiger[0])
                                    : detail_result.tiger[0],
                            )}
                        </p>
                    </div>

                    <TigerOrnamen />

                    <div
                        ref={cardContainer2}
                        className="banker-cards-board-history"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            gap: '0.3rem',
                            position: 'absolute',
                            left: '1rem',
                            bottom: '0.5rem',
                            height: '46%',
                        }}
                    >
                        <div
                            className="card-container-item"
                            style={{
                                height: '100%',
                                width: `2rem`,
                                background: 'rgba(255, 255, 255, 0)',
                                marginLeft: '0.5rem',
                                marginTop: '-0.5rem',
                            }}
                        >
                            <RenderCardV2
                                value={slotCardTiger}
                                style={{ width: '2rem', fontSize: '2rem' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultDTWildTransaction;
