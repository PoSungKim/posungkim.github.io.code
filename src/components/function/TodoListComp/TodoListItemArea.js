import React from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";
import {useTodoState} from "./TodoListContext";
import TodoItem from "./TodoListItem";

const TodoListCompItemAreaBlock = styled.div`
    flex: 1;
    padding: 48px 32px 32px 24px;
    overflow-y: auto;
    background: white;
`

function TodoListItemArea () {
    const items = useTodoState();

    return (
      <TodoListCompItemAreaBlock>
          {items.map(item => (
              <TodoItem
                  key={item.id}
                  id={item.id}
                  text={item.text}
                  done={item.done}
              />
          ))}
      </TodoListCompItemAreaBlock>
    )

}

export default TodoListItemArea;