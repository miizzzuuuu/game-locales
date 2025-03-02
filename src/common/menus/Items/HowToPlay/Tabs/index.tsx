import { useTranslation } from 'react-i18next';
import MenuTabs from '../../../MenuTabs';
import TabItem from '../../../MenuTabs/TabItem';
import { TabHowToPlay } from '../Content';

interface IProps {
    activeTab: TabHowToPlay;
    setActiveTab: (value: TabHowToPlay) => void;
}

const Tabs = ({ activeTab, setActiveTab }: IProps) => {
    const { t } = useTranslation();

    return (
        <MenuTabs>
            <TabItem
                text={t('game')}
                isActive={activeTab === 'game'}
                onClick={() => setActiveTab('game')}
            />
            <TabItem
                text={t('features')}
                isActive={activeTab === 'features'}
                onClick={() => setActiveTab('features')}
            />
        </MenuTabs>
    );
};

export default Tabs;
