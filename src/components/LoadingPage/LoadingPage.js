import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import oc from "open-color";
import {transitions} from "../../utils/styleUtils";
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

const LoadingIcon = styled.div`
    animation: ${transitions.spin} 1s linear infinite;
    border: 16px solid ${oc.gray[0]};
    border-top: 16px solid ${oc.yellow[5]};
    border-radius: 50%;
    display: block;
    height: 150px;
    width: 150px;
`;

const LoadingText = styled.span`
    position: relative;
    font-size: 3rem;
    top: -10vh;
`;

const hideLoadingPage = (target) => {
    setTimeout(() => {
        target.current.style.opacity="0";
    }, 1000);

    setTimeout(() => {
        // 혹시라도 공간을 차지하면 안 될 수도 있기 때문에
        target.current.style.display="none";
    }, 2000);
}

const LoadingPage = () => {
    const LoadingPage = useRef();

    useEffect(()=>{
        hideLoadingPage(LoadingPage);
    }, []);

    return (
        <LoadingPageWrapper ref={LoadingPage} >
            <LoadingText>BeneBean's Coding</LoadingText>
            <LoadingIcon />
        </LoadingPageWrapper>
    )
}

export default LoadingPage;