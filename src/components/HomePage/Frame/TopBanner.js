import React from "react";
import styled from "styled-components";
import oc from "open-color";

const TopBannerContainer = styled.div`
    background-image: url("https://www.travolution.com/images/cms/original/9/8/b/0/3/easid-115328-media-id-7450.jpg");
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    
    width: 100%;
    height: 60vh;
`

const TopBannerTxtBox = styled.div`
    background-color: ${oc.white};
    opacity: 50%;
    height: 30vh;
    width: 50%;
`;

const TopBannerTxt = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    padding: 1rem 2rem;
    font-size: 2.5rem;
    font-weight: 800;
    display: flex;
    
    height: 30vh;
    width: 50%;
    
    @media screen and (max-width: 768px) {
        padding: 0.5rem 1rem;
        font-size: 1.5rem;
    }
`;

const TopBanner = () => {

    return (
        <TopBannerContainer>
            <TopBannerTxtBox/>
            <TopBannerTxt>
                LEAVE YOUR WORRIES BEHIND <br/>
                AND ENJOY YOUR TRIP
            </TopBannerTxt>
        </TopBannerContainer>
    )
}

export default TopBanner;