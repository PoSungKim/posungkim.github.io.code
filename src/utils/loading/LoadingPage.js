import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import oc from "open-color";
import {transitions} from "../style/styleUtils";

const LoadingPageWrapper = styled.section`
    background-color: ${oc.gray[0]};
    transition: all 1s ease-in;
    justify-content: center;
    align-items: center;
    position: fixed;
    display: flex;
    flex-direction: column;
    opacity: 0.9;
    height: 100%;
    width: 100%; 
    z-index: 2;
    top: 0; 
    left: 0; 
`;

export const LoadingIcon = styled.div`
    animation: ${transitions.spin} 1s linear infinite;
    border: 16px solid ${oc.gray[0]};
    border-top: 16px solid ${props => props.loadingIconColor};
    border-radius: 50%;
    display: block;
    height: ${props => props.loadingIconSize};
    width: ${props => props.loadingIconSize};
`;

export const LoadingText = styled.span`
    position: relative;
    text-align: center;
    font-size: 2.5rem;
    top: -10vh;
    
    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
        padding: 0 2.5rem;
    }
`;

const hideLoadingPage = (target, clearTime) => {
    setTimeout(() => {
        target.current.style.opacity="0";
    },clearTime);

    setTimeout(() => {
        // 혹시라도 공간을 차지하면 안 될 수도 있기 때문에
        target.current.style.display="none";
    }, clearTime+1000);
}

const LoadingPage = ({clearTime = 100000000, infoText, loadingIconColor = oc.yellow[5], loadingIconSize = "150px"}) => {
    const LoadingPage = useRef();

    useEffect(()=>{
        hideLoadingPage(LoadingPage, clearTime);
    }, []);

    return (
        <LoadingPageWrapper ref={LoadingPage} >
            <LoadingText>{infoText}</LoadingText>
            <LoadingIcon loadingIconColor = {loadingIconColor} loadingIconSize = {loadingIconSize} />
        </LoadingPageWrapper>
    )
}

export default LoadingPage;