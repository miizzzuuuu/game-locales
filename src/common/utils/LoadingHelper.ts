import { sendMessageToParent } from './FunctionHelper';

const isProd = import.meta.env.PROD;

const updateLoading = (value: number, text?: string) => {
    if (isProd) {
        text = '';
    }

    window.dispatchEvent(
        new CustomEvent('updateloading', {
            detail: {
                value,
                text,
            },
        }),
    );
};

const finishLoading = () => {
    window.dispatchEvent(new Event('loadingfinish'));

    sendMessageToParent(
        {
            source: 'LIVE_GAME',
            type: 'FINISH_GAME',
        },
        '*',
    );
};

export { updateLoading, finishLoading };
