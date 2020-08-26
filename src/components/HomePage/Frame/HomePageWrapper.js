import React from 'react';
import styled from "styled-components";
import {RiShip2Line} from "react-icons/ri/index";
import TopBanner from "./TopBanner";

const ContentContainer = styled.section`
    width: 100%;
    min-height: 90vh;
    height: auto;
`;

const MainPageSection = styled.div`
    padding: 5vh 10vw;
    min-height: 90vh;
    
    @media screen and (max-width: 768px) {
        padding: 0;
    }
`;

const InfoContainer = styled.div`
    padding-bottom: 3rem;
    text-align: center;
    font-weight: 300;
    font-size: 2rem;
    
    @media screen and (max-width: 768px) {
        padding: 0.5rem 1rem;
        font-size: 1.5rem;
    }
`;

const HomePageWrapper = ({children}) => {
    return (
        <ContentContainer>
            <TopBanner/> {/* Parallax 스크롤 */}
            <MainPageSection>
                <InfoContainer>
                    New Life, New Discoveries, and Many More Sweet Memories. <br/>
                    May You Have a Fun and Memorable Lifetime Experience! <RiShip2Line/>
                </InfoContainer>
                {children}
            </MainPageSection>
        </ContentContainer>
    );
};

export default HomePageWrapper;