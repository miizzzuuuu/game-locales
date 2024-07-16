import { SVGLogoBaccarat } from "../base/svglogobaccarat";
import { SVGLogoLoad } from "../base/svglogoload";
import { SVGPreloadBackground } from "../base/svgpreloadbg";

export function Preloader() {
  return (
    <div className="preloader-bg">
      <div className="preloader-bgimg">
        <SVGPreloadBackground />
      </div>
      <div className="preloader-logoimg">
        <SVGLogoBaccarat />
      </div>
      <div className="preloader-footer">
        <div className="preloader-logo-footer">
          <SVGLogoLoad />
        </div>
        <div className="preloader-progress-footer">
          <div className="progressbar-bg">
            <div className="progressbar-mask-value">
              <div
                className="progressbar-value"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
