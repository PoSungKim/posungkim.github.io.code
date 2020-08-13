import React from "react";
import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

const Button = styled.button`
    
    margin-right: 10px;
    margin-top: 30px;
    
    padding: 8px 12px;
    border-radius: 4px;
    background-color: #ffd43b;
    ${props => props.content && css`
        &::after {
            content: "${props.content}";
        }
    `}
    ${props => props.width && css`
        width: ${props.width};  
    `}
`;

const LinkButton = ({to, ...rest}) => {
    return to
        ? <Link to = {to}> <Button {...rest} /> </Link>
        : <Button {...rest} />
}

export default LinkButton;