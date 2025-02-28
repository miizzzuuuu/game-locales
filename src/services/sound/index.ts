import BG_MUSIC from '../../assets/audio/bg_music.mp3';
import PLACE_BET_SFX from '../../assets/audio/sfx/place-bet.mp3';
import PLACE_MULTIPLE_BET_SFX from '../../assets/audio/sfx/place-multiple-bet.mp3';
import CLICK_SFX from '../../assets/audio/sfx/click.mp3';
import CLOSE_BET_SFX from '../../assets/audio/sfx/close-bet.mp3';
import OPEN_BET_SFX from '../../assets/audio/sfx/open-bet.mp3';
import GAME_START_SFX from '../../assets/audio/sfx/game-start.mp3';
import COUNTDOWN_SFX from '../../assets/audio/sfx/countdown.mp3';
import YOU_WON_SFX from '../../assets/audio/sfx/youwon.mp3';
import SELECT_CHIP_SFX from '../../assets/audio/sfx/select-chip.mp3';

export class Sound {
    private static _enablePlay = false;
    private static _isFocus = false;

    private static _volumeMusic = 0.05;
    private static _volumeSound = 0.6;

    private static _enableMusic = true;
    private static _enableSound = true;

    static bgMusicAudio = new Audio(BG_MUSIC);
    static clickAudio = new Audio(CLICK_SFX);
    static closeBetAudio = new Audio(CLOSE_BET_SFX);
    static openBetAudio = new Audio(OPEN_BET_SFX);
    static gameStartAudio = new Audio(GAME_START_SFX);
    static countdownAudio = new Audio(COUNTDOWN_SFX);
    static youWonAudio = new Audio(YOU_WON_SFX);
    static placeBetAudio = new Audio(PLACE_BET_SFX);
    static placeMultipleBetAudio = new Audio(PLACE_MULTIPLE_BET_SFX);
    static selectChipAudio = new Audio(SELECT_CHIP_SFX);

    static playMusic(): void {
        if (!this._enableMusic || !this._enablePlay || !this._isFocus) {
            this.stopMusic();
            return;
        }

        try {
            if (!this.bgMusicAudio.paused) {
                this.stopMusic();
            }

            this.bgMusicAudio.loop = true;
            this.bgMusicAudio.volume = this._volumeMusic;

            void this.bgMusicAudio.play();
        } catch (error) {
            console.warn(error);
        }
    }

    static stopMusic(): void {
        this.bgMusicAudio.pause();
        this.bgMusicAudio.currentTime = 0;
    }

    static playPlaceBet(): void {
        this.playSound(this.placeBetAudio);
    }

    static playPlaceMultipleBet(): void {
        this.playSound(this.placeMultipleBetAudio);
    }

    static playClick(): void {
        this.playSound(this.clickAudio);
    }

    static playCloseBet(): void {
        this.playSound(this.closeBetAudio);
    }

    static playOpenBet(): void {
        this.playSound(this.openBetAudio);
    }

    static playGameStart(): void {
        this.playSound(this.gameStartAudio);
    }

    static playCountdown(): void {
        this.playSound(this.countdownAudio);
    }

    static playYouWon(): void {
        this.playSound(this.youWonAudio);
    }

    static playSelectChip(): void {
        this.playSound(this.selectChipAudio);
    }

    static playSound(audio: HTMLAudioElement, loop?: boolean) {
        if (!audio || !this._enableSound || !this._enablePlay) return;

        try {
            if (!audio.paused) {
                audio.pause();
                audio.currentTime = 0;
            }

            audio.volume = this._volumeSound;
            if (loop) {
                audio.loop = loop;
            }

            void audio.play();
        } catch (error) {
            console.warn(error);
        }
    }

    static stopSound(audio: HTMLAudioElement) {
        audio.pause();
        audio.currentTime = 0;
    }

    static clear(): void {
        this.stopMusic();
    }

    static set enablePlay(value: boolean) {
        this._enablePlay = value;
        this.playMusic();
    }

    static set isFocus(value: boolean) {
        this._isFocus = value;
        this.playMusic();
    }

    static set enableMusic(value: boolean) {
        this._enableMusic = value;
        this.playMusic();
    }

    static set enableSound(value: boolean) {
        this._enableSound = value;
    }

    static set volumeMusic(value: number) {
        const volume = (value / 100) * 0.05;

        this.bgMusicAudio.volume = volume;
        this._volumeMusic = volume;
    }

    static set volumeSound(value: number) {
        this._volumeSound = value / 100;
    }
}
