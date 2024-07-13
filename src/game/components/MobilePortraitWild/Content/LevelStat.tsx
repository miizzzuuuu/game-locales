import { useMemo } from "react";

interface IProps {
    level: number
}

function LevelStat({ level }: IProps) {

    const levelMemo = useMemo(() => {

        if (level < 25)
            return <><rect
                width="2"
                height="1.5"
                x="3"
                fill="#fff"
                fillOpacity="0.28"
                rx="0.75"
            ></rect>
                <rect
                    width="4"
                    height="1.5"
                    x="2"
                    y="2.5"
                    fill="#fff"
                    fillOpacity="0.28"
                    rx="0.75"
                ></rect>
                <rect
                    width="6"
                    height="1.5"
                    x="1"
                    y="5"
                    fill="#fff"
                    fillOpacity="0.28"
                    rx="0.75"
                ></rect>
                <rect
                    width="8"
                    height="1.5"
                    y="7.5"
                    fill="#ED3838"
                    fillOpacity="1"
                    rx="0.75"
                ></rect>
            </>
        if (level < 50)
            return <><rect
                width="2"
                height="1.5"
                x="3"
                fill="#fff"
                fillOpacity="0.28"
                rx="0.75"
            ></rect>
                <rect
                    width="4"
                    height="1.5"
                    x="2"
                    y="2.5"
                    fill="#fff"
                    fillOpacity="0.28"
                    rx="0.75"
                ></rect>
                <rect
                    width="6"
                    height="1.5"
                    x="1"
                    y="5"
                    fill="#ed8238"
                    fillOpacity="1"
                    rx="0.75"
                ></rect>
                <rect
                    width="8"
                    height="1.5"
                    y="7.5"
                    fill="#ed8238"
                    fillOpacity="1"
                    rx="0.75"
                ></rect>
            </>
        if (level < 75)
            return <><rect
                width="2"
                height="1.5"
                x="3"
                fill="#fff"
                fillOpacity="0.28"
                rx="0.75"
            ></rect>
                <rect
                    width="4"
                    height="1.5"
                    x="2"
                    y="2.5"
                    fill="#fff"
                    fillOpacity="0.28"
                    rx="0.75"
                ></rect>
                <rect
                    width="6"
                    height="1.5"
                    x="1"
                    y="5"
                    fill="#edda38"
                    fillOpacity="1"
                    rx="0.75"
                ></rect>
                <rect
                    width="8"
                    height="1.5"
                    y="7.5"
                    fill="#edda38"
                    fillOpacity="1"
                    rx="0.75"
                ></rect>
            </>
        if (level <= 100)
            return <><rect
                width="2"
                height="1.5"
                x="3"
                fill="#38ED8C"
                fillOpacity="1"
                rx="0.75"
            ></rect>
                <rect
                    width="4"
                    height="1.5"
                    x="2"
                    y="2.5"
                    fill="#38ED8C"
                    fillOpacity="1"
                    rx="0.75"
                ></rect>
                <rect
                    width="6"
                    height="1.5"
                    x="1"
                    y="5"
                    fill="#38ED8C"
                    fillOpacity="1"
                    rx="0.75"
                ></rect>
                <rect
                    width="8"
                    height="1.5"
                    y="7.5"
                    fill="#38ED8C"
                    fillOpacity="1"
                    rx="0.75"
                ></rect>
            </>

    }, [level]);


    return (<>
        <div
            style={{
                display: "flex",
                width: "20%",
                height: "fit-content",
                justifyContent: "space-between"
            }}>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                // width="8"
                width="100%"
                // height="9"
                fill="none"
                display={"flex"}

                viewBox="0 0 8 9"
            >
                {levelMemo}
            </svg>
            <span
                style={{
                    // position: "absolute"
                    fontSize: "2vw"
                }}
            >
                {level}%
            </span>
        </div>
    </>
    );
}

export default LevelStat;
