import React from 'react';
import styled from "styled-components";
import oc from "open-color";

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    min-height: 30vh;
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const Card = styled.div`
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

export const CardText = styled.div`
    width: 100%;
    padding: 10px 20px;
    
    span {
        // continent, price
        &: nth-of-type(1),
        &: nth-of-type(2) {
            color: ${oc.black};
            font-size: 1rem;
        }
        // writer
        &: nth-of-type(3) {
            font-size: 1rem;
            color: ${oc.gray[5]};
        }
    }
`;

export const CardImageContainer = styled.div`
    overflow-x: scroll;
    height: 200px;
    display: flex;
    width: 100%;
`;

export const CardImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 5px;
`;