import { SVGIconError } from "../base/svgiconerror";

export function Popup(props: any) {
  let boolActive: boolean = false;
  boolActive = props.active as boolean;
  if (!boolActive) {
    return <></>;
  }
  return (
    <div className="popup-bg">
      <div className="popup-mainframe">
        <div className="popup-imgbox">
          <SVGIconError />
        </div>
        <div className="popup-title">
          <h3 style={{ color: "rgb(242, 30, 30)" }}>Error!</h3>
        </div>
        <div className="popup-detail">
          <p>Can't Reach Server. Please Check Your Connection</p>
        </div>
        <div className="popup-navigation">
          <button onClick={props.onClick}>Refresh</button>
        </div>
      </div>
    </div>
  );
}
