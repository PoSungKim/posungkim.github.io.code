import React from "react";
import "./GameComp.css";
import GamePopUpComp from "./GamePopUpComp";
import GamePlayComp from "./GamePlayComp";
import {pauseMusic} from "./GameSound";

class GameComp extends React.Component {
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
                case 'pause':
                    message = "Play Again?";
                    break;
                case 'win':
                    message = "Congratulation! 😊";
                    break;
                case 'lose':
                    message = "Sorry, Lost! 👻";
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
export default GameComp;