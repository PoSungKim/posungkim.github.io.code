import bgSound from "./sound/bgSound.mp3";
import successSound from "./sound/successSound.mp3";
import failSound from "./sound/failSound.mp3";
import winSound from "./sound/winSound.mp3";

const bgMusic = new Audio(bgSound);
const successMusic = new Audio(successSound);
const failMusic = new Audio(failSound);
const winMusic = new Audio(winSound);

export function pauseMusic(music) {
    music.pause();
}

export function playMusic(music) {
    music.currentTime = 0;
    music.play();
}

export function playSuccess() {
    playMusic(successMusic);
}

export function playFail() {
    playMusic(failMusic);
}

export function playBg() {
    playMusic(bgMusic);
}

export function pauseBg() {
    pauseMusic(bgMusic);
}

export function playWin() {
    playMusic(winMusic);
}
