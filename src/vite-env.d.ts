/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_VERSION: string;

    readonly VITE_URL_SOCKET: string;
    readonly VITE_URL_API: string;
    readonly VITE_URL_LOBBY: string;

    readonly VITE_MOBILE_PORTRAIT_WIDTH: number;
    readonly VITE_MOBILE_PORTRAIT_HEIGHT: number;
    readonly VITE_MOBILE_LANDSCAPE_WIDTH: number;
    readonly VITE_MOBILE_LANDSCAPE_HEIGHT: number;
    readonly VITE_DESKTOP_WIDTH: number;
    readonly VITE_DESKTOP_HEIGHT: number;

    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
