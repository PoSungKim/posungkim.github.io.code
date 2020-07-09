import React from "react";
import "./GameComp.css";
import GamePopUpComp from "./GamePopUpComp";
import GamePlayComp from "./GamePlayComp";
import {pauseMusic, playFail, playLoss, playWin} from "./GameSound";
import {Reason} from "./GamePlayComp"

export default class GameComp extends React.Component {
    constructor(props) {
        super(props);
        this.sizeOffset = 100;
        this.corgiCount = 5;
        this.bulldogCount = 5;
        this.gameSecDuration = 5;
    }

    componentDidMount() {
        // Home Page BGM Off
        const backgroundMusic = document.querySelector('audio');
        if (backgroundMusic !== null)
            pauseMusic(backgroundMusic);

        // GamePlayComp
        window.playComp.setGameStopListener((reason) => {
            let message;
            switch (reason) {
                case Reason.quit:
                    message = "Play Again?";
                    playFail();
                    break;
                case Reason.win:
                    message = "Congratulations! 😊";
                    playWin();
                    break;
                case Reason.lose:
                    message = "Sorry, Lost! 👻";
                    playLoss();
                    break;
                default:
                    throw new Error("unknown error");
            }
            window.popUpComp.show(message);
        })

        // PopUpComp
        window.popUpComp.setClickListener(() => {
            window.playComp.start();
        })

    };

    render() {
        return (
            <section id = "flashGame">
                <GamePlayComp sizeOffset = {this.sizeOffset} gameSecDuration = {this.gameSecDuration} corgiCount = {this.corgiCount} bulldogCount = {this.bulldogCount} />
                <GamePopUpComp />
            </section>
        )
    };
}