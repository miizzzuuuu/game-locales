import LabelTranslate from '../../../LabelTranslate';

interface IProps {
    keySlide: string;
}

const Title = ({ keySlide }: IProps) => {
    return <LabelTranslate type="h1" keyLang={`miniHtp.${keySlide}`} value="title" />;
};

export default Title;
