import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProduct} from "../../_actions/productAction";

import styled from "styled-components";
import ProductPageWrapper from "./Frame/ProductPageWrapper";

const Continent = styled.div`
    padding-bottom: 2rem;
    text-align: center;
    font-size: 3rem;
    font-weight: 300;
`;

const ContentContainer = styled.div`
    display: flex;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 0;
    }
`;

const InfoContainer = styled.div`
    flex: 1;
`;

const InfoCard = styled.div`
    span {
        &:nth-of-type(1) {
            font-weight: 700;
            font-size: 1.8rem;
        }
        &:nth-of-type(2) {
            font-weight: 300;
            font-size: 2rem;
        }
        &:nth-of-type(3) {
            font-weight: 400;
            font-size: 1.3rem;
        }
    }
    
    
    @media screen and (max-width: 768px) {
        margin: 0.5rem 0;
    }
`;

const InfoCardTable = styled.table`
    width: 100%;
    
    tr {
        &:nth-child(1) th {
            font-size: 1.3rem;
            font-weight: 400;
        }
        &:nth-child(2) td {
            font-size: 1.5rem;
            font-weight: 400;
        }
    }
    
`;

const ImgContainer = styled.div`
    margin: auto;
    height: 100%;
    flex: 1;
`;

const ImgWrapper = styled.div`
    // 동일한 크기를 가진 이미지로 보일 수 있도록, 정해진 frame size를 정하고, size에 초과하는 부분은 안보이게 hidden 처리하기
    overflow-x: scroll;
    display: flex;
    height: 400px;
    width: 80%;
    margin: auto;
    
    position: relative;
    &::after {
        content: "'Scroll to Right/Left'";
        color: black;
        font-weight: 300;
        font-size: 1.5rem;
        position: absolute;
        bottom: 3%;
        right: 50%;
        transform: translateX(50%);
    }
    
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

const Img = styled.img`
    width: 100%;
`;

const ProductPage = ({match}) => {
    const productState = useSelector(state=>state.productReducer.singleProduct);
    const dispatch = useDispatch();
    const productId = match.params.id;

    useEffect(()=>{
            dispatch({
                ...getProduct(),
                data: productId,
            });
    }, []);

    console.log(productState);
    return (
        <ProductPageWrapper>
            <Continent>
                {productState.continent}
            </Continent>
            <ContentContainer>
                <ImgContainer>
                    <ImgWrapper>
                    {
                        productState.images.map((image, index)=>(
                            <Img key={index + 1} src={`data:image/png;base64,${image.imageByteData}`} />
                        ))
                    }
                    </ImgWrapper>
                </ImgContainer>
                <InfoContainer>
                    <InfoCard>
                        <span>ProductInfo</span> <br/>
                        <span>{productState.title}</span> <br/><br/>
                        <span>Description: <br/>
                        {productState.content}</span> <br/><br/>
                        <InfoCardTable>
                            <tr>
                                <th>Price</th>
                                <th>View</th>
                                <th>Sold</th>
                            </tr>
                            <tr>
                                <td>{productState.price}</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                        </InfoCardTable>
                    </InfoCard>
                </InfoContainer>
            </ContentContainer>
        </ProductPageWrapper>
    )
}

export default ProductPage;