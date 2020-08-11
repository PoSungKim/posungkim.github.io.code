import React from 'react'
import "./FooterComp.css"

class FooterComp extends React.Component {
    render() {
        let current_year = new Date().getFullYear();
        return (
            <footer>
                <nav className="footer__navbar">
                    <span>{current_year - 1} - {current_year} Rights Reserved By BeneBean </span>
                </nav>
            </footer>
        )
    };
}

export default FooterComp;