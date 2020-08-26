import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import {LoadingIcon, LoadingText} from "./LoadingPage";
import oc from "open-color";

const LoadingContentWrapper = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    
`;

const LoadingContent = ({loadingIconColor = oc.blue[5], loadingIconSize = "100px"}) => {

    const LoadingContent = useRef();

    return (
        <LoadingContentWrapper ref={LoadingContent} >
            <LoadingIcon loadingIconColor = {loadingIconColor} loadingIconSize = {loadingIconSize} />
        </LoadingContentWrapper>
    )
}

export default LoadingContent;