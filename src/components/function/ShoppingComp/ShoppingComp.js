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
import dataJSON from "./data/data.json";

class ShoppingComp extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.displayItems(dataJSON.items);
    }

    displayItems = (items) => {
        const itemList = document.querySelector(".itemList");
        itemList.innerHTML = items.map(item => this.convertToHTML(item)).join("");
    }

    convertToHTML = (item) => {
        let srcImg;
        switch(item.image) {
            case "./image/blueTShirt.png" :
                srcImg = blueTShirt;
                break;
            case "./image/blueShorts.png":
                srcImg = blueShorts;
                break;
            case "./image/blueCap.png":
                srcImg = blueCap;
                break;
            case "./image/pinkTShirt.png":
                srcImg = pinkTShirt;
                break;
            case "./image/pinkShorts.png":
                srcImg = pinkShorts;
                break;
            case "./image/pinkCap.png":
                srcImg = pinkCap;
                break;
            case "./image/redTShirt.png" :
                srcImg = redTShirt;
                break;
            case "./image/redShorts.png":
                srcImg = redShorts;
                break;
            case "./image/redCap.png":
                srcImg = redCap;
                break;
        }
        return`
            <li class="item">
                <img src=${srcImg} alt="${item.color}, ${item.type}" class="itemImg"/>
                <span class="description">${item.gender}, ${item.size}</span>
            </li>
            `;
    }

    render() {
        return (
            <section id="shoppingComp">
                <img className = "MallImage" src={shoppingMall} alt="shoppingMall"/>
                <div className="btnList">
                    <button className="btn">
                        <img className="btnImg" src={blueCap} alt="blueCap"/>
                    </button>
                    <button className="btn">
                        <img className="btnImg" src={blueTShirt} alt="blueTShirt"/>
                    </button>
                    <button className="btn">
                        <img className="btnImg" src={blueShorts} alt="blueShorts"/>
                    </button>
                    <button className="btn coloredBtn blue">Blue</button>
                    <button className="btn coloredBtn red">Red</button>
                    <button className="btn coloredBtn pink">Pink</button>
                </div>
                <ul className="itemList">
                </ul>
            </section>
        );
    }
}

export default ShoppingComp;