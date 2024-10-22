import { AnimationEventHandler, useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
    doneResult,
    resetResult,
    selectScanNumber,
    // selectWinAmount,
    // selectWinStatus,
} from '../../../store/slice/resultSlice';
import { WIN_NOTIFICATION_DURATION } from '../../../common/utils/GameHelper';
import { GraphicComponentProps } from '../../../common/components/MiniHowToPlay/Slide';
import Graphic from '../../../common/components/MiniHowToPlay/Slide/Graphic';
import { selectBetIsOpen } from '../../../store/slice/timerSlice';

interface AnimationSrcXGraphicComponentProps extends GraphicComponentProps {
    animationSrc: string;
}
export const GraphicComponent = ({
    isActive,
    animationSrc,
}: AnimationSrcXGraphicComponentProps) => (
    <Graphic isActive={isActive} animationSrc={animationSrc} />
);

const Result = () => {
    const resultRef = useRef<HTMLDivElement>(null);
    const currentTimeOut = useRef<ReturnType<typeof setTimeout>>();

    const dispatch = useAppDispatch();

    const scanNumber = useAppSelector(selectScanNumber);
    const resultStatus = scanNumber && scanNumber.submit ? 'done' : 'idle';
    const handleAnimationEnd: AnimationEventHandler<HTMLDivElement> = (e) => {
        if (e.animationName === 'fadeIn') {
            dispatch(doneResult());
        }

        if (e.animationName === 'fadeOut') {
            dispatch(resetResult());
        }
    };

    useEffect(() => {
        if (resultStatus === 'done') {
            currentTimeOut.current = setTimeout(() => {
                if (resultRef.current) {
                    resultRef.current.classList.add(styles.disapear);
                }
            }, WIN_NOTIFICATION_DURATION);
        }

        return () => {
            if (currentTimeOut.current) {
                clearTimeout(currentTimeOut.current);
                currentTimeOut.current = undefined;
            }
        };
    }, [resultStatus]);

    const betIsOpen = useAppSelector(selectBetIsOpen);

    if (!scanNumber || !scanNumber.submit) {
        return null;
    }

    const isDragonWildWin =
        !betIsOpen &&
        scanNumber &&
        scanNumber.submit &&
        scanNumber.dragon_value == scanNumber.wild_value &&
        scanNumber.wild_value > scanNumber.tiger_value;

    const isTigerWildWin =
        !betIsOpen &&
        scanNumber &&
        scanNumber.submit &&
        scanNumber.tiger_value == scanNumber.wild_value &&
        scanNumber.wild_value > scanNumber.dragon_value;

    const isDragonPairWin =
        !betIsOpen &&
        scanNumber &&
        scanNumber.submit &&
        scanNumber.dragon_value == scanNumber.wild_value &&
        !isDragonWildWin;

    const isTigerPairWin =
        !betIsOpen &&
        scanNumber &&
        scanNumber.submit &&
        scanNumber.tiger_value == scanNumber.wild_value &&
        !isTigerWildWin;

    const isSuperWildWin =
        !betIsOpen &&
        scanNumber &&
        scanNumber.submit &&
        scanNumber.dragon_value == scanNumber.tiger_value &&
        scanNumber.dragon_value == scanNumber.wild_value;

    const animationPopupSrcs = {
        'dragon-wild': 'https://cdn.lottielab.com/l/4uR2BzT712WVNp.json',
        'tiger-wild': 'https://cdn.lottielab.com/l/2DAi4hAoWhYydR.json',
        'dragon-pair': 'https://cdn.lottielab.com/l/EfsKJ2V7EMiXjY.json',
        'tiger-pair': 'https://cdn.lottielab.com/l/EfsKJ2V7EMiXjY.json',
        'super-wild': 'https://cdn.lottielab.com/l/5BGgqf4uFewdpS.json',
    };

    const animationPrizeSrcs = {
        'dragon-wild': 'https://cdn.lottielab.com/l/4Yf6VHmVu13FGR.json',
        'tiger-wild': 'https://cdn.lottielab.com/l/5MDZsDmdxN7Kmc.json',
        'dragon-pair': 'https://cdn.lottielab.com/l/2njtKW5UkLHtC4.json',
        'tiger-pair': 'https://cdn.lottielab.com/l/2njtKW5UkLHtC4.json',
        'super-wild': 'https://cdn.lottielab.com/l/3wHHqdNm53Ax1o.json',
    };

    const activeSrc = (animationData: typeof animationPopupSrcs) => {
        if (isDragonWildWin) return animationData['dragon-wild'];
        if (isTigerWildWin) return animationData['tiger-wild'];
        if (isDragonPairWin) return animationData['dragon-pair'];
        if (isTigerPairWin) return animationData['tiger-pair'];
        if (isSuperWildWin) return animationData['super-wild'];
        return '';
    };

    // const winAmount = useAppSelector(selectWinAmount);
    // const winStatus = useAppSelector(selectWinStatus);

    return (
        <div className={styles.result} onAnimationEnd={handleAnimationEnd} ref={resultRef}>
            {activeSrc(animationPopupSrcs) && (
                <GraphicComponent
                    isActive={scanNumber && scanNumber.submit}
                    animationSrc={activeSrc(animationPopupSrcs)}
                />
            )}

            {
                // !(winStatus === 'idle' || winAmount <= 0) &&
                activeSrc(animationPrizeSrcs) ? (
                    <GraphicComponent
                        isActive={scanNumber && scanNumber.submit}
                        animationSrc={activeSrc(animationPrizeSrcs)}
                    />
                ) : (
                    <></>
                )
            }
        </div>
    );
};

export default Result;
