import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const ButtonWrapper = styled.button`
    
`;

const NavbarBtn = ({children, to, ...rest}) => {
    const linkStyle = {display: "flex", alignItems: "center"};
    return (
        <Link to = {to} style={linkStyle}><ButtonWrapper {...rest}>{children}</ButtonWrapper></Link>
    )
}

export default NavbarBtn;