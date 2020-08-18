import React from "react";
import styled, {css} from "styled-components";
const NavbarToggleBtn = styled.div`
    input {
        &#crossBtn {
            display: none;
            + label {
                display: block;
                position: relative;
                cursor: pointer;
                margin: 0;
                width: 23px;
                height: 20px;
                span {
                    display: block;
                    position: absolute;
                    width: 100%;
                    height: 4px;
                    border-radius: 30px;
                    background-color: #e7a61a;
                    transition: all 300ms;
                    &:nth-child(1) {
                        top: 0;
                    }
                    &:nth-child(2) {
                        top: 50%;
                        transform: translateY(-50%);
                    }
                    &:nth-child(3) {
                        bottom: 0;
                    }
                }
            }
            &:checked {
                + label span{
                    &:nth-child(1) {
                        top: 50%;
                        width: 120%;
                        transform: translateY(-50%) rotate(45deg);
                    }
                    &:nth-child(2) {
                        display: none;
                    }
                    &:nth-child(3) {
                        bottom: 50%;
                        width: 120%;
                        transform: translateY(50%) rotate(-45deg);
                    }
                }
            }
        }
    }
`;

const CrossBtnComp = () => {
    return (
        <NavbarToggleBtn className="navbar__toggleBtn">
            <input type="checkbox" id="crossBtn"/>
            <label for="crossBtn">
                <span></span>
                <span></span>
                <span></span>
            </label>
        </NavbarToggleBtn>
    );
}
export default CrossBtnComp;