import React from "react";
import {Link} from "react-router-dom";

class FunctionComp extends React.Component {

    render() {
        return (
            <div className="FunctionComp">
                <h2>Functions</h2>
                <li><Link to={this.props.location.pathname + "/calculator"}> Calculator 기능 </Link></li>
                <li><Link to={this.props.location.pathname + "/game"}> Game 기능 </Link></li>
                <li><Link to={this.props.location.pathname + "/youtube"}> YouTube Cloning </Link></li>
            </div>
        );
    }
}

export default FunctionComp;