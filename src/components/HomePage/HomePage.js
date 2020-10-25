import React, {useEffect, useLayoutEffect, useMemo} from 'react'
import {getProducts} from "../../_actions/productAction";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import oc from "open-color";

import LoadingContent from "../../utils/loading/LoadingContent";
import HomePageWrapper from "./Frame/HomePageWrapper";
import {Card, CardContainer, CardImage, CardImageContainer, CardText} from "./Frame/HomePageCard";

export const scrollImgHandler = (className) => {
    const cardImgContainer = document.querySelectorAll(className);
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
    const productsRootState = useSelector(state=>state.productReducer);
    const productsState = productsRootState.getProducts;
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
    // layout과 paint가 끝난 이후에 호출되는 useEffect보다
    // layout만 끝나고 호출되는 useLayoutEffect를 사용하여 비동기 작업을 보다 일찍 시작하게 구현하고자 했으나 성능상 큰 차이는 느낄 수 없었다.
    useLayoutEffect(()=>{
        (productsState.length == 0 && !productsRootState.transmission.error) && dispatch(getProducts());
        clearInterval(window.productsInterval); scrollImgHandler(".CardImgContainer");

    }, [dispatch, productsState]);

    //console.log(productsState.length);
    return (
        <HomePageWrapper>
            <CardContainer>


            { // 아직 Products 데이터가 안 도착했다면 Loading Sign 띄우기
                productsState.length === 0 && <LoadingContent loadingIconColor={oc.blue[5]} loadingIconSize='100px'/> }

            {
                // 실제 유저가 작성한 정보
                productsState && productsState.map( (product, index) =>
                    <Card key = {index + 1}>
                        <Link to = {`/product/${product.id}`} style={{textDecoration: "none"}}>
                            <CardImageContainer className="CardImgContainer">
                                {product.images && product.images.map(image => (
                                    <CardImage key={image.productImage_id} src={`data:image/png;base64,${image.imageByteData}`} />
                                ))}
                            </CardImageContainer>
                            <CardText>
                                <span>{product.continent}</span> <span>{product.price}</span><br/>
                                <span>{product.writer}</span>
                            </CardText>
                        </Link>
                    </Card>
                )
            }


            { // 만약 만들어진 Card의 수에 따라 빈칸이 만들어질 것 같다면, 더미 카드를 만들어서 빈칸 채우기
                productsState.length % 4 > 0 && makeExtraCards(productsState.length % 4)}

            </CardContainer>
        </HomePageWrapper>
    )
}

export default HomePage;