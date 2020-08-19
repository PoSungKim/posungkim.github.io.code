import React, {useEffect} from "react";
import styled, {css} from "styled-components";

const NavBarSectionArea = styled.div`
    display: flex;
    padding: 20px 10px;
    align-items: center;
    
    
    a {
        text-decoration: none;
        color: black;
        font-size: ${props => props.fontSize};
    }
    
    li {
        padding: 10px 20px;
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
            ${props => props.ulStyle }
        }
    `}
`;

const NavBarSection = ({children, ...rest}) => {
    useEffect(()=>{
        console.log("adsfsfs", {...rest}.className);
        }
    ,[{...rest}.className]);
    return (
        <NavBarSectionArea {...rest}>
            {children}
        </NavBarSectionArea>
    )
}

export default NavBarSection;