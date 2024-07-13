import { useEffect, useState } from 'react';
import stylesPortrait from './roadmap-portrait.module.scss';
import stylesLandscape from './roadmap-landscape.module.scss';
import './style.scss';
import M23 from "./M23";
import M22 from './M22';
import { pcode } from './BaccaratRoadmaps';
import { useAppSelector } from '../../../store/hooks';
import { DisplayHelper } from '../../../common/utils/DisplayHelper';



export type TypeRoadmap = 'color' | 'pattern' | 'number';

interface IProps {
    tableSection?: "less" | "more"
    isLandscape?: boolean
}

function RoadMap(props: IProps) {

    const styles = DisplayHelper.getOrientation() == "landscape" ? stylesLandscape : stylesPortrait;
    const darkMode = false;
    const data = dummyM22history.m23.history
    //useAppSelector((state) => state.history.history);
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

    // @ts-ignore
    if (pcode == "m22")
        return (
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
                            <GridRoad stroke={darkMode ? "#595A77" : "#F4F4F4"} />

                            <M22
                                {...{ pcode, historyBlink, darkMode }}
                                history={data}
                                full={fullSection}
                                isLandscape={isLandscape}
                                onClick={() => handleClick("big-road")}
                                type="big-road" />
                            <M22
                                {...{ pcode, historyBlink, darkMode }}
                                history={data}
                                full={fullSection}
                                isLandscape={isLandscape}
                                onClick={() => handleClick("big-eye-road")}
                                type="big-eye-road" />
                            <M22
                                {...{ pcode, historyBlink, darkMode }}
                                history={data}
                                full={fullSection}
                                isLandscape={isLandscape}
                                onClick={() => handleClick("small-road")}
                                type="small-road" />

                            <M22
                                {...{ pcode, historyBlink, darkMode }}
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
                            <GridRoad stroke={darkMode ? "#595A77" : "#F4F4F4"} />

                            <M22
                                {...{ pcode, historyBlink, darkMode }}
                                history={data}
                                full={fullSection}
                                isLandscape={isLandscape}
                                onClick={() => handleClick("")}
                                type="bead-road" />

                        </svg>

                    </div>
                </div>
            </div>
        );
    if (pcode == "m23")
        return (
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
                            <GridRoad stroke={darkMode ? "#595A77" : "#F4F4F4"} />

                            <M23
                                {...{ pcode, historyBlink, darkMode }}
                                history={data}
                                full={fullSection}
                                isLandscape={isLandscape}
                                onClick={() => handleClick("big-road")}
                                type="big-road" />
                            <M23
                                {...{ pcode, historyBlink, darkMode }}
                                history={data}
                                full={fullSection}
                                isLandscape={isLandscape}
                                onClick={() => handleClick("big-eye-road")}
                                type="big-eye-road" />
                            <M23
                                {...{ pcode, historyBlink, darkMode }}
                                history={data}
                                full={fullSection}
                                isLandscape={isLandscape}
                                onClick={() => handleClick("small-road")}
                                type="small-road" />

                            <M23
                                {...{ pcode, historyBlink, darkMode }}
                                history={data}
                                full={fullSection}
                                isLandscape={isLandscape}
                                onClick={() => handleClick("cockroach-road")}
                                type="cockroach-road" />


                        </svg>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height={"100%"}
                            fill="none"
                            viewBox="0 0 294 102"
                        >
                            <rect width="294" height="102" fill={darkMode ? "#414258" : "#fff"} rx="6"></rect>
                            <GridRoad stroke={darkMode ? "#595A77" : "#F4F4F4"} />

                            <M23
                                {...{ pcode, historyBlink, darkMode }}
                                history={data}
                                full={fullSection}
                                isLandscape={isLandscape}
                                onClick={() => handleClick("")}
                                // filter={activeRoadmapFilter}
                                type="bead-road" />

                        </svg>
                    </div>
                </div>
            </div>
        );

    return null;
}




export default RoadMap;


