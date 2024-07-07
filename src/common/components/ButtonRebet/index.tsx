import { CSSProperties } from 'react';
import ButtonAction from '../ButtonAction';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectSettings, updateSetings } from '../../../store/slice/settingsSlice';
import { selectLastBetData } from '../../../store/slice/lastBetsSlice';
import { placeMultiBet, selectIdsBetAdd } from '../../../store/slice/betAddSlice';
import { selectBetIsOpen } from '../../../store/slice/timerSlice';
import LabelTranslate from '../LabelTranslate';
import { Sound } from '../../../services/sound';
import SVGIconPause from './SVG/SVGIconPause';
import SVGIconRebet from './SVG/SVGIconRebet';
import { selectBalance } from '../../../store/slice/playerSlice';
import { useAppTranslate } from '../../../services/i18next/hooks';
import { setMessage } from '../../../store/slice/gameStateSlice';
interface IProps {
    styles?: CSSProperties;
    show?: boolean;
}

const ButtonRebet = ({ show, styles }: IProps) => {
    const dispatch = useAppDispatch();

    const { t } = useAppTranslate();

    const settings = useAppSelector(selectSettings);
    const autoRebet = settings.autoRebet;

    const lastBetData = useAppSelector(selectLastBetData);
    const idsBetAdd = useAppSelector(selectIdsBetAdd);
    const betIsOpen = useAppSelector(selectBetIsOpen);
    const balance = useAppSelector(selectBalance);

    const isActive = lastBetData.length > 0 && idsBetAdd.length === 0 && betIsOpen;

    const handleClick = () => {
        if (autoRebet) {
            dispatch(
                updateSetings({
                    ...settings,
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
            label={<LabelTranslate value={`${autoRebet ? 'stop' : 'rebet'}`} />}
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
