import LabelTranslate from "../../../../../../common/components/LabelTranslate";
import { getBasePcode } from "../../../../../../common/utils/GameHelper";
import { RenderCardV2 } from "../../../../ResultDTWildTransaction/base/rcard-v2";
import styles from "./style.module.scss";


interface CardExample {
    data: {
        "dragon": string
        "wild": string
        "tiger": string
    }
}

const CardExample = ({ data }: CardExample) => {
    const keyLang = getBasePcode();

    return <div className={styles["container"]}>
        {
            Object.keys(data).map((key)=>{
                return !!data[key] && <div className={styles["item"]}>
                    <LabelTranslate value={key} keyLang={keyLang} />
                    <RenderCardV2 value={data[key].concat("s")} visible={true} submit={true} />
                </div>
            })
        }
    </div>
}

export default CardExample