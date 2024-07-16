export function ButtonToggle(props: any) {
    return (
        <button
            className={props.className}
            style={props.style}
            onClick={() => {
                props.onClick?.();
            }}
        >
            {props.text}
            {props.children}
        </button>
    );
}
