import React, {useCallback, useEffect, useMemo, useState} from "react";
import styled from "styled-components";
import LogoArea from "./LogoArea";
import oc from "open-color";

const LoginPageContainer = styled.section`
    height: 100vh;
    padding-top: 50px; 
    
    @media screen and (max-width: 768px) {
        height: auto;  
    }
`;

const LoginPageSection = styled.div`
    width: 50vw;
    margin: auto;
    min-height: 20vh;
    background: white;
    
    @media screen and (max-width: 768px) {
        width: auto;  
    }
`;

const ContentWrapper = styled.div`
    padding: 20px 20px;
`;


const PageWrapper = ({children}) => {
    return (
        <LoginPageContainer>
            <LoginPageSection>
                <LogoArea logo={"BeneBean's Coding"}/>
                <ContentWrapper>
                    {children}
                </ContentWrapper>
            </LoginPageSection>
        </LoginPageContainer>
    )
}

export default PageWrapper;