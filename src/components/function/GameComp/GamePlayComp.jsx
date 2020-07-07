import React from "react";
import GameFieldComp from "./GameFieldComp";
import {pauseBg, playBg, playFail, playSuccess, playWin} from "./GameSound";

export default class GamePlayComp extends React.Component {
    constructor(props) {
        super(props);
        window.playComp = this;
        this.gameSecDuration = this.props.gameSecDuration;
        this.corgiCount = this.props.corgiCount;
        this.bulldogCount = this.props.bulldogCount;
        this.isStarted = false;
        this.score = 0;
        this.remainTime = undefined;
    }

    componentDidMount() {
        // GameFieldComp
        window.fieldComp.setClickListener(this.onClickItem);
        this.timer = document.querySelector(".header__timer");
        this.scorer = document.querySelector(".header__score");
        this.startBtn = document.querySelector(".header__startBtn");
        this.startBtn.addEventListener("click", ()=> {
            if (!this.isStarted) {
                this.start();
            }
            else {
                this.stop();
            }
        })
    }

    setGameStopListener(onGameStop) {
        this.onGameStop = onGameStop;
    }

    start = () => {
        playBg();
        this.isStarted = true;
        window.fieldComp.initSetting();
        this.initSetting();
        this.initStopBtn();
        this.initTimerAndScore();
        this.runTimer();
    }

    end = (win) => {
        this.isStarted = false;
        playBg();
        this.stopTimer();
        this.hideGameBtn();
        this.onGameStop && this.onGameStop(win? "win" : "lose");

        const stopIcon = document.querySelector(".fa-stop");
        if (stopIcon !== undefined) {
            stopIcon.classList.remove("fa-stop");
            stopIcon.classList.add("fa-play-circle");
            win ? playWin() : playFail();
        }
        pauseBg();
    }

    stop = () => {
        this.isStarted = false;
        pauseBg();
        this.stopTimer();
        this.hideGameBtn();
        this.onGameStop && this.onGameStop("pause");
        const stopIcon = document.querySelector(".fa-stop");
        stopIcon.classList.remove("fa-stop");
        stopIcon.classList.add("fa-play-circle");
    }

    onClickItem = (item) => {
        if(!this.isStarted) {
            return true;
        }
        if (item === "corgi") {
            playSuccess();
            this.updateScore(++this.score);
            if (this.score === this.corgiCount) {
                this.end(true);
            }
        }
        else if (item === "bulldog") {
            playFail();
            this.end(false);
        }
    }

    updateScore = () => {
        this.scorer.innerText = `${this.corgiCount - this.score} score`;
    }

    // Setting up the startBtn, timer, score
    initSetting = () => {
        this.showGameBtn();
        this.score = 0;
        this.scorer.innerHTML = `${ this.corgiCount } score`;
    }

    initStopBtn = () => {
        const playIcon = document.querySelector(".fa-play-circle");
        playIcon.classList.remove("fa-play-circle");
        playIcon.classList.add("fa-stop");
    }

    initTimerAndScore = () => {
        this.timer.style.visibility = "visible";
        this.scorer.style.visibility = "visible";
    }

    updateTimer = (time) => {
        const minutes = Math.floor(time/60);
        const seconds = time % 60;
        this.timer.innerHTML = `${minutes} min ${seconds} sec`;
    }

    stopTimer = () => {
        clearInterval(window.curInterval);
    }

    runTimer = () => {
        this.remainTime = this.gameSecDuration;
        this.updateTimer(this.remainTime);
        window.curInterval = setInterval(() => {
            if (this.remainTime <= 0) {
                clearInterval(window.curInterval);
                this.end(false);
                return;
            }
            const stopIcon = document.querySelector(".fa-stop");

            if (stopIcon === null) {
                clearInterval(window.curInterval);
                pauseBg();
                return;
            }
            this.updateTimer(--this.remainTime);
        }, 1000);
    }
    hideGameBtn = () => {
        this.startBtn.style.visibility = "hidden";
    }
    showGameBtn = () => {
        this.startBtn.style.visibility = "visible";
    }
    render() {
        return (
            <section className="game">
                <section className="game__header">
                    <button className="header__startBtn">
                        <i className="fas fa-play-circle"></i>
                    </button>
                    <span className="header__timer">
                            0min 0sec
                        </span>
                    <span className="header__score">
                            0
                        </span>
                </section>
                <GameFieldComp corgiCount = {this.props.corgiCount} bulldogCount = {this.props.bulldogCount} sizeOffset = {this.props.sizeOffset} />
            </section>
        );
    }
}