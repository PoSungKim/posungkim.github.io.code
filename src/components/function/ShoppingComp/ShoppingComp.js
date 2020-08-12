import React from "react";
import "./ShoppingComp.css";
import shoppingMall from "./image/shoppingMall.png";
import blueTShirt from "./image/blueTShirt.png";
import blueShorts from "./image/blueShorts.png"
import blueCap from "./image/blueCap.png";
import pinkTShirt from "./image/pinkTShirt.png";
import pinkShorts from "./image/pinkShorts.png"
import pinkCap from "./image/pinkCap.png";
import redTShirt from "./image/redTShirt.png";
import redShorts from "./image/redShorts.png"
import redCap from "./image/redCap.png";


class ShoppingComp extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.fetchItems()
            .then(json => {
                this.displayItems(json.items);
                this.setEventListener(json.items);
            });
    }

    setEventListener = (items) => {
        const shoppingMallImg = document.querySelector(".MallImage");
        shoppingMallImg.addEventListener("click", () => this.displayItems(items));


        const btnList = document.querySelector(".btnList");
        btnList.addEventListener("click", event => this.onClickBtn(event, items));
    }
    onClickBtn = (event, items) => {
        const dataset = event.target.dataset;

        if (dataset.key == null || dataset.value == null)
            return;

        this.displayItems(items.filter(item => item[dataset.key] === dataset.value));
    }

    fetchItems = async () => {
        // Then과 콜백 함수 형태의 비동기 처리
        // return fetch("/data/ShoppingComp.json")
        //.then(response => response.json())

        // async, await 함수 형태의 비동기 처리, try-catch를 통한 보다 세밀한 Error Catching이 가능해진다.
        const response = await fetch("/data/ShoppingComp.json");
        return response.json();
    }

    displayItems = (items) => {
        const itemList = document.querySelector(".itemList");
        itemList.innerHTML = items.map(item => this.convertToHTML(item)).join("");
    }

    convertToHTML = (item) => {
        const map = {
            "./image/blueTShirt.png": blueTShirt,
            "./image/blueShorts.png": blueShorts,
            "./image/blueCap.png": blueCap,
            "./image/pinkTShirt.png": pinkTShirt,
            "./image/pinkShorts.png": pinkShorts,
            "./image/pinkCap.png": pinkCap,
            "./image/redTShirt.png": redTShirt,
            "./image/redShorts.png": redShorts,
            "./image/redCap.png": redCap
        }
        return `
            <li class="item">
                <img src=${map[item.image]} alt="${item.color}, ${item.type}" class="itemImg"/>
                <span class="description">${item.gender}, ${item.size}</span>
            </li>
            `;
    }

    render() {
        return (
            <section id="shoppingComp">
                <img className="MallImage" src={shoppingMall} alt="shoppingMall"/>
                <div className="btnList">
                    <button className="btn">
                        <img data-key="type" data-value="cap" className="btnImg" src={blueCap} alt="blueCap"/>
                    </button>
                    <button className="btn">
                        <img data-key="type" data-value="tshirt" className="btnImg" src={blueTShirt} alt="blueTShirt"/>
                    </button>
                    <button className="btn">
                        <img data-key="type" data-value="shorts" className="btnImg" src={blueShorts} alt="blueShorts"/>
                    </button>
                    <button data-key="color" data-value="blue" className="btn coloredBtn blue">Blue</button>
                    <button data-key="color" data-value="red" className="btn coloredBtn red">Red</button>
                    <button data-key="color" data-value="pink" className="btn coloredBtn pink">Pink</button>
                </div>
                <ul className="itemList">
                </ul>
            </section>
        );
    }
}

export default ShoppingComp;