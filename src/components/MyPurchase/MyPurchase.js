import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {goToLogin} from "../../_actions/productAction";
import {showAllPurchase} from "../../_actions/cartAction";
import styled from "styled-components";
import oc from "open-color";
import {FaShoppingCart} from "react-icons/fa";


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
    border-radius: 5px;
    width: 4rem;
    height: 2rem;
    
    &.View {
        background-color: ${oc.yellow[5]};
        &:hover {
            background-color: ${oc.yellow[3]};
        }
    }
    
    
    @media screen and (max-width: 768px) {
        height: 1.5rem;
        &.View {
            width: 2rem;
        }
    }
`;

const Payment = styled.div`
    padding: 2rem 1rem;
    
    span {
        &:nth-child(1) {
            font-size: 1.5rem;
            font-weight: 600;
        }
        &:nth-child(2) {
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

const MyPurchase = () => {
    const userState = useSelector(state=> state.userReducer);
    const purchaseState = useSelector(state => state.cartReducer.myPurchase);
    const dispatch = useDispatch();

    if (!userState.isLoggedIn)
        dispatch(goToLogin());


    useEffect(()=>{

        dispatch({...showAllPurchase(), data: {email: userState.login.email}});

    }, [dispatch]);
    let totalPayment = 0;
    return (
        <PageContainer>
            <PageSection>
                <TableTag>Check the Items You Have Purchased So Far <FaShoppingCart/></TableTag>
                <CartTable>
                    <thead>
                    <tr>
                        <th className="Continent">Continent</th>
                        <th className="Writer">Writer</th>
                        <th className="Quantity">Quantity</th>
                        <th className="Price">Price</th>
                        <th className="Title">Title</th>
                        <th className="Description">Description</th>
                        { purchaseState.length > 0 && <th className="Btn" colSpan="1"></th> }
                    </tr>
                    </thead>
                    <tbody>
                    {
                        purchaseState.length > 0 && purchaseState.map( (product, index) => {
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
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </CartTable>
                {
                    purchaseState.length == 0 &&
                    <EmptyCartList>
                        Waiting for the user to Purchase Items
                    </EmptyCartList>
                }
                <Payment>
                    <span>Total Amount : </span>
                    <span>${totalPayment}</span>
                </Payment>

            </PageSection>
        </PageContainer>
    )
};

export default MyPurchase;