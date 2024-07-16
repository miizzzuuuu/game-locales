export class CoinColorTemplate {
  public static GetColorTemplate(): Array<string> {
    return [
      "#8B8B8B",
      "#266EE9",
      "#FA3E3E",
      "#36A530",
      "#9547FF",
      "#F3B000",
      "#494949",
      "#45BCD6",
      "#FF8319",
      "#FF48B6",
    ];
  }

  public static GetColorByTemplateIndex(index: number): string {
    return this.GetColorTemplate()[index % this.GetColorTemplate().length];
  }

  public static GetColorByTemplateByAmount(
    amount: number,
    coins: Array<number>
  ): string {
    let getMatchIndex = 0;
    try {
      for (let i = 0; i < coins.length; i++) {
        if (amount >= coins[i]) {
          getMatchIndex = i;
        }
      }
      return this.GetColorByTemplateIndex(getMatchIndex);
    } catch (err: any) {
      console.log("Error: " + err.message);
      return "#fff";
    }
  }
}
