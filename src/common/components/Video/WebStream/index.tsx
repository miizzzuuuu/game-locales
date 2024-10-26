import { useCallback, useRef, useState } from 'react';
import { useAppSelector } from '../../../../store/hooks';
import { selectStreamURL } from '../../../../store/slice/gameSlice';
import {
    selectEnableStreamingSound,
    selectVolumeStreamingSound,
} from '../../../../store/slice/settingsSlice';
import { selectFocus } from '../../../../store/slice/windowSlice';
import styles from './styles.module.scss';

const WebStream = () => {
    const videoRef = useRef<HTMLIFrameElement>(null);

    const isFocus = useAppSelector(selectFocus);
    const [isLoading, setIsLoading] = useState(true);

    const enableSoundStreaming = useAppSelector(selectEnableStreamingSound);
    const volumeStreamingSound = useAppSelector(selectVolumeStreamingSound);

    const volume = !enableSoundStreaming ? 0 : volumeStreamingSound / 100;

    const streamURL = useAppSelector(selectStreamURL);
    const url = new URL(streamURL);
    url.searchParams.append('volume', String(volume));

    const urlStreaming = !isFocus ? 'about:blank' : url.href;

    const handleLoadVideo = useCallback(() => {
        console.log('finish video', videoRef.current?.src);

        setTimeout(() => {
            setIsLoading(!isFocus ? true : false);

            videoRef.current?.click();
        }, 500);
    }, [isFocus]);

    return (
        <>
            <iframe
                allow="fullscreen; autoplay; encrypted-media"
                ref={videoRef}
                className={styles['web-stream']}
                src={urlStreaming}
                onLoad={handleLoadVideo}
            />

            {isLoading && (
                <div className={styles['loading-wrapper']}>
                    <span className={styles['loading-text']}>Load Video...</span>
                </div>
            )}
        </>
    );
};

export default WebStream;
