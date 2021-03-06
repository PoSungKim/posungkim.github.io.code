import React, {useCallback, useEffect, useMemo, useState} from "react";
import styled from "styled-components";
import LogoArea from "./LogoArea";
import oc from "open-color";

const LoginPageContainer = styled.section`
    background-color: ${oc.yellow[0]};
    min-height: 100vh;
    padding: 50px 0;
    height: auto;
    
    
    
    @media screen and (max-width: 768px) {
        height: auto;
        min-height: 90vh;
        padding-top: 0;
    }
`;

const LoginPageSection = styled.div`
    width: 50vw;
    margin: auto;
    min-height: 20vh;
    background: white;
    box-shadow: rgba(0.5, 0.5, 0.5, 0.5) 0px 5px 5px 0px;
    
    @media screen and (max-width: 768px) {
        width: auto;  
        box-shadow: none;
    }
`;

const ContentWrapper = styled.div`
    padding: 20px 20px;
`;


const PageWrapper = ({children, info}) => {

    return (
        <LoginPageContainer>
            <LoginPageSection>
                <LogoArea logo={info}/>
                <ContentWrapper>
                    {children}
                </ContentWrapper>
            </LoginPageSection>
        </LoginPageContainer>
    )
}

export default PageWrapper;