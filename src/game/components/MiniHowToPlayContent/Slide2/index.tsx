import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalItem } from '../../../../common/components/MiniHowToPlay/Modal';
import { GraphicComponentProps } from '../../../../common/components/MiniHowToPlay/Slide';
import Content from '../../../../common/components/MiniHowToPlay/Slide/Content';
import Graphic from '../../../../common/components/MiniHowToPlay/Slide/Graphic';
import Title from '../../../../common/components/MiniHowToPlay/Slide/Title';
import { getUrlAnimation } from '../helper';
import styles from './styles.module.scss';

const keySlide = 'slide-2';

export const GraphicComponent = ({ isActive }: GraphicComponentProps) => {
    const { i18n } = useTranslation();
    const url = useMemo(() => getUrlAnimation(2, i18n.language), [i18n.language]);

    if (!isActive || !url) return null;

    return <Graphic isActive={isActive} animationSrc={url} className={styles.image} />;
};

const Slide2: ModalItem = {
    title: <Title keySlide={keySlide} />,
    graphic: (index: number) => <GraphicComponent isActive={index === 1} />,
    content: <Content keySlide={keySlide} />,
};

export default Slide2;
