import LabelTranslate from '../../../../components/LabelTranslate';
import MenuTabs from '../../../MenuTabs';
import TabItem from '../../../MenuTabs/TabItem';
import { TabHowToPlay } from '../Content';

interface IProps {
    activeTab: TabHowToPlay;
    setActiveTab: (value: TabHowToPlay) => void;
}

const Tabs = ({ activeTab, setActiveTab }: IProps) => {
    return (
        <MenuTabs>
            <TabItem
                text={<LabelTranslate value="game" />}
                isActive={activeTab === 'game'}
                onClick={() => setActiveTab('game')}
            />
            <TabItem
                text={<LabelTranslate value="features" />}
                isActive={activeTab === 'features'}
                onClick={() => setActiveTab('features')}
            />
        </MenuTabs>
    );
};

export default Tabs;
