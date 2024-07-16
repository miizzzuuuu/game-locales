import { useSelector } from "react-redux";
import { StateMainPage } from "../../model/betselection";
import { useEffect, useRef } from "react";

export function WebStream(props: any) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isLandscape = useSelector((state: StateMainPage) => state.landscape);
  const useVideo = useSelector(
    (state: StateMainPage) => state.settings.itemsVideo.enable
  );
  const focusIframe = () => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.focus();
    }
  };
  useEffect(() => {
    focusIframe();
  }, []);

  useEffect(() => {
    focusIframe();
  }, [useVideo]);
  return (
    <div
      className={isLandscape ? "web-stream-landscape" : "web-stream"}
      style={{ zIndex: props.zIndex }}
    >
      {useVideo == true ? (
        <iframe
          ref={iframeRef}
          className="web-stream-iframe"
          src={props.src}
        ></iframe>
      ) : (
        <></>
      )}
    </div>
  );
}
