import { useCallback, useState } from "react";
import { useWindowResize } from "./useWindowResize";
import { DisplayHelper } from "../utils/DisplayHelper";
import { DeviceType, Orientation } from "../types/TypeDisplay";

export const useSetSizeGame = () => {
  const [deviceType, setDeviceType] = useState<DeviceType>("desktop");
  const [orientation, setOrientation] = useState<Orientation>("landscape");

  const handler = useCallback(() => {
    if (typeof window !== "undefined") {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);

      const device = DisplayHelper.getDevice();
      const { widthScreen, heightScreen } = DisplayHelper.getWindowSize();

      setDeviceType(device.type);
      setOrientation(device.orientation);

      const size = DisplayHelper.size[device.type];

      DisplayHelper.setGameSize(size, widthScreen, heightScreen);
    }
  }, []);

  useWindowResize(handler);

  return { deviceType, orientation };
};
