import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {goToLogin} from "../../_actions/productAction";
import {deleteCart, purchaseCarts, showAllCarts} from "../../_actions/cartAction";
import {FaShoppingCart} from "react-icons/fa"
import styled from "styled-components";
import oc from "open-color";
import PayPal from "../../utils/paypal/PayPal";


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
    
    @media screen and (max-width: 768px) {
        width: 95%;
    }  
`;

const TableTag = styled.div`
    padding-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: gray;
    
    @media screen and (max-width: 768px) {
        font-size: 0.8rem
    }
`

const CartTable = styled.table`
    border-collapse:collapse;
    text-align: left;
    width: 100%;
    
    td, th {
        border: 1px solid ${oc.gray[1]};
        padding: 0.5rem;
        &.Btn {
            border: none;
            text-align: center;
            font-size: 0.8rem;
        }
    }
    
    .Continent, .Writer,
    .Quantity, .Price, .Btn {
        width: 5%;
    }
    .Title, .Description {
        width: 30%;
    }
    
    @media screen and (max-width: 768px) {
        font-size: 1rem;
        
        .Title, .Description {
            display: none;
        }
        
        td, th {
            padding: 0.1rem;
            &.Btn {
                font-size: 0.7rem;
            }
        }
    }
`;

const Btn = styled.button`
    &.Remove {
        background-color: ${oc.red[5]};
        &:hover {
            background-color: ${oc.red[3]};
        }
    }
    &.View {
        background-color: ${oc.yellow[5]};
        &:hover {
            background-color: ${oc.yellow[3]};
        }
    }
    border-radius: 5px;
    width: 4rem;
    height: 2rem;
    
    @media screen and (max-width: 768px) {
        height: 1.5rem;
        &.Remove {
            width: 3rem;
        }
        &.View {
            width: 2rem;
        }
    }
`;

const Payment = styled.div`
    padding: 2rem 1rem;
    
    div + div {
        margin-top: 0.5rem;   
    }
    
    span {
        &:nth-child(odd) {
            font-size: 1.5rem;
            font-weight: 600;
        }
        &:nth-child(even) {
            font-size: 1.5rem;
            font-weight: 300;
        }
    }
    
    @media screen and (max-width: 768px) {
        padding: 1rem 0.5rem;
        
        span {
            &:nth-child(odd) {
                font-size: 1rem;
                font-weight: 600;
            }
            &:nth-child(even) {
                font-size: 1.3rem;
                font-weight: 300;
            }
        }
    }
`

const EmptyCartList = styled.div`
    margin-top: 2rem;
    text-align: center;
    font-weight: 300;
    font-size: 3rem;
    width: 100%;
    
    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`

const MyCartPage = () => {
    const userState = useSelector(state=> state.userReducer);
    const cartState = useSelector(state => state.cartReducer.myCart);
    const dispatch = useDispatch();

    if (!userState.isLoggedIn)
        dispatch(goToLogin());

    const BtnRemoveHandler = async ({email, product_id}) => {
        console.log({email, product_id});
        dispatch({...deleteCart(), data: {email, product_id}});
    };

    const onSuccessTradeHandler = () => {

        const data = {email: userState.login.email, product_id_list: cartState,}
        dispatch({ ...purchaseCarts(), data});

    };

    useEffect(()=>{

        dispatch({...showAllCarts(), data: {email: userState.login.email}});

    }, [dispatch]);
    let totalPayment = 0;
    return (
        <PageContainer>
            <PageSection>
                <TableTag>Check the Items You Have Added to Your Cart <FaShoppingCart/></TableTag>
                <CartTable>
                    <thead>
                        <tr>
                            <th className="Continent">Continent</th>
                            <th className="Writer">Writer</th>
                            <th className="Quantity">Quantity</th>
                            <th className="Price">Price</th>
                            <th className="Title">Title</th>
                            <th className="Description">Description</th>
                            { cartState.length > 0 && <th className="Btn" colSpan="2"></th> }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartState.length > 0 && cartState.map( (product, index) => {
                                totalPayment += product.count * parseInt(product.price.substring(1), 10);
                                return (
                                    <tr key={index + 1}>
                                        <td className="Continent">{product.continent}</td>
                                        <td className="Writer">{product.writer}</td>
                                        <td className="Quantity">{product.count}</td>
                                        <td className="Price">{product.price}</td>
                                        <td className="Title">{product.title}</td>
                                        <td className="Description">{product.content}</td>
                                        <td className="Btn View">
                                            <Link to={`/product/${product.product_id}`}>
                                                <Btn className="View">View</Btn>
                                            </Link>
                                        </td>
                                        <td className="Btn Remove">
                                            <Btn className="Remove" onClick={() => BtnRemoveHandler({
                                                email: userState.login.email,
                                                product_id: product.product_id
                                            })}>Remove</Btn>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </CartTable>
                {
                    cartState.length == 0 &&
                    <EmptyCartList>
                        Waiting for Cart Items to be Added
                    </EmptyCartList>
                }
                <Payment>
                    <div><span>Total Amount : </span><span>${totalPayment}</span></div>
                    {
                        cartState.length > 0
                            &&  <>
                                    <div><span>Paypal Sandbox Password : </span> <span>testtest</span></div>
                                    <div><span>Paypal Sandbox Email : </span> <span>sb-igxoq3086818@business.example.com</span></div>
                                </>
                    }
                </Payment>
                {
                    cartState.length > 0 && <PayPal totalPayment = {totalPayment} onSuccessTradeHandler={onSuccessTradeHandler} />
                }
            </PageSection>
        </PageContainer>
    )
};

export default MyCartPage;