import React from 'react'
import "./FooterComp.css"

class FooterComp extends React.Component {
    render() {
        let current_year = new Date().getFullYear();
        return (
            <div className="Footer">
                <nav className="nav_bar">
                    <span>{current_year - 1} - {current_year} Rights Reserved By BeneBean </span>
                </nav>
            </div>
        )
    };
}

export default FooterComp;