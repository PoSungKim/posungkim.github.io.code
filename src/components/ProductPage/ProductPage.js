import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProduct} from "../../_actions/productAction";

import ProductPageWrapper from "./Frame/ProductPageWrapper";


const ProductPage = ({match}) => {
    const productState = useSelector(state=>state.userReducer.singleProduct);
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
            Product Page : {productId}!
        </ProductPageWrapper>
    )
}

export default ProductPage;