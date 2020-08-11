import React from "react";

export default class GamePopUpComp extends React.Component {
    constructor(props) {
        super(props);
        window.popUpComp = this;
    }

    componentDidMount() {
        this.popUp = document.querySelector(".game__popUp");
        this.popUpMessage = document.querySelector(".popUp__message");
        this.popUpRefreshBtn = document.querySelector(".popUp__refresh");
        this.popUpRefreshBtn.addEventListener('click', ()=> {
            this.onClickFunc && this.onClickFunc();
            this.hide();
        })
    }

    setClickListener = (onClickFunc) => {
        this.onClickFunc = onClickFunc;
    }
    show = (message) => {
        console.log(this.popUp);
        this.popUp.classList.remove("hide");
        this.popUpMessage.innerHTML = message;
    }
    hide = () => {
        this.popUp.classList.add("hide");
    }

    render() {
        return (
            <section className="game__popUp hide">
                <button className="popUp__refresh">
                    <i className="fas fa-redo-alt"></i>
                </button>
                <span className="popUp__message">
                    popUp__message
                </span>
            </section>
        )
    }
}
