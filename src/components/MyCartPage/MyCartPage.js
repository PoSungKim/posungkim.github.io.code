import React, {useEffect, useState} from 'react';
import {goToLogin} from "../../_actions/productAction";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import oc from "open-color";

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
    }
    
    tr:nth-child(even) {
        background-color: ${oc.gray[1]};
    }
`;

const MyCartPage = () => {
    const userState = useSelector(state=>state.userReducer);
    const dispatch = useDispatch();


    if (!userState.isLoggedIn)
        dispatch(goToLogin());

    useEffect(()=>{

    }, []);

    return (
        <PageContainer>
            <PageSection>
                <CartTable>
                    <thead>
                        <tr>
                            <th>Product Image</th>
                            <th>Product</th>
                            <th>Product Quantity</th>
                            <th>Price</th>
                            <th>RemoveFromCart</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </CartTable>
            </PageSection>
        </PageContainer>
    )
};

export default MyCartPage;