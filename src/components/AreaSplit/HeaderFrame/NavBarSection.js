import React from "react";
import styled, {css} from "styled-components";

const NavBarSectionArea = styled.div`
    display: flex;
    padding: 20px 10px;
    align-items: center;
    ${props => css`
        justify-content: ${props.justifyContent};
        flex: ${props.flex};
    `}
    
    ${props => props.ulList && css`
        ul {
            width: 100%;
            display: flex;
            justify-content: space-around;
            ${props => props.ulStyle }
        }
    `}
   
`;

const NavBarSection = ({children, ...rest}) => {
    return (
        <NavBarSectionArea {...rest}>
            {children}
        </NavBarSectionArea>
    )
}

export default NavBarSection;