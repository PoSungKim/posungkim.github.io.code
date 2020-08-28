import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {goToLogin} from "../../_actions/productAction";
import {showAllCarts} from "../../_actions/cartAction";

import styled from "styled-components";
import oc from "open-color";
import {Link} from "react-router-dom";
import Axios from "axios";


const PageContainer = styled.section`
    width: 100%;
    min-height: 90vh;
    height: auto;
`;

const PageSection = styled.div`
    min-height: 90vh;
    padding: 5vh 0;
    margin: auto;
    width: 80%;
`;

const CartTable = styled.table`
    border-collapse:collapse;
    text-align: left;
    width: 100%;
    
    td, th {
        border: 1px solid ${oc.gray[1]};
        padding: 0.5rem;
        &.Btn {
            border: none;
        }
    }
    
    .Continent, .Writer,
    .Quantity, .Price, .Btn {
        width: 5%;
    }
    .Title, .Description {
        width: 30%;
    }
`;

const Btn = styled.button`
    &.Remove {
        background-color: ${oc.red[5]};
    }
    &.View {
        background-color: ${oc.yellow[5]};
    }
    border-radius: 5px;
    width: 4rem;
    height: 2rem;
`;

const MyCartPage = () => {
    const userState = useSelector(state=> state.userReducer);
    const cartState = useSelector(state => state.cartReducer.myCart);
    const dispatch = useDispatch();

    if (!userState.isLoggedIn)
        dispatch(goToLogin());

    const BtnRemoveHandler = async ({email, product_id}) => {
        console.log({email, product_id});
        const response = await Axios.delete(`https://springboot--backend.herokuapp.com/api/cart/product_id=${product_id}&email=${email}`)
            .then(response=>{
                dispatch({...showAllCarts(), data: {email: userState.login.email}});
                return response.data;
            });
        console.log(response);
    }

    useEffect(()=>{

        dispatch({...showAllCarts(), data: {email: userState.login.email}});

    }, [dispatch]);

    return (
        <PageContainer>
            <PageSection>
                <CartTable>
                    <thead>
                        <tr>
                            <th className="Continent">Continent</th>
                            <th className="Writer">Writer</th>
                            <th className="Quantity">Quantity</th>
                            <th className="Price">Price</th>
                            <th className="Title">Title</th>
                            <th className="Description">Description</th>
                            <th className="Btn" colSpan="2"></th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                cartState.map( (product, index) =>(
                                    <tr key = {index + 1}>
                                        <td className="Continent">{product.continent}</td>
                                        <td className="Writer">{product.writer}</td>
                                        <td className="Quantity">{product.count}</td>
                                        <td className="Price">{product.price}</td>
                                        <td className="Title">{product.title}</td>
                                        <td className="Description">{product.content}</td>
                                        <td className="Btn View">
                                            <Link to = {`/product/${product.product_id}`}>
                                                <Btn className="View">View</Btn>
                                            </Link>
                                        </td>
                                        <td className="Btn Remove">
                                            <Btn className="Remove" onClick={()=>BtnRemoveHandler({email: userState.login.email, product_id: product.product_id})}>Remove</Btn>
                                        </td>
                                    </tr>
                                ))
                            }
                    </tbody>
                </CartTable>
            </PageSection>
        </PageContainer>
    )
};

export default MyCartPage;