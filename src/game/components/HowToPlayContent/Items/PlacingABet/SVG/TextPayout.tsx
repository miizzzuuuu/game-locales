import { SVGProps } from 'react';
import { StringHelper } from '../../../../../../common/utils/StringHelper';
import { _24DHelper } from '../../../../../utils/_24DHelper';
import { useTranslation } from 'react-i18next';

interface TextPayoutProps {
    tSpanAttributes?: SVGProps<SVGTSpanElement>;
    group: string;
}

const TextPayout = ({ group, tSpanAttributes }: TextPayoutProps) => {
    const { i18n } = useTranslation();

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
                {StringHelper.formatNumber(_24DHelper.PAYOUT[group], i18n.language)}:1
            </tspan>
        </text>
    );
};

export default TextPayout;
