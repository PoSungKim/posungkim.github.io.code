import React, {useEffect} from "react";
import styled, {css} from "styled-components";
import oc from "open-color";

const NavbarToggleBtn = styled.div`
    display: none;
    
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
                    background-color: ${oc.yellow[5]};
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
            
            ${props=>props.navbarContainerActive && css`
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
            `}
                
        }
    }
    
    @media screen and (max-width: 768px) {
        position: absolute;
        display: block;
        right: 15vw;
        top: 28px;
    }
    @media screen and (max-width: 321px) {
        right: 8vw;
    }
`;

const CrossBtn = ({...rest}) => {

    return (
        <NavbarToggleBtn {...rest} >
            <input type="checkbox" id="crossBtn" />
            <label for="crossBtn" >
                <span></span>
                <span></span>
                <span></span>
            </label>
        </NavbarToggleBtn>
    );
};
export default CrossBtn;