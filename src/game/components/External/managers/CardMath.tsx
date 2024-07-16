import { StringUtility } from "./StringUtility";

export class CardMath {
  public static getBaccaratPoint(card: string): number {
    const displayValue = StringUtility.splitCharStringToArray(card);
    if (displayValue.length < 2) {
      return 0;
    }

    if (
      displayValue[0] == "T" ||
      displayValue[0] == "K" ||
      displayValue[0] == "J" ||
      displayValue[0] == "Q"
    )
      return 0;
    if (displayValue[0] == "A") return 1;

    try {
      return Number(displayValue[0]);
    } catch {
      return 0;
    }
  }

  public static getAdjustment(num: number): number {
    if (num < 10) return num;

    const numStr = num.toString();

    if (numStr.length > 1) {
      return parseInt(numStr[1]);
    }

    return 0;
  }
}
