import React from "react";
import styled, {createGlobalStyle}  from "styled-components";
import TodoListCompHead from "./TodoListHeader";
import TodoListItemArea from "./TodoListItemArea";
import TodoListCreate from "./TodoListCreate";
import {TodoContextProvider} from "./TodoListContext";

const GlobalStyle = createGlobalStyle`
    body {
        background : #f1f3f5;
    }
`;

const TodoListCompTemplate = styled.div`
    width: 512px;
    height: 768px;
    
    position: relative;
    background: #fcc419;
    border-radius: 15px;
    box-shadow: 0 0 0px rgba(0, 0, 0, 0.04);
    
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 50px;
    
    display: flex;
    flex-direction: column;
`

function TodoListComp() {
    return (
        <>
            <TodoContextProvider>
                <GlobalStyle/>
                <TodoListCompTemplate>
                    <TodoListCompHead/>
                    <TodoListItemArea/>
                    <TodoListCreate/>
                </TodoListCompTemplate>
            </TodoContextProvider>
        </>
    )
}

export default TodoListComp;

