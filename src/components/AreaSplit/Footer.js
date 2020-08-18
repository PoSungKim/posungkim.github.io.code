import React from 'react'
import styled from "styled-components";

const FooterNavbar = styled.footer`
    .footer__navbar {
        background-color: #575c61;
        text-align: center;
        color: white;
        padding: 2px 0;
        width: 100vw;
        font-size: 10px;
}`

const Footer = () => {
    let current_year = new Date().getFullYear();
    return (
        <FooterNavbar>
            <nav className="footer__navbar">
                <span>{current_year - 1} - {current_year} Rights Reserved By BeneBean </span>
            </nav>
        </FooterNavbar>
    )
}

export default Footer;