import React from "react";
import styled  from "styled-components";

const TodoListCompBlock = styled.div`
    width: 512px;
    height: 768px;
    
    position: relative;
    backgorund: white;
    border-radius: 16px;
    box-shadow: 0 0 0px rgba(0, 0, 0, 0.04);
    
    margin: 0 auto;
    margin-top: 96px;
    margin-bottom: 32px;
    
    display: flex;
    flex-direction: column;
`

function TodoListComp({ children }) {
    return <TodoListCompBlock> {children} </TodoListCompBlock>
}

export default TodoListComp;

