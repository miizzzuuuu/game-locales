import { useTranslation } from 'react-i18next';
import MenuTabs from '../../../MenuTabs';
import TabItem from '../../../MenuTabs/TabItem';
import { TabTransactions } from '../Content';

interface IProps {
    activeTab: TabTransactions;
    setActiveTab: (value: TabTransactions) => void;
}

const Tabs = ({ activeTab, setActiveTab }: IProps) => {
    const { t } = useTranslation();

    return (
        <MenuTabs>
            <TabItem
                text={t('today')}
                isActive={activeTab === 'today'}
                onClick={() => setActiveTab('today')}
            />
            <TabItem
                text={t('previous')}
                isActive={activeTab === 'previous'}
                onClick={() => setActiveTab('previous')}
            />
        </MenuTabs>
    );
};

export default Tabs;
