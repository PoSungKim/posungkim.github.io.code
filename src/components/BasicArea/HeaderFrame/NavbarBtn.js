import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const NavbarBtn = ({children, to, ...rest}) => {
    const linkStyle = {display: "flex", alignItems: "center"};
    return (
        <Link to = {to} style={linkStyle}>
            <span {...rest}> {children} </span>
        </Link>
    )
}

export default NavbarBtn;