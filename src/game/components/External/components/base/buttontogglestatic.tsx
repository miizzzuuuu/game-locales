import { useAppSelector } from '../../../../../store/hooks';
import { selectBetIsOpen } from '../../../../../store/slice/timerSlice';

export function ButtonToggleStatic(props: any) {
    const betIsOpen = useAppSelector(selectBetIsOpen);
    return (
        <button
            className={props.className}
            style={props.style}
            onClick={() => {
                props.onClick?.();
            }}
            disabled={!betIsOpen}
        >
            {props.text}
            {props.children}
        </button>
    );
}
