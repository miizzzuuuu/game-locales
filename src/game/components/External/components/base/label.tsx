import React from 'react';

export interface LabelParameter {
    className?: string;
    style?: React.CSSProperties;
    value?: string;
}

export const Label: React.FC<LabelParameter> = ({ value = '', className = '', style }) => {
    return (
        <p className={className} style={style}>
            {value}
        </p>
    );
};
