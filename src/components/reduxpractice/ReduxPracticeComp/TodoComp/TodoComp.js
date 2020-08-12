import React, {useState} from "react";

const TodoItem = React.memo(function TodoItem({todo, onToggle}) {
    return (
        <li
            style={{
                textDecoration: todo.done ? 'line-through' : 'none',
            }}
            onClick={() => onToggle(todo.id)}
        >
            {todo.text}
        </li>
    );
});

const TodoList = React.memo(function TodoList({todos, onToggle}) {
    return (
        <ul>
            {todos.map(
                todo =>
                    (<TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={onToggle}
                    >
                    </TodoItem>)
            )}
        </ul>
    )
});

function TodoComp({todos, onCreate, onToggle}) {
    const [text, setText] = useState('');
    const onChange = event => setText(event.target.value);
    const onSubmit = event => {
        event.preventDefault();
        onCreate(text);
        setText('');
    }
    return (
        <>
            <div>
                <form onSubmit={onSubmit}>
                    <input
                        value={text}
                        onChange={onChange}
                        placeholder="할 일을 입력하세요"
                    />
                    <button>등록</button>
                </form>
            </div>
            <TodoList
                todos={todos}
                onToggle={onToggle}
            />
        </>
    );
}

export default React.memo(TodoComp);