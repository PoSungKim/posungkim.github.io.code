import React, {useEffect} from 'react'
import styled from "styled-components";
import {RiShip2Line} from "react-icons/ri";
import oc from "open-color";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../_actions/productAction";

const ContentContainer = styled.section`
    width: 100%;
    min-height: 90vh;
    height: auto;
`;

const MainPageSection = styled.div`
    padding: 5vh 10vw;
    min-height: 90vh;
    height: auto;
    
    @media screen and (max-width: 768px) {
        padding: 0;
    }
`;

const InfoContainer = styled.div`
    padding-bottom: 3rem;
    text-align: center;
    font-weight: 300;
    font-size: 2.5rem;
    
    @media screen and (max-width: 768px) {
        padding: 0.5rem 1rem;
        font-size: 1.5rem;
    }
`;

const ImageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    
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
            font-size: 1.5rem;
        }
        // writer
        &: nth-of-type(3) {
            font-size: 1.3rem;
            color: ${oc.gray[5]};
        }
    }
`;

const CardImageContainer = styled.div`
    overflow-x: scroll;
    display: flex;
    height: 275px;
    width: 100%;
`;

const CardImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 5px;
`;

const HomePage = () => {
    const productsState = useSelector(state=>state.productReducer.getProducts);
    const dispatch = useDispatch();

    const makeExtraCards = (extraCardNum) => {
        const ArrayofExtraCards = [];
        for(let i = extraCardNum; i < 4; i++) {
            ArrayofExtraCards.push(<Card key = {productsState.length + i} mobileHidden>
                <CardImageContainer>
                    <CardImage key = '1' style={{backgroundColor: oc.blue[4]}} />
                </CardImageContainer>
                <CardText>
                    <span>Soon to be Filled</span> <span></span><br/>
                    <span>writer</span>
                </CardText>
            </Card>)
        }
        return ArrayofExtraCards;
    }

    useEffect(()=>{
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <ContentContainer>
            <MainPageSection>
                <InfoContainer>
                    New Life, New Discoveries, and Many More Sweet Memories. <br/>
                    May You Have a Fun and Memorable Lifetime Experience! <RiShip2Line/>
                </InfoContainer>
                <ImageContainer>

                    {
                        // 실제 유저가 작성한 정보
                        productsState && productsState.map( (product, index) =>
                            <Card key = {index + 1}>
                                <CardImageContainer>
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
                        // 4줄
                        productsState.length % 4 > 0 && makeExtraCards(productsState.length % 4)
                    }
                </ImageContainer>
            </MainPageSection>
        </ContentContainer>
    )
}

export default HomePage;