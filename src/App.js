import React from "react";
import AppRouter from "./components/router/AppRouter";
import {createGlobalStyle} from "styled-components";
//import "./components/function/ReduxPracticeComp/ReduxPractice";
import UserComp from "./components/function/UsersComp/UsersComp5";
import CounterContainer from "./components/function/ReduxPracticeComp/CounterContainer/CounterContainer";
import TodoComp from "./components/function/ReduxPracticeComp/TodoComp/TodoComp";
import TodoContainer from "./components/function/ReduxPracticeComp/TodoContainer/TodoContainer";

const GlobalStyle = createGlobalStyle`
body {
    background-color: white;
    font-family: 'Source Sans Pro', sans-serif;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

ul {
    list-style: none;
    margin-bottom: 0;
}
`

function App () {
    return (
        <div className="App">
            <CounterContainer/>
            <hr/>
            <TodoContainer/>
            {/* <UserComp/>


            <GlobalStyle/>
            <AppRouter/>
            */}
        </div>
    )
}
export default App;