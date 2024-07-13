export class StringUtility {
  public static formatNumber(num: number, locale: string = "en-US"): string {
    return num.toLocaleString(locale);
  }

  public static formatNumberCurrency(
    num: number,
    currency: string,
    locale: string = "en-US"
  ): string {
    return `${currency} ${num.toLocaleString(locale)}`;
  }

  public static formatStringToArray(input: string): string[] {
    return input.split("-").map((item) => (item === "x" ? "" : item));
  }

  public static splitCharStringToArray(input: string): string[] {
    return input.split("");
  }

  public static numToString(input: number): string {
    if (input >= 1_000_000) {
      const result = input / 1_000_000;
      return Number.isInteger(result) ? `${result}m` : `${result.toFixed(1)}m`;
    } else if (input >= 1_000) {
      const result = input / 1_000;
      return Number.isInteger(result) ? `${result}k` : `${result.toFixed(1)}k`;
    } else {
      return input.toString();
    }
  }

  public static stringToDateTime(input: string): string {
    const dateObject = new Date(input);
    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString();
    const day = dateObject.getDate().toString();
    const hours = dateObject.getHours().toString();
    const minutes = dateObject.getMinutes().toString();
    const seconds = dateObject.getSeconds().toString();

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }
}