const GridRoad = ({ stroke }: {
    stroke: string
}) => <g className="grid-road">
        <path
            stroke={stroke}
            strokeWidth="0.8"
            d="M3 6a3 3 0 013-3h9v12H3V6z"
        ></path>
        <rect x="279" y="39" width="12" height="12" stroke={stroke} strokeWidth="0.8" />
        <path stroke={stroke} strokeWidth="0.8" d="M15 3H27V15H15z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M27 3H39V15H27z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M39 3H51V15H39z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M51 3H63V15H51z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M63 3H75V15H63z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M75 3H87V15H75z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M87 3H99V15H87z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M99 3H111V15H99z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M111 3H123V15H111z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M123 3H135V15H123z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M135 3H147V15H135z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M147 3H159V15H147z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M159 3H171V15H159z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M171 3H183V15H171z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M183 3H195V15H183z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M195 3H207V15H195z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M207 3H219V15H207z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M219 3H231V15H219z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M231 3H243V15H231z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M243 3H255V15H243z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M255 3H267V15H255z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M267 3H279V15H267z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M279 3H291V15H279z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M3 15H15V27H3z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M15 15H27V27H15z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M27 15H39V27H27z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M39 15H51V27H39z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M51 15H63V27H51z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M63 15H75V27H63z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M75 15H87V27H75z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M87 15H99V27H87z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M99 15H111V27H99z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M111 15H123V27H111z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M123 15H135V27H123z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M135 15H147V27H135z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M147 15H159V27H147z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M159 15H171V27H159z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M171 15H183V27H171z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M183 15H195V27H183z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M195 15H207V27H195z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M207 15H219V27H207z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M219 15H231V27H219z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M231 15H243V27H231z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M243 15H255V27H243z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M255 15H267V27H255z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M267 15H279V27H267z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M279 15H291V27H279z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M3 27H15V39H3z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M15 27H27V39H15z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M27 27H39V39H27z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M39 27H51V39H39z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M51 27H63V39H51z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M63 27H75V39H63z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M75 27H87V39H75z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M87 27H99V39H87z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M99 27H111V39H99z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M111 27H123V39H111z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M123 27H135V39H123z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M135 27H147V39H135z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M147 27H159V39H147z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M159 27H171V39H159z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M171 27H183V39H171z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M183 27H195V39H183z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M195 27H207V39H195z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M207 27H219V39H207z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M219 27H231V39H219z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M231 27H243V39H231z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M243 27H255V39H243z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M255 27H267V39H255z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M267 27H279V39H267z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M279 27H291V39H279z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M3 39H15V51H3z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M15 39H27V51H15z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M27 39H39V51H27z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M39 39H51V51H39z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M51 39H63V51H51z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M63 39H75V51H63z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M75 39H87V51H75z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M87 39H99V51H87z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M99 39H111V51H99z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M111 39H123V51H111z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M123 39H135V51H123z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M135 39H147V51H135z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M147 39H159V51H147z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M159 39H171V51H159z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M171 39H183V51H171z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M183 39H195V51H183z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M195 39H207V51H195z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M207 39H219V51H207z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M219 39H231V51H219z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M231 39H243V51H231z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M243 39H255V51H243z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M255 39H267V51H255z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M267 39H279V51H267z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M3 51H15V63H3z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M15 51H27V63H15z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M27 51H39V63H27z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M39 51H51V63H39z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M51 51H63V63H51z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M63 51H75V63H63z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M75 51H87V63H75z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M87 51H99V63H87z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M99 51H111V63H99z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M111 51H123V63H111z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M123 51H135V63H123z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M135 51H147V63H135z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M147 51H159V63H147z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M159 51H171V63H159z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M171 51H183V63H171z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M183 51H195V63H183z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M195 51H207V63H195z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M207 51H219V63H207z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M219 51H231V63H219z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M231 51H243V63H231z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M243 51H255V63H243z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M255 51H267V63H255z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M267 51H279V63H267z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M279 51H291V63H279z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M3 63H15V75H3z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M15 63H27V75H15z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M27 63H39V75H27z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M39 63H51V75H39z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M51 63H63V75H51z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M63 63H75V75H63z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M75 63H87V75H75z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M87 63H99V75H87z"></path>
        <path stroke={stroke} strokeWidth="0.8" d="M99 63H111V75H99z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M111 63H123V75H111z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M123 63H135V75H123z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M135 63H147V75H135z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M147 63H159V75H147z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M159 63H171V75H159z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M171 63H183V75H171z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M183 63H195V75H183z"></path>
        <path stroke={stroke} strokeWidth="0.8" d="M195 63H207V75H195z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M207 63H219V75H207z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M219 63H231V75H219z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M231 63H243V75H231z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M243 63H255V75H243z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M255 63H267V75H255z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M267 63H279V75H267z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M279 63H291V75H279z"></path>
        <path stroke={stroke} strokeWidth="0.8" d="M3 75H15V87H3z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M15 75H27V87H15z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M27 75H39V87H27z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M39 75H51V87H39z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M51 75H63V87H51z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M63 75H75V87H63z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M75 75H87V87H75z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M87 75H99V87H87z"></path>
        <path stroke={stroke} strokeWidth="0.8" d="M99 75H111V87H99z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M111 75H123V87H111z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M123 75H135V87H123z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M135 75H147V87H135z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M147 75H159V87H147z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M159 75H171V87H159z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M171 75H183V87H171z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M183 75H195V87H183z"></path>
        <path stroke={stroke} strokeWidth="0.8" d="M195 75H207V87H195z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M207 75H219V87H207z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M219 75H231V87H219z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M231 75H243V87H231z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M243 75H255V87H243z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M255 75H267V87H255z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M267 75H279V87H267z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M279 75H291V87H279z"></path>
        <path
            stroke={stroke}
            strokeWidth="0.8"
            d="M3 87h12v12H6a3 3 0 01-3-3v-9z"
        ></path>

        <path stroke={stroke} strokeWidth="0.8" d="M15 87H27V99H15z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M27 87H39V99H27z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M39 87H51V99H39z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M51 87H63V99H51z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M63 87H75V99H63z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M75 87H87V99H75z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M87 87H99V99H87z"></path>
        <path stroke={stroke} strokeWidth="0.8" d="M99 87H111V99H99z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M111 87H123V99H111z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M123 87H135V99H123z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M135 87H147V99H135z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M147 87H159V99H147z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M159 87H171V99H159z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M171 87H183V99H171z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M183 87H195V99H183z"></path>
        <path stroke={stroke} strokeWidth="0.8" d="M195 87H207V99H195z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M207 87H219V99H207z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M219 87H231V99H219z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M231 87H243V99H231z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M243 87H255V99H243z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M255 87H267V99H255z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M267 87H279V99H267z"></path>

        <path stroke={stroke} strokeWidth="0.8" d="M279 87H291V99H279z"></path>
    </g>

