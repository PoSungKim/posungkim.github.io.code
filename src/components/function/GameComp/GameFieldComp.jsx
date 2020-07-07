import React from 'react';
import welshCorgiImg from "./image/welshCorgiImg.png";
import bullDogImg from "./image/bullDogImg.png";

function randomNumber (min, max) {
    return Math.random() * (max - min) + min;
}

export const Icons = Object.freeze({
    corgi: "corgi",
    bulldog: "bulldog"
})

export class GameFieldComp extends React.Component {
    constructor(props) {
        super(props);
        window.fieldComp = this;
    }

    componentDidMount() {
        this.gameField = document.querySelector(".game__field");
        this.fieldRect = this.gameField.getBoundingClientRect();
        this.gameField.addEventListener("click", this.onClickField);
    }

    initSetting = () => {
        this.gameField.innerHTML = "";
        this._addIcon(Icons.corgi, this.props.corgiCount);
        this._addIcon(Icons.bulldog, this.props.bulldogCount);
    }

    _addIcon = (className, count) => {
        const x1 = 0, y1 = 0;
        const x2 = this.fieldRect.width - this.props.sizeOffset, y2 = this.fieldRect.height - this.props.sizeOffset;
        for(let i = 0; i < count; i++) {
            const icon = document.createElement("img");
            const nx = randomNumber(x1, x2), ny = randomNumber(y1, y2);
            icon.className = className;
            icon.style.position = "absolute";
            icon.style.left = `${nx}px`;
            icon.style.top = `${ny}px`;
            icon.src = (className === Icons.corgi) ? welshCorgiImg : bullDogImg;
            this.gameField.appendChild(icon);
        }
    }

    setClickListener = (onClickItem) => {
        this.onClickItem = onClickItem;
    }

    onClickField = (event) => {
        const targetElement = event.target;
        if (targetElement.matches(".corgi")) {
            if (this.onClickItem && this.onClickItem(Icons.corgi))
                return;
            targetElement.remove();

        }
        else if (event.target.matches(".bulldog")) {
            this.onClickItem && this.onClickItem(Icons.bulldog);

        }
    }

    render() {
        return (
            <section className="game__field"/>
        )
    }
}