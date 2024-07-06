import LabelTranslate from '../../../../components/LabelTranslate';
import MenuTabs from '../../../MenuTabs';
import TabItem from '../../../MenuTabs/TabItem';

import { TabTransactions } from '../Content';

interface IProps {
    activeTab: TabTransactions;
    setActiveTab: (value: TabTransactions) => void;
}

const Tabs = ({ activeTab, setActiveTab }: IProps) => {
    return (
        <MenuTabs>
            <TabItem
                text={<LabelTranslate value="today" />}
                isActive={activeTab === 'today'}
                onClick={() => setActiveTab('today')}
            />
            <TabItem
                text={<LabelTranslate value="previous" />}
                isActive={activeTab === 'previous'}
                onClick={() => setActiveTab('previous')}
            />
        </MenuTabs>
    );
};

export default Tabs;
