import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
const ButtonWrapper = styled.button`
    box-sizing: border-box;
    width: 4rem;
    height: 2rem;
    color: white;
    font-size: 1rem;
    border-radius: 5px;
    color: black;
    &:hover {
        transform: scale(1.3);
    }
`;

const NavbarButton = ({children, to, ...rest}) => {
    const linkStyle = {display: "flex", alignItems: "center"};
    return (
        <Link to = {to} style={linkStyle}><ButtonWrapper {...rest}>{children}</ButtonWrapper></Link>
    )
}

export default NavbarButton;