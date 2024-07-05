import { CSSProperties, ReactNode } from 'react';
import Button from '../Button';

interface IProps {
    show?: boolean;
    label?: ReactNode | undefined;
    icon: JSX.Element;
    disabled?: boolean;
    borderColor?: string;
    circle?: boolean;
    background?: string;
    style?: CSSProperties;
    onClick?: () => void;
    custonSound?: () => void;
}

const ButtonAction = ({}: IProps) => {
    return (
        <div>
            <Button></Button>
        </div>
    );
};

export default ButtonAction;
