import React from "react";
import oc from "open-color";
import styled from "styled-components";
import {transitions} from "../../../utils/styleUtils";

const ErrorMessage = styled.div`
    margin-top: 16px;
    text-align: center;
    color: ${oc.red[8]};
    animation: ${transitions.moveLeftRight} 300ms ease-in;
`

const RegisterError = ({children}) => {

    return (
        <ErrorMessage>
            {children}
        </ErrorMessage>
    )
}

export default RegisterError;