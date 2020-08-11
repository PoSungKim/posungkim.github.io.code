import React from "react";
import AppRouter from "./components/router/AppRouter";
import {createGlobalStyle} from "styled-components";
//import "./components/function/ReduxPracticeComp/ReduxPractice";
import UserComp from "./components/function/UsersComp/UsersComp5";
import TodoComp from "./components/reduxpractice/ReduxPracticeComp/TodoComp/TodoComp";
import TodoContainer from "./components/reduxpractice/ReduxPracticeComp/TodoContainer/TodoContainer";

// ReduxPracticeComp
//import CounterContainer from "./components/function/ReduxPracticeComp/CounterContainer/CounterContainer";

// ReduxThunkSagaComp
import CounterContainer from "./components/reduxpractice/ReduxThunkSagaComp/CounterContainer/CounterContainer";

// ReduxThunkComp
import PostListContainer from "./components/reduxpractice/ReduxThunkSagaComp/PostListContainer/PostListContainer";
import PostPage from "./components/reduxpractice/ReduxThunkSagaComp/PostPage/PostPage";


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
                <GlobalStyle/>
                <AppRouter/>
        </div>
    )
}
export default App;