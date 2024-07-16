import { Panel } from "../base/panel";
import { Label } from "../base/label";
import { SVGRenderer } from "../base/svg";
import { StringUtility } from "../../managers/StringUtility";
import { useSelector } from "react-redux";
import { StateMainPage } from "../../model/betselection";

export function FooterUserInfo(props: any) {
  const currentCode = useSelector((state: StateMainPage) => state.code);
  const requesting = props.doRequesting;
  const dataAuth = props.dataFetch;
  const dataDetail = props.dataDetail;
  let usernickname = "";
  let currency = "";
  let balance = 0;
  let periodId = 0;
  let serverName = "";
  let betMin = 0;
  let betMax = 0;
  if (dataAuth != null) {
    usernickname = dataAuth.user.nickname;
    currency = dataAuth.user.currency;
    balance = dataAuth.user.balance;
  } else {
    usernickname = "....";
    currency = "";
    balance = 0;
  }
  if (dataDetail != null) {
    serverName = dataDetail[currentCode].name;
    betMin = dataDetail[currentCode].min;
    betMax = dataDetail[currentCode].max;
    periodId = dataDetail[currentCode].periode;
  } else {
    serverName = "";
    betMin = 0;
    betMax = 0;
    periodId = 0;
  }
  return (
    <Panel
      className="footer-ui"
      children={[
        <Panel
          style={{
            display: "flex",
            height: "auto",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "0.2rem",
          }}
          children={[
            <Label
              value={requesting ? "..." : usernickname}
              style={{
                color: "#85879D",
                fontSize: "0.9rem",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                margin: "0",
              }}
            />,
            <Label
              value={
                requesting
                  ? "..."
                  : `${currency} ${StringUtility.formatNumber(balance)}`
              }
              style={{
                color: "#FFFFFF",
                fontSize: "1.1rem",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                letterSpacing: "-0.22px",
                margin: "0",
              }}
            />,
          ]}
        />,
        <Panel
          children={[
            <SVGRenderer className="child-content" />,
            <Panel
              className="child-content"
              style={{
                top: "50%",
                left: "50%",
                width: "80%",
                transform: "translate(-50%, -50%)",
                margin: "0px 0px 0px 0px",
              }}
              children={[
                <Panel
                  style={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  children={[
                    <Label
                      value="%bet-amount%"
                      style={{
                        color: "#FFF",
                        fontSize: "0.8rem",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "normal",
                        margin: "0",
                      }}
                    />,
                    <Label
                      value="IDR 0"
                      style={{
                        color: "#00C3D8",
                        fontSize: "1.2rem",
                        fontStyle: "normal",
                        fontWeight: "800",
                        lineHeight: "normal",
                        letterSpacing: "-0.024rem",
                        margin: "0",
                      }}
                    />,
                  ]}
                />,
              ]}
            />,
          ]}
          style={{
            width: "13rem",
            height: "100%",
            flexShrink: 0,
            position: "relative",
          }}
        />,
        <Panel
          style={{
            display: "flex",
            height: "100%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: "0.2rem",
          }}
          children={[
            <Label
              value={`#${periodId} ${serverName}`}
              style={{
                color: "#85879D",
                fontSize: "0.9rem",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                margin: "0",
                textAlign: "right",
              }}
            />,
            <Label
              value={`${currency} ${StringUtility.formatNumber(
                betMin
              )} - ${StringUtility.formatNumber(betMax)}`}
              style={{
                color: "#FFFFFF",
                fontSize: "1rem",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                letterSpacing: "-0.02rem",
                margin: "0",
                textAlign: "right",
              }}
            />,
          ]}
        />,
      ]}
    />
  );
}
