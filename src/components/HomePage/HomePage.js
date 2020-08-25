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
    min-height: 90vh;
    height: auto;
    padding: 0 10vw;
    padding-top: 5vh;
    
    @media screen and (max-width: 768px) {
        padding: 0;
    }
`;

const InfoContainer = styled.div`
    padding-bottom: 2rem;
    text-align: center;
    font-weight: 300;
    font-size: 2rem;
`;

const ImageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Card = styled.div`
    & + & {
        margin-left: 1rem;
    }
    box-shadow: rgba(0.5, 0.5, 0.5, 0.5) 0px 5px 5px 0px;
    border-radius: 5px;
    //border: 1px solid gray;
    outline: none;
    height: auto;
    width: 20vw;
`;

const CardText = styled.div`
    width: 100%;
    padding: 10px 20px;
    span {
        // continent, price
        &: nth-of-type(1),
        &: nth-of-type(2) {
            font-size: 1.8rem;
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
                        productsState && productsState.map(product =>
                            <Card>
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
                </ImageContainer>
            </MainPageSection>
        </ContentContainer>
    )
}

export default HomePage;