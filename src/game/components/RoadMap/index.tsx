import { useEffect, useState } from 'react';
import stylesPortrait from './roadmap-portrait.module.scss';
import stylesLandscape from './roadmap-landscape.module.scss';
import './style.scss';
import M23 from "./layout/game/M23";
import M22 from './layout/game/M22';
import { useAppSelector } from '../../../store/hooks';
import { DisplayHelper } from '../../../common/utils/DisplayHelper';
import { GameHelper } from '../../../common/utils/GameHelper';
import M27 from './layout/game/M27';
import { selectBetIsOpen } from '../../../store/slice/timerSlice';
import { BaccaratGrid } from './layout/base/BaccaratGrid';
// import { dummyM22history } from './dummyData';

export type TypeRoadmap = 'color' | 'pattern' | 'number';

interface IProps {
    tableSection?: "less" | "more"
    isLandscape?: boolean
}

export const layouts: any = {
    "m22": { layout: M22, rightType: "bead-road" },
    "m23": { layout: M23, rightType: "bead-road" },
    "m27": { layout: M27, rightType: "shio" },
    "": { layout: M23, rightType: "" }
}

function RoadMap(props: IProps) {
    const showPatternUI = useAppSelector((state) => state.history.showPatternUI);
    const betIsOpen = useAppSelector(selectBetIsOpen);
    const styles = DisplayHelper.getOrientation() == "landscape" ? stylesLandscape : stylesPortrait;
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
    }, [!!(scanNumber && scanNumber.submit)])

    const isZoom = props.tableSection == "less";
    const { isLandscape } = props;
    const [fullSection, setFullSection] = useState<
        "" |
        "big-road" |
        "big-eye-road" |
        "small-road" |
        "cockroach-road" |
        ""
    >("");

    const handleClick = (type: typeof fullSection) => {
        setFullSection((old) => {
            console.log(old)
            console.log(type);

            return fullSection != type ? type : "";

        });
    }
    if (!GameHelper.getBasePcode()) return null;
    const GameRoadmap = layouts[GameHelper.getBasePcode()];

    return (betIsOpen && DisplayHelper.getOrientation() == "landscape" && showPatternUI) || DisplayHelper.getOrientation() == "portrait" ? (

        <div className={styles.container}>
            {GameRoadmap.layout.ShoeStat && <GameRoadmap.layout.ShoeStat />}
            <div className={styles.scrolledYRoadmap.concat("  ").concat(isZoom ? styles.zoom : "")}

            >
                <div
                    className={styles.roadmapContent.concat(" ").concat(isZoom ? styles.zoom : "")}>
                    <div className="roadmap-container big-road">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"

                            height={"100%"}
                            fill="none"
                            viewBox="0 0 294 102"
                        >
                            <rect width="294" height="102" fill={darkMode ? "#414258" : "#fff"} rx="6"></rect>
                            <BaccaratGrid stroke={darkMode ? "#595A77" : "#F4F4F4"} />

                            <GameRoadmap.layout
                                {...{ historyBlink, darkMode }}
                                history={data}
                                full={fullSection}
                                isLandscape={isLandscape}
                                onClick={() => handleClick("big-road")}
                                type="big-road" />
                            <GameRoadmap.layout
                                {...{ historyBlink, darkMode }}
                                history={data}
                                full={fullSection}
                                isLandscape={isLandscape}
                                onClick={() => handleClick("big-eye-road")}
                                type="big-eye-road" />
                            <GameRoadmap.layout
                                {...{ historyBlink, darkMode }}
                                history={data}
                                full={fullSection}
                                isLandscape={isLandscape}
                                onClick={() => handleClick("small-road")}
                                type="small-road" />

                            <GameRoadmap.layout
                                {...{ historyBlink, darkMode }}
                                history={data}
                                full={fullSection}
                                isLandscape={isLandscape}
                                onClick={() => handleClick("cockroach-road")}
                                type="cockroach-road" />
                        </svg>


                    </div>
                    <div className="roadmap-container big-road">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height={"100%"}
                            fill="none"
                            viewBox="0 0 294 102"
                        >
                            <rect width="294" height="102" fill={darkMode ? "#414258" : "#fff"} rx="6"></rect>
                            <BaccaratGrid stroke={darkMode ? "#595A77" : "#F4F4F4"} />

                            <GameRoadmap.layout
                                {...{ historyBlink, darkMode }}
                                history={data}
                                full={fullSection}
                                isLandscape={isLandscape}
                                onClick={() => handleClick("")}
                                type={GameRoadmap.rightType}
                            />

                        </svg>

                    </div>
                </div>
            </div>
        </div>
    )
        : <></>;
}




export default RoadMap;

