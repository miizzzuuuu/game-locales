export class LoadingHelper {
    static update = (value: number, text?: string) => {
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
