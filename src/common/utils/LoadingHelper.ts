const isProd = import.meta.env.PROD;

export class LoadingHelper {
    static update = (value: number, text?: string) => {
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

    static finish = () => {
        window.dispatchEvent(new Event('loadingfinish'));
    };
}
