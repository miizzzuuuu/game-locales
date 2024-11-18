import { useEffect, useState } from 'react';
import { getBasePcode } from '../../../../../common/utils/GameHelper';
import { useAppSelector } from '../../../../../store/hooks';
import { dataColumns, layouts } from '../../BaccaratRoads';
import styles from './styles.module.scss';

interface IProps {
    activeColumns: number;
}

const HistoryResult = ({ activeColumns }: IProps) => {
    const darkMode = false;
    const isLandscape = true;

    const GameRoadmap = layouts[getBasePcode()];
    const [historyBlink, setBlink] = useState(false);
    const data = useAppSelector((state) => state.history.history);
    const scanNumber = useAppSelector((state) => state.result.scanNumber);

    useEffect(() => {
        if (scanNumber) {
            setBlink(true);
            setTimeout(() => {
                setBlink(false);
            }, 15000);
        }
    }, [scanNumber]);

    return (
        <>
            {GameRoadmap.layout.ShoeStat && <GameRoadmap.layout.ShoeStat />}
            <div className={styles.history}>
                <GameRoadmap.grid.b col={activeColumns} stroke={darkMode ? '#595A77' : '#F4F4F4'}>
                    <GameRoadmap.layout
                        {...{ historyBlink, darkMode }}
                        history={data}
                        isLandscape={isLandscape}
                        type={GameRoadmap.rightType}
                        totalColumns={dataColumns[activeColumns]}
                    />
                </GameRoadmap.grid.b>
            </div>
        </>
    );
};

export default HistoryResult;
