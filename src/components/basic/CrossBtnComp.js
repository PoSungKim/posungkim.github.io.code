import React from "react";
import "./CrossBtnComp.scss";
import styled, {css} from "styled-components";
const navbarToggleBtn = styled.div`
`;

const CrossBtnComp = () => {
    return (
        <navbarToggleBtn className="navbar__toggleBtn">
            <input type="checkbox" id="crossBtn"/>
            <label for="crossBtn">
                <span></span>
                <span></span>
                <span></span>
            </label>
        </navbarToggleBtn>
    );
}
export default CrossBtnComp;