// import { Howl, Howler } from "howler";

class AudioManager {
    protected audio: { [key: string]: any } = {};

    public loadAudio(name: string, url: string) {
        // this.audio[name] = new Howl({ src: [url] });
        console.log('audio load for: ' + url);
    }

    public playAudio(name: string) {
        if (this.audio[name]) {
            // this.audio[name].play();
            console.log(`Audio ${name} is found!`);
        } else {
            console.log(`Audio ${name} is not found!`);
        }
    }

    public stopAudio(name: string) {
        if (this.audio[name]) {
            // this.audio[name].stop();
        } else {
            console.log(`Audio ${name} is not found!`);
        }
    }

    public isAudioPlaying(name: string) {
        if (this.audio[name]) {
            return true;
        } else {
            return false;
        }
    }

    public setVolume(volume: number) {
        // Howler.volume(volume);
    }
}

export const audioManager = new AudioManager();
