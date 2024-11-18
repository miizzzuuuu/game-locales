import { useEffect, useState } from 'react';
import { getBasePcode } from '../../../../../common/utils/GameHelper';
import { useAppSelector } from '../../../../../store/hooks';
import { dataColumns, layouts } from '../../BaccaratRoads';
import styles from './styles.module.scss';

interface IProps {
    activeColumns: number;
}

const Roadmap = ({ activeColumns }: IProps) => {
    const darkMode = false;
    const isLandscape = true;

    const GameRoadmap = layouts[getBasePcode()];
    const data = useAppSelector((state) => state.history.history);
    const scanNumber = useAppSelector((state) => state.result.scanNumber);
    const [historyBlink, setBlink] = useState(false);

    useEffect(() => {
        if (!!(scanNumber && scanNumber.submit)) {
            setBlink(true);
            setTimeout(() => {
                setBlink(false);
            }, 15000);
        }
    }, [!!(scanNumber && scanNumber.submit)]);

    const [fullSection, setFullSection] = useState<
        '' | 'big-road' | 'big-eye-road' | 'small-road' | 'cockroach-road' | ''
    >('');

    const handleClick = (type: typeof fullSection) => {
        setFullSection((old) => {
            console.log(old);
            console.log(type);
            return fullSection != type ? type : '';
        });
    };

    return (
        <div className={styles.container}>
            <GameRoadmap.grid.a col={activeColumns} stroke={darkMode ? '#595A77' : '#F4F4F4'}>
                <GameRoadmap.layout
                    {...{ historyBlink, darkMode }}
                    history={data}
                    full={fullSection}
                    isLandscape={isLandscape}
                    onClick={() => handleClick('big-road')}
                    totalColumns={activeColumns}
                    type="big-road"
                />
                <GameRoadmap.layout
                    {...{ historyBlink, darkMode }}
                    history={data}
                    full={fullSection}
                    isLandscape={isLandscape}
                    onClick={() => handleClick('big-eye-road')}
                    totalColumns={dataColumns[activeColumns]}
                    type="big-eye-road"
                />
                <GameRoadmap.layout
                    {...{ historyBlink, darkMode }}
                    history={data}
                    full={fullSection}
                    isLandscape={isLandscape}
                    onClick={() => handleClick('small-road')}
                    totalColumns={dataColumns[activeColumns]}
                    type="small-road"
                />

                <GameRoadmap.layout
                    {...{ historyBlink, darkMode }}
                    history={data}
                    full={fullSection}
                    isLandscape={isLandscape}
                    onClick={() => handleClick('cockroach-road')}
                    totalColumns={dataColumns[activeColumns]}
                    type="cockroach-road"
                />
            </GameRoadmap.grid.a>
        </div>
    );
};

export default Roadmap;
