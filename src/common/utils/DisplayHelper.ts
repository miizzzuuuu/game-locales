import { DeviceType, GameSize, Orientation, Platform } from '../../types';

export class DisplayHelper {
    private static currentDeviceType: DeviceType = 'desktop';

    static size: Record<string, GameSize> = {
        desktop: {
            width: Number(import.meta.env.VITE_DESKTOP_WIDTH || 720),
            height: Number(import.meta.env.VITE_DESKTOP_HEIGHT || 360),
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

    static checkLargeIphone() {
        if (!window) return !1;

        const screenwidth = window.screen.width;
        const screenHeight = window.screen.height;
        const { innerWidth: width, innerHeight: height } = window;

        return (
            window.navigator.userAgent.includes('iPhone') &&
            1024 === Math.max(width, height) &&
            768 === Math.min(width, height) &&
            ((768 === screenwidth && 1024 === screenHeight) ||
                (320 === screenwidth && 480 === screenHeight))
        );
    }

    static checkLargeAndroid() {
        if (!window) return !1;

        const { innerWidth: width, innerHeight: height } = window;

        return (
            window.navigator.userAgent.includes('Android') &&
            Math.max(width, height) >= 1024 &&
            Math.min(width, height) >= 768
        );
    }

    static getLetterOrPillarBoxActive() {
        const { type: device } = this.getDevice();

        if (device === 'desktop') {
            return false;
        }

        const { innerWidth: width, innerHeight: height } = window;

        const aspectRatio = height / width;

        const size = this.size[device];
        const standart = size.height / size.width;

        if (device === 'mobile-portrait') {
            return aspectRatio < standart;
        }

        return aspectRatio > standart;
    }

    static getUserAgent() {
        return window
            ? this.checkLargeIphone()
                ? window.navigator.userAgent.replace(/iPhone/g, 'iPad')
                : this.checkLargeAndroid()
                  ? window.navigator.userAgent.replace(/Android/g, 'Tablet')
                  : window.navigator.userAgent
            : '';
    }

    static isMobile() {
        const regex = /Mobi|Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i;
        return regex.test(navigator.userAgent);
    }

    static isIpad() {
        return navigator.userAgent.includes('Mac') && navigator.maxTouchPoints > 0;
    }

    static isTablet() {
        if (this.isIpad()) {
            return true;
        }

        const userAgent = this.getUserAgent();

        return /(tablet|ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
            userAgent.toLowerCase(),
        );
    }

    static getPlatform(): Platform {
        if (this.isTablet()) {
            return 'tablet';
        }

        if (this.isMobile()) {
            return 'mobile';
        }

        return 'desktop';
    }

    static getDevice = (): { type: DeviceType; orientation: Orientation } => {
        const platform = this.getPlatform();

        // if (platform === 'desktop' || platform === 'tablet') {
        if (platform === 'desktop') {
            this.currentDeviceType = 'desktop';

            return {
                type: 'desktop',
                orientation: 'landscape',
            };
        }

        const orientation = this.getOrientation();

        if (orientation === 'portrait') {
            this.currentDeviceType = 'mobile-portrait';

            return {
                type: 'mobile-portrait',
                orientation,
            };
        }

        this.currentDeviceType = 'mobile-landscape';

        return {
            type: 'mobile-landscape',
            orientation,
        };
    };

    static checkIOS(): boolean {
        const userAgent = this.getUserAgent();
        return /\b(iPhone|iPod)\b/.test(userAgent);
    }

    static getOrientation(): Orientation {
        const { widthScreen, heightScreen } = this.getWindowSize();

        if (widthScreen > heightScreen) {
            return 'landscape';
        }

        return 'portrait';
    }

    static getWindowSize() {
        const widthScreen = window.innerWidth || 0;
        const heightScreen = window.innerHeight || 0;

        return {
            widthScreen,
            heightScreen,
        };
    }

    static setStyleDisplay(data: {
        scale: number;
        scaleWidth: number;
        scaleHeight: number;
        widthGame: number;
        heightGame: number;
        widthScreen: number;
        heightScreen: number;
    }) {
        const rootElement = document.documentElement;
        const { scale, scaleWidth, scaleHeight, widthGame, heightGame, widthScreen, heightScreen } =
            data;

        if (rootElement) {
            rootElement.style.setProperty('--scale', `${scale}`);
            rootElement.style.setProperty('--scale-width', `${scaleWidth}`);
            rootElement.style.setProperty('--scale-height', `${scaleHeight}`);

            rootElement.style.setProperty('--width-game', `${widthGame}`);
            rootElement.style.setProperty('--width-game-px', `${widthGame}px`);
            rootElement.style.setProperty('--height-game', `${heightGame}`);
            rootElement.style.setProperty('--height-game-px', `${heightGame}px`);

            rootElement.style.setProperty('--width-screen', `${widthScreen}`);
            rootElement.style.setProperty('--height-screen', `${heightScreen}`);

            rootElement.style.fontSize = `${scale * 10}px`;
        }
    }

    static setGameSize(size: GameSize, widthScreen: number, heightScreen: number) {
        const ratio = size.width / size.height;
        const widthGame = Math.min(widthScreen, heightScreen * ratio);

        const heightGame = widthGame / ratio;

        const scale = widthGame / size.width;
        const scaleWidth = widthScreen / widthGame;
        const scaleHeight = heightScreen / heightGame;

        this.setStyleDisplay({
            scale,
            scaleWidth,
            scaleHeight,
            widthGame,
            heightGame,
            widthScreen,
            heightScreen,
        });
    }

    static setGlobalProperty(name: string, value: string) {
        const rootElement = document.documentElement;
        if (rootElement) {
            rootElement.style.setProperty(name, value);
        }
    }

    static hashStyles(styles: CSSModuleClasses): string {
        return JSON.stringify(styles);
    }

    static getDeviceClassName(styles: CSSModuleClasses) {
        const device = this.currentDeviceType;
        const className = styles[device] === undefined ? '' : ` ${styles[device]}`;

        return className;
    }

    static getLangClassName(styles: CSSModuleClasses, lang: string) {
        return styles[lang] === undefined ? '' : ` ${styles[lang]}`;
    }
}
