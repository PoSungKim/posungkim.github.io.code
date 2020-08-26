import React, {useEffect, useMemo} from 'react'
import styled from "styled-components";
import {RiShip2Line} from "react-icons/ri";
import oc from "open-color";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../_actions/productAction";
import LoadingPage from "../../utils/loading/LoadingPage";
import LoadingContent from "../../utils/loading/LoadingContent";
import TopBanner from "./Frame/TopBanner";

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

const ImageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    min-height: 30vh;
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const Card = styled.div`
    box-shadow: rgba(0.5, 0.5, 0.5, 0.5) 0px 5px 5px 0px;
    background-color: ${oc.white};
    transition: all 200ms ease-out;
    border-radius: 5px;
    margin-left: 1rem;
    margin-top: 1rem;
    min-width: 20%;
    outline: none;
    height: auto;
    flex: 1;
    
    &:hover {
        transform: translateY(-40px) scale(1.2);
    }
    
    @media screen and (max-width: 768px) {
        margin: 0.5rem;
        display: ${props=>props.mobileHidden && "none"};
        
        &:hover{
            transform: none;
        }
    }
`;

const CardText = styled.div`
    width: 100%;
    padding: 10px 20px;
    
    span {
        // continent, price
        &: nth-of-type(1),
        &: nth-of-type(2) {
            font-size: 1rem;
        }
        // writer
        &: nth-of-type(3) {
            font-size: 1rem;
            color: ${oc.gray[5]};
        }
    }
`;

const CardImageContainer = styled.div`
    overflow-x: scroll;
    height: 200px;
    display: flex;
    width: 100%;
`;

const CardImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 5px;
`;

const scrollImgHandler = () => {
    const cardImgContainer = document.querySelectorAll(".CardImgContainer");
    window.productsInterval = setInterval(()=>{
        for(let i = 0; i < cardImgContainer.length; i++) {
            if (cardImgContainer[i].scrollLeft >= cardImgContainer[i].scrollWidth - cardImgContainer[i].offsetWidth)
                cardImgContainer[i].scrollLeft = 0;
            else
                cardImgContainer[i].scrollLeft += cardImgContainer[i].offsetWidth;
        }
    }, 1000);
}

const HomePage = () => {
    const productsState = useSelector(state=>state.productReducer.getProducts);
    const dispatch = useDispatch();

    // 카드 개수에 따라서 빈칸이 생기면 정리가 안되어 보일 수 있기 때문에 채워주는 과정이 필요!
    const makeExtraCards = (extraCardNum) => {
        const ArrayofExtraCards = [];
        for(let i = extraCardNum; i < 4; i++) {
            ArrayofExtraCards.push(<Card key = {productsState.length + i} mobileHidden>
                <CardImageContainer>
                    <CardImage key = '1' style={{backgroundColor: oc.blue[4]}} />
                </CardImageContainer>
                <CardText>
                    <span>Soon to be Added by Users</span> <span></span><br/>
                    <span>writer</span>
                </CardText>
            </Card>)
        }
        return ArrayofExtraCards;
    }

    useEffect(()=>{
        productsState.length == 0 ? dispatch(getProducts()) : !window.productsInterval && scrollImgHandler();

    }, [dispatch, productsState]);

    return (
        <ContentContainer>

            <TopBanner/> {/* Parallax 스크롤 */}
            <MainPageSection>
                <InfoContainer>
                    New Life, New Discoveries, and Many More Sweet Memories. <br/>
                    May You Have a Fun and Memorable Lifetime Experience! <RiShip2Line/>
                </InfoContainer>
                <ImageContainer>
                    {
                        productsState.length == 0 &&
                            <LoadingContent loadingIconColor={oc.blue[5]} loadingIconSize={'100px'}/>
                    }

                    {
                        // 실제 유저가 작성한 정보
                        productsState && productsState.map( (product, index) =>
                            <Card key = {index + 1}>
                                <CardImageContainer className="CardImgContainer">
                                    {product.images && product.images.map(image => (
                                        <CardImage key={image.productImage_id} src={`data:image/png;base64,${image.imageByteData}`} />
                                    ))}
                                </CardImageContainer>
                                <CardText>
                                    <span>{product.continent}</span> <span>{product.price}</span><br/>
                                    <span>{product.writer}</span>
                                </CardText>
                            </Card>
                        )
                    }

                    {
                        // 만약 만들어진 Card의 수에 따라 빈칸이 만들어질 것 같다면, 더미 카드를 만들어서 빈칸 채우기
                        productsState.length % 4 > 0 && makeExtraCards(productsState.length % 4)
                    }
                </ImageContainer>
            </MainPageSection>
        </ContentContainer>
    )
}

export default HomePage;