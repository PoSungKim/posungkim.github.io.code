import React from "react";
import styled from "styled-components";
import {useTodoState} from "./TodoListContext";

const TodoListCompHeadBlock = styled.div`
    padding: 48px 32px 32px 24px;
    border-bottom: 1px solid black;
    
    h1 {
        padding: 0;
        margin: 0;
        font-size: 36px;
        color: black;
    }
    
    .day {
        margin-top: 4px;
        color: black;
        font-size: 21px;
    }
    
    .tasks-left {
        color: black;
        font-size: 16px;
        margin-top: 40px;
        font-weight: bold;
    }
`

function TodoListCompHead() {
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done);
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const dayString = today.toLocaleDateString('ko-KR', {
        weekday: 'long'
    })
    return (
        <TodoListCompHeadBlock>
            <h1>{dateString}</h1>
            <div className="day">{dayString}</div>
            <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
        </TodoListCompHeadBlock>
    )
}

export default TodoListCompHead;

