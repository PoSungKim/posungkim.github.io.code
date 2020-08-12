import React from "react";
import "./CrossBtnComp.css";

const CrossBtnComp = (props) => {
    return (
        <div className="navbar__toggleBtn">
            <input type="checkbox" id="crossBtn"/>
            <label for="crossBtn">
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>
    );
}
export default CrossBtnComp;