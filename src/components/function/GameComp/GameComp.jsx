import React from "react";
import "./GameComp.css";
import bgSound from "./bgSound.mp3";
import successSound from "./successSound.mp3"
import failSound from "./failSound.mp3"
import winSound from "./winSound.mp3"
import welshCorgiImg from "./welshCorgiImg.png"
import bullDogImg from "./bullDogImg.png"

class GameComp extends React.Component {

    componentDidMount() {

        // Music
        const backgroundMusic = document.querySelector('audio');
        if (backgroundMusic !== null) {
            backgroundMusic.pause();
        }
        const bgMusic = new Audio(bgSound);
        const successMusic = new Audio(successSound);
        const failMusic = new Audio(failSound);
        const winMusic = new Audio(winSound);

        function playMusic(music) {
            music.play();
        }
        function pauseMusic(music) {
            music.currentTime = 0;
            music.pause();
        }

        // Creating 10 icons on the background with random locations
        const gameField = document.querySelector(".game__field");
        const fieldRect = gameField.getBoundingClientRect();
        const sizeOffset = 100, corgiCount = 5, bulldogCount = 5;
        const gameSecDuration = 5;

        const timer = document.querySelector(".header__timer");
        const scorer = document.querySelector(".header__score");
        const popUp = document.querySelector(".game__popUp");
        const popUpMessage = document.querySelector(".popUp__message");
        const popUpRefreshBtn = document.querySelector(".popUp__refresh");

        const startBtn = document.querySelector(".header__startBtn");
        let isStarted = false, score = 0, remainTime = undefined;

        popUpRefreshBtn.addEventListener("click", ()=> {
            startGame();
            hidePopUp();
        })

        gameField.addEventListener("click", fieldClick);

        function fieldClick(event) {
            if(!isStarted)
                return;
            const targetElement = event.target;
            if (targetElement.matches(".corgi")) {
                targetElement.remove();
                playMusic(successMusic);
                updateScore(++score);
                console.log("corgi");
                if (score === corgiCount) {
                    endGame(true);
                }
            }
            else if (event.target.matches(".bulldog")) {
                console.log("bulldog");
                playMusic(failMusic);
                endGame(false);
            }
        }

        function endGame(win) {
            isStarted = false;
            pauseMusic(bgMusic);
            stopTimer();
            hideGameBtn();
            showPopUp(win? "Congratulation! 😊‍" : "Sorry, Lost! 👻")
            try {
                const stopIcon = document.querySelector(".fa-stop");
                stopIcon.classList.remove("fa-stop")
                stopIcon.classList.add("fa-play-circle")
            }
            catch (error) {
                console.log(error);
            }
            finally {
                win ? playMusic(winMusic) : playMusic(failMusic);
            }
        }

        function updateScore() {
            scorer.innerText = `${corgiCount - score} score`;
        }

        startBtn.addEventListener("click", ()=> {
            if (!isStarted) {
                startGame();
            }
            else {
                stopGame();
            }
        })

        function startGame() {
            playMusic(bgMusic);
            isStarted = true;
            initSetting();
            initStopBtn();
            initTimerAndScore();
            runTimer();
        }

        // Setting up the startBtn, timer, score
        function initSetting() {
            showGameBtn();
            score = 0;
            gameField.innerHTML = "";
            scorer.innerHTML = `${corgiCount} score`;
            addIcons('corgi', corgiCount);
            addIcons('bulldog', bulldogCount);
        }
        function randomNumber (min, max) {
            return Math.random() * (max - min) + min;
        }
        function addIcons(className, count) {
            const x1 = 0, y1 = 0;
            const x2 = fieldRect.width - sizeOffset, y2 = fieldRect.height - sizeOffset;
            for(let i = 0; i < count; i++) {
                const icon = document.createElement("img");
                const nx = randomNumber(x1, x2), ny = randomNumber(y1, y2);
                icon.className = className;
                icon.style.position = "absolute";
                icon.style.left = `${nx}px`;
                icon.style.top = `${ny}px`;
                icon.src = (className === 'corgi') ? welshCorgiImg : bullDogImg;
                gameField.appendChild(icon);
            }
        }

        function initStopBtn() {
            const playIcon = document.querySelector(".fa-play-circle");
            playIcon.classList.remove("fa-play-circle");
            playIcon.classList.add("fa-stop");
        }

        function initTimerAndScore() {
            timer.style.visibility = "visible";
            scorer.style.visibility = "visible";
        }

        function updateTimer(time) {
            const minutes = Math.floor(time/60);
            const seconds = time % 60;
            timer.innerHTML = `${minutes} min ${seconds} sec`;
        }

        function runTimer() {
            remainTime = gameSecDuration;
            updateTimer(remainTime);
            window.curInterval = setInterval(() => {
                if (remainTime <= 0) {
                    clearInterval(window.curInterval);
                    endGame(false);
                    return;
                }
                const stopIcon = document.querySelector(".fa-stop");

                if (stopIcon === null) {
                    clearInterval(window.curInterval);
                    pauseMusic(bgMusic);
                    return;
                }
                updateTimer(--remainTime);
            }, 1000);
        }

        function stopGame() {
            isStarted = false;
            pauseMusic(bgMusic);
            stopTimer();
            hideGameBtn();
            showPopUp("Play Again?");
            const stopIcon = document.querySelector(".fa-stop");
            stopIcon.classList.remove("fa-stop");
            stopIcon.classList.add("fa-play-circle");
        }

        function stopTimer() {
            clearInterval(window.curInterval);
        }

        function hideGameBtn() {
            startBtn.style.visibility = "hidden";
        }

        function showGameBtn() {
            startBtn.style.visibility = "visible";
        }

        function showPopUp(message) {
            popUp.classList.remove("hide");
            popUpMessage.innerHTML = message;
        }

        function hidePopUp() {
            popUp.classList.add("hide");
        }
    };

    render() {
        return (
            <div>
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
                    <section className="game__field">
                    </section>
                </section>
                <section className="game__popUp hide">
                    <button className="popUp__refresh">
                        <i className="fas fa-redo-alt"></i>
                    </button>
                    <span className="popUp__message">
                        popUp__message
                    </span>
                </section>
            </div>
        )
    };
}
export default GameComp;