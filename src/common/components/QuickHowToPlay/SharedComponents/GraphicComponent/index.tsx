import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { getUrlAnimation } from '../../../../../game/components/QuickHowToPlayContent/helper';
import Graphic from '../Graphic';

type IProps = {
    isActive: boolean;
    slideNumber: number;
    className?: string;
};

const GraphicComponent = ({ isActive, slideNumber, className }: IProps) => {
    const { i18n } = useTranslation();
    const url = useMemo(
        () => getUrlAnimation(slideNumber, i18n.language),
        [i18n.language, slideNumber],
    );

    if (!isActive || !url) return null;

    return <Graphic isActive={isActive} animationSrc={url} className={className} />;
};

export default GraphicComponent;
