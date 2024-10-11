import { usePlaceBet } from "../../../common/hooks/usePlaceBet"
import { DisplayHelper } from "../../../common/utils/DisplayHelper"
import { useAppSelector } from "../../../store/hooks"
import { selectBetIsOpen } from "../../../store/slice/timerSlice"
import { DragonTigerBHelper } from "../../utils/DragonTigerBHelper"
import { RenderCard } from "../TableBet/RenderCard/RenderCard"
import BetDragon from "./ButtonBet/BetDragon"
import BetDragonPair from "./ButtonBet/BetDragonPair"
import BetDragonWild from "./ButtonBet/BetDragonWild"
import BetSuperWild from "./ButtonBet/BetSuperWild"
import BetTie from "./ButtonBet/BetTie"
import BetTiger from "./ButtonBet/BetTiger"
import BetTigerPair from "./ButtonBet/BetTigerPair"
import BetTigerWild from "./ButtonBet/BetTigerWild"
import styles from "./index.module.scss"



const TableBet = () => {
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);
    const betIsOpen = useAppSelector(selectBetIsOpen);
    const { placeBetHandler } = usePlaceBet();
    const scanNumber = useAppSelector((state) => state.result.scanNumber);
    const isSuperWildLose = !betIsOpen && scanNumber && scanNumber.submit && !(scanNumber.dragon_value == scanNumber.tiger_value && scanNumber.dragon_value == scanNumber.wild_value)

    return <div className={`${styles["table-bet"]} ${deviceClassName} ${betIsOpen ? styles.opened : styles.closed}`}>

        <BetDragonWild
            bet={DragonTigerBHelper.betsTop["dragon-wild"]}
            onClick={() => placeBetHandler(DragonTigerBHelper.betsTop["dragon-wild"])}
        />

        <BetTigerWild
            bet={DragonTigerBHelper.betsTop["tiger-wild"]}
            onClick={() => placeBetHandler(DragonTigerBHelper.betsTop["tiger-wild"])}
        />
        <BetDragon
            bet={DragonTigerBHelper.betsMid["dragon"]}
            onClick={() => placeBetHandler(DragonTigerBHelper.betsMid["dragon"])}
        />
        <BetTiger
            bet={DragonTigerBHelper.betsMid["tiger"]}
            onClick={() => placeBetHandler(DragonTigerBHelper.betsMid["tiger"])}
        />
        <BetDragonPair
            bet={DragonTigerBHelper.betsBottom["dragon-pair"]}
            onClick={() => placeBetHandler(DragonTigerBHelper.betsBottom["dragon-pair"])}
        />

        <BetTigerPair
            bet={DragonTigerBHelper.betsBottom["tiger-pair"]}
            onClick={() => placeBetHandler(DragonTigerBHelper.betsBottom["tiger-pair"])}
        />

        <div className={styles["center"]}>
            <BetSuperWild
                bet={DragonTigerBHelper.betsCenter["superwild"]}
                onClick={() => placeBetHandler(DragonTigerBHelper.betsCenter["superwild"])} />

            <BetTie
                bet={DragonTigerBHelper.betsCenter["tie"]}
                onClick={() => placeBetHandler(DragonTigerBHelper.betsCenter["tie"])} />

            <div className={`${styles['slot-card']}`} style={{}}>

                <RenderCard
                    top="0%"
                    right="unset"
                    left={DisplayHelper.getOrientation() == "portrait"? "40%": "35%"}
                    position={{ x: '5px', y: '5px' }}
                    rotation={{ z: '0deg' }}
                    opacity={isSuperWildLose?0.6:1}
                    value={scanNumber ? scanNumber.wild : ''}
                    appear={
                        !betIsOpen
                    }
                    disappear={!scanNumber}
                    submit={scanNumber && scanNumber.submit == true}
                />

            </div>
        </div>

        <div className={`${styles["stick"]} ${styles["left"]}`}>
            <div className={styles["long"]}></div>
            <div className={styles["stick-top"]}></div>
            <div className={styles["stick-bottom"]}></div>
            <div className={styles["top-ornamen"]}>
                <div className={styles["top-ornamen-circle"]}></div>
            </div>
            <div className={styles["bottom-ornamen"]}>
                <div className={styles["bottom-ornamen-circle"]}></div>
            </div>
        </div>

        <div className={`${styles["stick"]} ${styles["right"]}`}>
            <div className={`${styles["long"]}`}></div>
            <div className={`${styles["stick-top"]}`}></div>
            <div className={`${styles["stick-bottom"]}`}></div>
            <div className={`${styles["top-ornamen"]}`}>
                <div className={`${styles["top-ornamen-circle"]}`}></div>
            </div>
            <div className={`${styles["bottom-ornamen"]}`}>
                <div className={`${styles["bottom-ornamen-circle"]}`}></div>
            </div>
        </div>

    </div>
}

export default TableBet;