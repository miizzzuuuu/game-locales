import type { DeviceType, GameSize, Orientation, Platform } from '../../types';

type SetStyleDisplayParams = {
    scale: number;
    scaleWidth: number;
    scaleHeight: number;
    widthGame: number;
    heightGame: number;
    widthScreen: number;
    heightScreen: number;
};

const GAME_SIZE: Record<string, GameSize> = {
    desktop: {
        width: Number(import.meta.env.VITE_DESKTOP_WIDTH || 1920),
        height: Number(import.meta.env.VITE_DESKTOP_HEIGHT || 1080),
    },
    'mobile-landscape': {
        width: Number(import.meta.env.VITE_MOBILE_LANDSCAPE_WIDTH || 720),
        height: Number(import.meta.env.VITE_MOBILE_LANDSCAPE_HEIGHT || 360),
    },
    'mobile-portrait': {
        width: Number(import.meta.env.VITE_MOBILE_PORTRAIT_WIDTH || 360),
        height: Number(import.meta.env.VITE_MOBILE_PORTRAIT_HEIGHT || 720),
    },
};

const getLetterOrPillarBoxActive = () => {
    if (typeof window === 'undefined') return false;

    const { type: device } = getDevice();
    if (device === 'desktop') return false;

    const { innerWidth: width, innerHeight: height } = window;
    const aspectRatio = height / width;

    const size = GAME_SIZE[device];
    const standardAspectRatio = size.height / size.width;

    if (device === 'mobile-portrait') {
        return aspectRatio < standardAspectRatio;
    }

    return aspectRatio > standardAspectRatio;
};

const checkLargeIphone = () => {
    if (typeof window === 'undefined') return false;

    const {
        innerWidth: width,
        innerHeight: height,
        screen: { width: screenWidth, height: screenHeight },
    } = window;
    return (
        navigator.userAgent.includes('iPhone') &&
        Math.max(width, height) === 1024 &&
        Math.min(width, height) === 768 &&
        ((screenWidth === 768 && screenHeight === 1024) ||
            (screenWidth === 320 && screenHeight === 480))
    );
};

const checkLargeAndroid = () => {
    if (typeof window === 'undefined') return false;

    const { innerWidth: width, innerHeight: height } = window;
    return (
        navigator.userAgent.includes('Android') &&
        Math.max(width, height) >= 1024 &&
        Math.min(width, height) >= 768
    );
};

const getUserAgent = () => {
    if (typeof window === 'undefined') return '';
    return checkLargeIphone()
        ? navigator.userAgent.replace(/iPhone/g, 'iPad')
        : checkLargeAndroid()
          ? navigator.userAgent.replace(/Android/g, 'Tablet')
          : navigator.userAgent;
};

const MOBILE_REGEX = /Mobi|Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i;
const TABLET_REGEX =
    /(tablet|ipad|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i;
const IOS_REGEX = /\b(iPhone|iPod)\b/;

const isIpad = () => navigator.userAgent.includes('Mac') && navigator.maxTouchPoints > 0;
const isMobile = () => MOBILE_REGEX.test(navigator.userAgent);
const isTablet = () => isIpad() || TABLET_REGEX.test(getUserAgent());
const checkIOS = () => IOS_REGEX.test(getUserAgent());

const getPlatform = (): Platform => {
    if (isMobile()) return 'mobile';
    if (isTablet()) return 'tablet';
    return 'desktop';
};

const getOrientation = (): Orientation => {
    const { innerWidth: width, innerHeight: height } = window;
    return width > height ? 'landscape' : 'portrait';
};

const getDevice = (): { type: DeviceType; orientation: Orientation } => {
    const platform = getPlatform();
    const orientation = getOrientation();

    if (platform === 'desktop' || platform === 'tablet') {
        return { type: 'desktop', orientation: 'landscape' };
    }

    return {
        type: orientation === 'portrait' ? 'mobile-portrait' : 'mobile-landscape',
        orientation,
    };
};

const getWindowSize = () => ({
    widthScreen: window.innerWidth || 0,
    heightScreen: window.innerHeight || 0,
});

const setStyleDisplay = ({
    scale,
    scaleWidth,
    scaleHeight,
    widthGame,
    heightGame,
    widthScreen,
    heightScreen,
}: SetStyleDisplayParams) => {
    const rootElement = document.documentElement;
    if (!rootElement) return;

    // Use CSS custom properties batch update
    const styles = {
        '--scale': `${scale}`,
        '--scale-width': `${scaleWidth}`,
        '--scale-height': `${scaleHeight}`,
        '--width-game': `${widthGame}`,
        '--width-game-px': `${widthGame}px`,
        '--height-game': `${heightGame}`,
        '--height-game-px': `${heightGame}px`,
        '--width-screen': `${widthScreen}`,
        '--height-screen': `${heightScreen}`,
        'font-size': `${scale * 10}px`,
    };

    Object.entries(styles).forEach(([prop, value]) => {
        rootElement.style.setProperty(prop, value);
    });
};

const setGameSize = (size: GameSize, widthScreen: number, heightScreen: number) => {
    const ratio = size.width / size.height;
    const widthGame = Math.min(widthScreen, heightScreen * ratio);
    const heightGame = widthGame / ratio;
    const scale = widthGame / size.width;
    const scaleWidth = widthScreen / widthGame;
    const scaleHeight = heightScreen / heightGame;

    setStyleDisplay({
        scale,
        scaleWidth,
        scaleHeight,
        widthGame,
        heightGame,
        widthScreen,
        heightScreen,
    });
};

const setGlobalProperty = (name: string, value: string) => {
    const rootElement = document.documentElement;
    if (!rootElement) return;

    rootElement.style.setProperty(name, value);
};

const hashStyles = (styles: CSSModuleClasses): string => JSON.stringify(styles);

const getDeviceClassName = (styles: CSSModuleClasses) => {
    const device = getDevice().type;
    return styles[device] ? ` ${styles[device]}` : '';
};

const getLangClassName = (styles: CSSModuleClasses, lang: string) =>
    styles[lang] ? ` ${styles[lang]}` : '';

export {
    checkIOS,
    checkLargeAndroid,
    checkLargeIphone,
    GAME_SIZE,
    getDevice,
    getDeviceClassName,
    getLangClassName,
    getLetterOrPillarBoxActive,
    getOrientation,
    getPlatform,
    getUserAgent,
    getWindowSize,
    hashStyles,
    isIpad,
    isMobile,
    isTablet,
    setGameSize,
    setGlobalProperty,
    setStyleDisplay,
};
