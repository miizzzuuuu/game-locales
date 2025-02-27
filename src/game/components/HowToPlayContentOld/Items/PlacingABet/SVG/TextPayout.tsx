import { SVGProps } from 'react';
import { useTranslation } from 'react-i18next';
import { formatNumber } from '../../../../../../common/utils/StringHelper';
import { PAYOUT } from '../../../../../utils/_24DHelper';

interface TextPayoutProps {
    tSpanAttributes?: SVGProps<SVGTSpanElement>;
    group: string;
}

const TextPayout = ({ group, tSpanAttributes }: TextPayoutProps) => {
    const { i18n } = useTranslation();

    return (
        <text
            fill="white"
            fillOpacity="0.3"
            fontFamily="Manrope"
            fontSize="4.65116"
            fontWeight="bold"
            letterSpacing="-0.02em"
        >
            <tspan {...tSpanAttributes}>{formatNumber(PAYOUT[group], i18n.language)}:1</tspan>
        </text>
    );
};

export default TextPayout;