export const dummyM22history = {
    "m23": {
        "history": [
            {
                "dragon": "6c",
                "tiger": "4c",
                "result": "tie",
                "value": 6,
                "tanggal": "2024-05-23 20:37:35",
                "periode": 15,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042993,
                "win": "dragon"
            },
            {
                "dragon": "2h",
                "tiger": "Qs",
                "result": "tiger",
                "value": 12,
                "tanggal": "2024-05-23 20:36:51",
                "periode": 14,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042992,
                "win": "tiger"
            },
            {
                "dragon": "6c",
                "tiger": "4c",
                "result": "dragon",
                "value": 6,
                "tanggal": "2024-05-23 20:37:35",
                "periode": 15,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042993,
                "win": "dragon"
            },
            {
                "dragon": "2h",
                "tiger": "Qs",
                "result": "tie",
                "value": 12,
                "tanggal": "2024-05-23 20:36:51",
                "periode": 14,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042992,
                "win": "tie"
            },
            {
                "dragon": "6c",
                "tiger": "4c",
                "result": "dragon",
                "value": 6,
                "tanggal": "2024-05-23 20:37:35",
                "periode": 15,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042993,
                "win": "tie"
            },
            {
                "dragon": "2h",
                "tiger": "Qs",
                "result": "tiger",
                "value": 12,
                "tanggal": "2024-05-23 20:36:51",
                "periode": 14,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042992,
                "win": "tiger"
            },
            {
                "dragon": "6c",
                "tiger": "4c",
                "result": "dragon",
                "value": 6,
                "tanggal": "2024-05-23 20:37:35",
                "periode": 15,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042993,
                "win": "dragon"
            },
            {
                "dragon": "2h",
                "tiger": "Qs",
                "result": "tiger",
                "value": 12,
                "tanggal": "2024-05-23 20:36:51",
                "periode": 14,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042992,
                "win": "tiger"
            },
            {
                "dragon": "6c",
                "tiger": "4c",
                "result": "dragon",
                "value": 6,
                "tanggal": "2024-05-23 20:37:35",
                "periode": 15,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042993,
                "win": "dragon"
            },
            {
                "dragon": "2h",
                "tiger": "Qs",
                "result": "tiger",
                "value": 12,
                "tanggal": "2024-05-23 20:36:51",
                "periode": 14,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042992,
                "win": "tiger"
            },
            {
                "dragon": "2s",
                "tiger": "5s",
                "result": "tiger",
                "value": 5,
                "tanggal": "2024-05-23 20:36:07",
                "periode": 13,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042991,
                "win": "tiger"
            },
            {
                "dragon": "Kd",
                "tiger": "6c",
                "result": "dragon",
                "value": 13,
                "tanggal": "2024-05-23 20:35:22",
                "periode": 12,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042990,
                "win": "dragon"
            },
            {
                "dragon": "8s",
                "tiger": "5h",
                "result": "dragon",
                "value": 8,
                "tanggal": "2024-05-23 20:34:38",
                "periode": 11,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042989,
                "win": "dragon"
            },
            {
                "dragon": "Td",
                "tiger": "6d",
                "result": "dragon",
                "value": 10,
                "tanggal": "2024-05-23 20:33:53",
                "periode": 10,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042988,
                "win": "dragon"
            },
            {
                "dragon": "Ah",
                "tiger": "Qd",
                "result": "tiger",
                "value": 12,
                "tanggal": "2024-05-23 20:33:06",
                "periode": 9,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042987,
                "win": "tiger"
            },
            {
                "dragon": "Ah",
                "tiger": "8h",
                "result": "tiger",
                "value": 8,
                "tanggal": "2024-05-23 20:32:21",
                "periode": 8,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042986,
                "win": "tiger"
            },
            {
                "dragon": "6s",
                "tiger": "3c",
                "result": "dragon",
                "value": 6,
                "tanggal": "2024-05-23 20:31:37",
                "periode": 7,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042985,
                "win": "dragon"
            },
            {
                "dragon": "6s",
                "tiger": "3c",
                "result": "dragon",
                "value": 6,
                "tanggal": "2024-05-23 20:31:37",
                "periode": 7,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042985,
                "win": "dragon"
            },
            {
                "dragon": "6s",
                "tiger": "3c",
                "result": "dragon",
                "value": 6,
                "tanggal": "2024-05-23 20:31:37",
                "periode": 7,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042985,
                "win": "dragon"
            },
            {
                "dragon": "6s",
                "tiger": "3c",
                "result": "dragon",
                "value": 6,
                "tanggal": "2024-05-23 20:31:37",
                "periode": 7,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042985,
                "win": "dragon"
            },
            {
                "dragon": "6s",
                "tiger": "3c",
                "result": "dragon",
                "value": 6,
                "tanggal": "2024-05-23 20:31:37",
                "periode": 7,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042985,
                "win": "dragon"
            },
            {
                "dragon": "6s",
                "tiger": "3c",
                "result": "dragon",
                "value": 6,
                "tanggal": "2024-05-23 20:31:37",
                "periode": 7,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042985,
                "win": "dragon"
            },
            {
                "dragon": "6s",
                "tiger": "3c",
                "result": "dragon",
                "value": 6,
                "tanggal": "2024-05-23 20:31:37",
                "periode": 7,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042985,
                "win": "dragon"
            },
            {
                "dragon": "6s",
                "tiger": "3c",
                "result": "dragon",
                "value": 6,
                "tanggal": "2024-05-23 20:31:37",
                "periode": 7,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042985,
                "win": "dragon"
            },
            {
                "dragon": "6s",
                "tiger": "3c",
                "result": "dragon",
                "value": 6,
                "tanggal": "2024-05-23 20:31:37",
                "periode": 7,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042985,
                "win": "dragon"
            },
            {
                "dragon": "6s",
                "tiger": "3c",
                "result": "dragon",
                "value": 6,
                "tanggal": "2024-05-23 20:31:37",
                "periode": 7,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042985,
                "win": "dragon"
            },
            {
                "dragon": "6s",
                "tiger": "3c",
                "result": "tiger",
                "value": 6,
                "tanggal": "2024-05-23 20:31:37",
                "periode": 7,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042985,
                "win": "dragon"
            },
            {
                "dragon": "6s",
                "tiger": "3c",
                "result": "dragon",
                "value": 6,
                "tanggal": "2024-05-23 20:31:37",
                "periode": 7,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042985,
                "win": "dragon"
            }, {
                "dragon": "6s",
                "tiger": "3c",
                "result": "dragon",
                "value": 6,
                "tanggal": "2024-05-23 20:31:37",
                "periode": 7,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042985,
                "win": "dragon"
            }, {
                "dragon": "6s",
                "tiger": "3c",
                "result": "dragon",
                "value": 6,
                "tanggal": "2024-05-23 20:31:37",
                "periode": 7,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042985,
                "win": "dragon"
            }, {
                "dragon": "6s",
                "tiger": "3c",
                "result": "dragon",
                "value": 6,
                "tanggal": "2024-05-23 20:31:37",
                "periode": 7,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042985,
                "win": "dragon"
            },
            {
                "dragon": "6s",
                "tiger": "3c",
                "result": "dragon",
                "value": 6,
                "tanggal": "2024-05-23 20:31:37",
                "periode": 7,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042985,
                "win": "dragon"
            },
            {
                "dragon": "6s",
                "tiger": "3c",
                "result": "dragon",
                "value": 6,
                "tanggal": "2024-05-23 20:31:37",
                "periode": 7,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042985,
                "win": "dragon"
            },
            {
                "dragon": "6c",
                "tiger": "4c",
                "result": "dragon",
                "value": 6,
                "tanggal": "2024-05-23 20:37:35",
                "periode": 15,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042993,
                "win": "dragon"
            },
            {
                "dragon": "2h",
                "tiger": "Qs",
                "result": "tiger",
                "value": 12,
                "tanggal": "2024-05-23 20:36:51",
                "periode": 14,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042992,
                "win": "tiger"
            },
            {
                "dragon": "6c",
                "tiger": "4c",
                "result": "dragon",
                "value": 6,
                "tanggal": "2024-05-23 20:37:35",
                "periode": 15,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042993,
                "win": "dragon"
            },
            {
                "dragon": "2h",
                "tiger": "Qs",
                "result": "tiger",
                "value": 12,
                "tanggal": "2024-05-23 20:36:51",
                "periode": 14,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042992,
                "win": "tiger"
            },
            {
                "dragon": "6c",
                "tiger": "4c",
                "result": "dragon",
                "value": 6,
                "tanggal": "2024-05-23 20:37:35",
                "periode": 15,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042993,
                "win": "dragon"
            },
            {
                "dragon": "2h",
                "tiger": "Qs",
                "result": "tiger",
                "value": 12,
                "tanggal": "2024-05-23 20:36:51",
                "periode": 14,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042992,
                "win": "tiger"
            },
            {
                "dragon": "6c",
                "tiger": "4c",
                "result": "dragon",
                "value": 6,
                "tanggal": "2024-05-23 20:37:35",
                "periode": 15,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042993,
                "win": "dragon"
            },
            {
                "dragon": "2h",
                "tiger": "Qs",
                "result": "tiger",
                "value": 12,
                "tanggal": "2024-05-23 20:36:51",
                "periode": 14,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042992,
                "win": "tiger"
            },
            {
                "dragon": "6c",
                "tiger": "4c",
                "result": "dragon",
                "value": 6,
                "tanggal": "2024-05-23 20:37:35",
                "periode": 15,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042993,
                "win": "dragon"
            },
            {
                "dragon": "2h",
                "tiger": "Qs",
                "result": "tiger",
                "value": 12,
                "tanggal": "2024-05-23 20:36:51",
                "periode": 14,
                "hitung": "1",
                "gamekey": 52636,
                "idnomor": 3042992,
                "win": "tiger"
            },
        ],
        "newSet": true,
        "roadmap": {
            "big_road": [
                {
                    "dragon": "3s",
                    "tiger": "2h",
                    "result": "dragon",
                    "value": 3,
                    "tanggal": "2024-05-23 20:38:20",
                    "periode": 16,
                    "hitung": "1",
                    "gamekey": 52636,
                    "idnomor": 3042994,
                    "win": "dragon"
                },
                {
                    "dragon": "6c",
                    "tiger": "4c",
                    "result": "dragon",
                    "value": 6,
                    "tanggal": "2024-05-23 20:37:35",
                    "periode": 15,
                    "hitung": "1",
                    "gamekey": 52636,
                    "idnomor": 3042993,
                    "win": "dragon"
                },
                {
                    "dragon": "2h",
                    "tiger": "Qs",
                    "result": "tiger",
                    "value": 12,
                    "tanggal": "2024-05-23 20:36:51",
                    "periode": 14,
                    "hitung": "1",
                    "gamekey": 52636,
                    "idnomor": 3042992,
                    "win": "tiger"
                },
                {
                    "dragon": "2s",
                    "tiger": "5s",
                    "result": "tiger",
                    "value": 5,
                    "tanggal": "2024-05-23 20:36:07",
                    "periode": 13,
                    "hitung": "1",
                    "gamekey": 52636,
                    "idnomor": 3042991,
                    "win": "tiger"
                },
                {
                    "dragon": "Kd",
                    "tiger": "6c",
                    "result": "dragon",
                    "value": 13,
                    "tanggal": "2024-05-23 20:35:22",
                    "periode": 12,
                    "hitung": "1",
                    "gamekey": 52636,
                    "idnomor": 3042990,
                    "win": "dragon"
                },
                {
                    "dragon": "8s",
                    "tiger": "5h",
                    "result": "dragon",
                    "value": 8,
                    "tanggal": "2024-05-23 20:34:38",
                    "periode": 11,
                    "hitung": "1",
                    "gamekey": 52636,
                    "idnomor": 3042989,
                    "win": "dragon"
                },
                {
                    "dragon": "Td",
                    "tiger": "6d",
                    "result": "dragon",
                    "value": 10,
                    "tanggal": "2024-05-23 20:33:53",
                    "periode": 10,
                    "hitung": "1",
                    "gamekey": 52636,
                    "idnomor": 3042988,
                    "win": "dragon"
                },
                {
                    "dragon": "Ah",
                    "tiger": "Qd",
                    "result": "tiger",
                    "value": 12,
                    "tanggal": "2024-05-23 20:33:06",
                    "periode": 9,
                    "hitung": "1",
                    "gamekey": 52636,
                    "idnomor": 3042987,
                    "win": "tiger"
                },
                {
                    "dragon": "Ah",
                    "tiger": "8h",
                    "result": "tiger",
                    "value": 8,
                    "tanggal": "2024-05-23 20:32:21",
                    "periode": 8,
                    "hitung": "1",
                    "gamekey": 52636,
                    "idnomor": 3042986,
                    "win": "tiger"
                },
                {
                    "dragon": "6s",
                    "tiger": "3c",
                    "result": "dragon",
                    "value": 6,
                    "tanggal": "2024-05-23 20:31:37",
                    "periode": 7,
                    "hitung": "1",
                    "gamekey": 52636,
                    "idnomor": 3042985,
                    "win": "dragon"
                },
                {
                    "dragon": "Qc",
                    "tiger": "9s",
                    "result": "dragon",
                    "value": 12,
                    "tanggal": "2024-05-23 20:30:53",
                    "periode": 6,
                    "hitung": "1",
                    "gamekey": 52636,
                    "idnomor": 3042984,
                    "win": "dragon"
                },
                {
                    "dragon": "Qs",
                    "tiger": "Jc",
                    "result": "dragon",
                    "value": 12,
                    "tanggal": "2024-05-23 20:30:08",
                    "periode": 5,
                    "hitung": "1",
                    "gamekey": 52636,
                    "idnomor": 3042983,
                    "win": "dragon"
                },
                {
                    "dragon": "3d",
                    "tiger": "5h",
                    "result": "tiger",
                    "value": 5,
                    "tanggal": "2024-05-23 20:29:23",
                    "periode": 4,
                    "hitung": "1",
                    "gamekey": 52636,
                    "idnomor": 3042982,
                    "win": "tiger"
                },
                {
                    "dragon": "Js",
                    "tiger": "5h",
                    "result": "dragon",
                    "value": 11,
                    "tanggal": "2024-05-23 20:28:39",
                    "periode": 3,
                    "hitung": "1",
                    "gamekey": 52636,
                    "idnomor": 3042981,
                    "win": "dragon"
                },
                {
                    "dragon": "Ks",
                    "tiger": "Kc",
                    "result": "tie",
                    "value": 13,
                    "tanggal": "2024-05-23 20:27:54",
                    "periode": 2,
                    "hitung": "1",
                    "gamekey": 52636,
                    "idnomor": 3042980,
                    "win": "tie"
                },
                {
                    "dragon": "7h",
                    "tiger": "3h",
                    "result": "tie",
                    "value": 7,
                    "tanggal": "2024-05-23 20:27:08",
                    "periode": 1,
                    "hitung": "1",
                    "gamekey": 52636,
                    "idnomor": 3042979,
                    "win": "tiger"
                }
            ]
        }
    }
}