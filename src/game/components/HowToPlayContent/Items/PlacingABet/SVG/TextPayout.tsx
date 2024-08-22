import { SVGProps } from 'react';
import { StringHelper } from '../../../../../../common/utils/StringHelper';
import { TwentyFourDHelper } from '../../../../../utils/TwentyFourDHelper';

interface TextPayoutProps {
    tSpanAttributes?: SVGProps<SVGTSpanElement>;
    group: string;
}

const TextPayout = ({ group, tSpanAttributes }: TextPayoutProps) => {
    return (
        <text
            fill="white"
            fillOpacity="0.32"
            fontFamily="Manrope"
            fontSize="4.65116"
            fontWeight="bold"
            letterSpacing="-0.02em"
        >
            <tspan {...tSpanAttributes}>
                {StringHelper.formatNumber(TwentyFourDHelper.PAYOUT[group])}:1
            </tspan>
        </text>
    );
};

export default TextPayout;
