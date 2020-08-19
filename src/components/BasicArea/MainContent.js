import React from "react";
import styled from "styled-components";

const MainContentWrapper = styled.main`
    
    transform: translateY(10vh);
    min-height: 90vh;
    width: 100%;
    
    #sidebar {
        width: 400px;
        height: 600px;
        opacity: 0.8;
        position: absolute;
        background-color: black;
        transform: translate(-100%, 50px);
        transition: transform 200ms ease-in;
        z-index: 1;
    
        &.show {
            transform: translate(0px, 50px);
        }
    }
    
    @media screen and (max-width: 768px) {
        
        transform: translateY(10vh);
        height: auto;
        
        #sidebar {
            display: none;
        }
        
    }
`;

const MainContent = ({children}) => {
    return(
        <MainContentWrapper>
            {children}
        </MainContentWrapper>
    );
}

export default MainContent;