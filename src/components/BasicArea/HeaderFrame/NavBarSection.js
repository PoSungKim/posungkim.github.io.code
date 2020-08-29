import React, {useEffect} from "react";
import styled, {css} from "styled-components";
import oc from "open-color";

const NavBarSectionArea = styled.div`
    display: flex;
    align-items: center;
    
    a {
        text-decoration: none;
        color: black;
        font-size: ${props => props.fontSize};
    }
    
    li {
        padding: 10px 30px;
        border-radius: 10px;
    }
    

    
    ${props => css`
        justify-content: ${props.justifyContent};
        flex: ${props.flex};
    `}
    
    ${props => props.ulList && css`
        ul {
            width: 100%;
            display: flex;
            justify-content: space-around;
            ${props => props.ulStyle };
            #MyCartNum {
                background-color: ${oc.red[9]};
                justify-content: center;
                display: inline-flex;
                align-items: center;
                border-radius: 50%;
                line-height: 1.5rem;
                height: 1.5rem;
                width: 1.5rem;
                color: white;
            }
        }
    `}
    
    @media screen and (max-width: 768px) {
        padding: 20px 10px;
    }
    
`;

const NavBarSection = ({children, ...rest}) => {

    return (
        <NavBarSectionArea {...rest}>
            {children}
        </NavBarSectionArea>
    )
}

export default NavBarSection;