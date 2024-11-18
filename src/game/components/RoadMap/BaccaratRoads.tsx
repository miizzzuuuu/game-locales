import { useEffect, useState } from 'react';
import stylesPortrait from './roadmap-portrait.module.scss';
import stylesLandscape from './roadmap-landscape.module.scss';
import './style.scss';
import M23 from './layout/game/M23';
import M22 from './layout/game/M22';
import { useAppSelector } from '../../../store/hooks';
import { getOrientation } from '../../../common/utils/DisplayHelper';
import { getBasePcode } from '../../../common/utils/GameHelper';
import M27 from './layout/game/M27';
import { BaccaratGrid } from './layout/base/BaccaratGrid';
import { ShiofightGrid } from './layout/base/ShiofightGrid';

export type TypeRoadmap = 'color' | 'pattern' | 'number';

export const dataColumns: Record<number, number> = {
    24: 14,
    21: 12,
    18: 10,
    15: 8,
};

interface IProps {
    tableSection?: 'less' | 'more';
    isLandscape?: boolean;
    activeColumns: keyof typeof dataColumns;
}

export const layouts: any = {
    m22: { layout: M22, rightType: 'bead-road', grid: { a: BaccaratGrid, b: BaccaratGrid } },
    m23: { layout: M23, rightType: 'bead-road', grid: { a: BaccaratGrid, b: BaccaratGrid } },
    m27: { layout: M27, rightType: 'shio', grid: { a: BaccaratGrid, b: ShiofightGrid } },
    '': { layout: M23, rightType: '', grid: { a: BaccaratGrid, b: BaccaratGrid } },
};

function BaccaratRoads(props: IProps) {
    const styles = getOrientation() == 'landscape' ? stylesLandscape : stylesPortrait;
    const darkMode = false;
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

    const isZoom = props.tableSection == 'less';
    const { isLandscape, activeColumns } = props;
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
    if (!getBasePcode()) return null;
    const GameRoadmap = layouts[getBasePcode()];
    return (
        <div
            className={styles.container}
            style={
                {
                    // opacity: ((DisplayHelper.getOrientation() == "landscape") && showPatternUI) || ((!DisplayHelper.isMobile() && showPatternUI)) || (DisplayHelper.isMobile() && DisplayHelper.getOrientation() == "portrait") ? 1 : 0
                }
            }
        >
            {GameRoadmap.layout.ShoeStat && <GameRoadmap.layout.ShoeStat />}
            <div className={styles.scrolledYRoadmap.concat('  ').concat(isZoom ? styles.zoom : '')}>
                <div
                    className={styles.roadmapContent.concat(' ').concat(isZoom ? styles.zoom : '')}
                >
                    <div className="roadmap-container">
                        <GameRoadmap.grid.a
                            col={activeColumns}
                            stroke={darkMode ? '#595A77' : '#F4F4F4'}
                        >
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
                    <div className="roadmap-container">
                        <GameRoadmap.grid.b
                            col={activeColumns}
                            stroke={darkMode ? '#595A77' : '#F4F4F4'}
                        >
                            <GameRoadmap.layout
                                {...{ historyBlink, darkMode }}
                                history={data}
                                full={fullSection}
                                isLandscape={isLandscape}
                                onClick={() => handleClick('')}
                                type={GameRoadmap.rightType}
                                totalColumns={dataColumns[activeColumns]}
                            />
                        </GameRoadmap.grid.b>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BaccaratRoads;
