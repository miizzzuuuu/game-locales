import { useTranslation } from 'react-i18next';
import { StringHelper } from '../../../../common/utils/StringHelper';

interface IProps {
    totalChip: number;
    totalUser: number;
    float: 'left' | 'right';
}

function PlacementStat({ totalChip, float, totalUser }: IProps) {
    totalChip;
    totalUser;

    const { i18n } = useTranslation();

    return (
        <>
            <div
                className="text-white/[.75]"
                style={{
                    display: 'flex',
                    width: '100%',
                    float,
                    marginTop: '-10%',
                    flexDirection: 'column',
                    fontStyle: 'normal',
                    fontWeight: 800,
                    lineHeight: 'normal',
                    letterSpacing: '0.09px',
                    textTransform: 'uppercase',
                    fontFamily: 'Manrope',
                    opacity: 0.5,
                }}
            >
                {float == 'right' ? (
                    <>
                        <div
                            style={{
                                fontSize: '72%',
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}
                        >
                            {StringHelper.formatNumber(1123123, i18n.language)}
                        </div>
                        <div
                            style={{
                                fontSize: '72%',
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row-reverse',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10%"
                                    fill="none"
                                    display="flex"
                                    viewBox="0 0 8 8"
                                >
                                    <path
                                        fill="#fff"
                                        fillOpacity="0.75"
                                        d="M4 1.08c-.846 0-1.534.688-1.534 1.534 0 .846.688 1.534 1.534 1.534.846 0 1.534-.688 1.534-1.534 0-.846-.688-1.534-1.534-1.534zM5.909 5.173A2.187 2.187 0 004.34 4.51h-.682c-.591 0-1.148.235-1.568.662a2.236 2.236 0 00-.648 1.577c0 .094.076.17.17.17h4.773a.17.17 0 00.17-.17c0-.593-.23-1.153-.647-1.577z"
                                    ></path>
                                </svg>
                                {StringHelper.formatNumber(1230, i18n.language)}
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div
                            style={{
                                fontSize: '72%',
                                display: 'flex',
                                justifyContent: 'flex-start',
                            }}
                        >
                            {StringHelper.formatNumber(1123123, i18n.language)}
                        </div>
                        <div
                            style={{
                                fontSize: '72%',
                                display: 'flex',
                                justifyContent: 'flex-start',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10%"
                                    fill="none"
                                    display="flex"
                                    viewBox="0 0 8 8"
                                >
                                    <path
                                        fill="#fff"
                                        fillOpacity="0.75"
                                        d="M4 1.08c-.846 0-1.534.688-1.534 1.534 0 .846.688 1.534 1.534 1.534.846 0 1.534-.688 1.534-1.534 0-.846-.688-1.534-1.534-1.534zM5.909 5.173A2.187 2.187 0 004.34 4.51h-.682c-.591 0-1.148.235-1.568.662a2.236 2.236 0 00-.648 1.577c0 .094.076.17.17.17h4.773a.17.17 0 00.17-.17c0-.593-.23-1.153-.647-1.577z"
                                    ></path>
                                </svg>
                                {StringHelper.formatNumber(1300, i18n.language)}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default PlacementStat;
