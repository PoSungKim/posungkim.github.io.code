import React, {useCallback} from "react";
import {useSelector, useDispatch} from "react-redux";
import TodoComp from "../TodoComp/TodoComp";
import {addTodo, toggleTodo} from "../Modules/todos";


function TodoContainer() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const onCreate = useCallback(text => dispatch(addTodo(text)), [dispatch]);
    const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]);

    return <TodoComp
        todos = {todos}
        onCreate = {onCreate}
        onToggle = {onToggle}
    />
}

export default TodoContainer;