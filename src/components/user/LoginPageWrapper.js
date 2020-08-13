import React, {useCallback, useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../_actions/userAction";
import styled from "styled-components";
import InputWithLabel from "./InputWithLabel";
import LogoArea from "./LogoArea";

const LoginPageContainer = styled.section`
    height: 100vh;
    background: #fff3bf;
    padding-top: 50px; 
`;

const LoginPageSection = styled.div`
    width: 50vw;
    margin: auto;
    min-height: 20vh;
    background: white;
`;

const ContentWrapper = styled.div`
    padding: 20px 20px;
`;


const LoginPageWrapper = ({children}) => {
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

export default LoginPageWrapper;