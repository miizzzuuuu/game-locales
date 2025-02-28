import { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
import { Sound } from '../../../services/sound';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { placeMultiBet, selectIdsBetAdd } from '../../../store/slice/bets';
import { setMessage } from '../../../store/slice/gameStateSlice';
import { selectLastBetData } from '../../../store/slice/lastBetsSlice';
import { selectBalance } from '../../../store/slice/playerSlice';
import { selectAutoRebet, updateSetings } from '../../../store/slice/settingsSlice';
import { selectBetIsOpen } from '../../../store/slice/timerSlice';
import ButtonAction from '../ButtonAction';
import SVGIconPause from './SVG/SVGIconPause';
import SVGIconRebet from './SVG/SVGIconRebet';

interface IProps {
    styles?: CSSProperties;
    show?: boolean;
}

const ButtonRebet = ({ show, styles }: IProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const autoRebet = useAppSelector(selectAutoRebet);

    const lastBetData = useAppSelector(selectLastBetData);

    const idsBetAdd = useAppSelector(selectIdsBetAdd);

    const betIsOpen = useAppSelector(selectBetIsOpen);
    const balance = useAppSelector(selectBalance);

    const isActive = lastBetData.length > 0 && idsBetAdd.length === 0 && betIsOpen;

    const handleClick = () => {
        if (autoRebet) {
            dispatch(
                updateSetings({
                    autoRebet: false,
                }),
            );
            return;
        }

        if (!isActive) return;

        // validation
        let totalRebet = 0;
        lastBetData.forEach((data) => {
            totalRebet += data.value;
        });

        if (totalRebet > balance) {
            const message = t('insuffix-balance');

            console.log('bet error', message);
            dispatch(
                setMessage({
                    value: message,
                    type: 'danger',
                }),
            );

            return;
        }

        dispatch(placeMultiBet(lastBetData));
    };

    return (
        <ButtonAction
            show={show}
            label={t(`${autoRebet ? 'stop' : 'rebet'}`, { lng: 'en' })}
            icon={autoRebet ? <SVGIconPause /> : <SVGIconRebet />}
            circle={autoRebet}
            background={autoRebet ? 'rgba(255, 0, 77, 0.20)' : undefined}
            borderColor={autoRebet ? '#FF004D' : undefined}
            style={styles}
            disabled={!isActive && !autoRebet}
            custonSound={autoRebet ? undefined : () => Sound.playPlaceMultipleBet()}
            onClick={handleClick}
        />
    );
};

export default ButtonRebet;
