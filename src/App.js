import React from "react";
import AppRouter from "./components/router/AppRouter";
import {createGlobalStyle} from "styled-components";
//import "./components/function/ReduxPracticeComp/ReduxPractice";
import UserComp from "./components/function/UsersComp/UsersComp5";
import TodoComp from "./components/function/ReduxPracticeComp/TodoComp/TodoComp";
import TodoContainer from "./components/function/ReduxPracticeComp/TodoContainer/TodoContainer";

// ReduxPracticeComp
//import CounterContainer from "./components/function/ReduxPracticeComp/CounterContainer/CounterContainer";

// ReduxThunkSagaComp
import CounterContainer from "./components/function/ReduxThunkSagaComp/CounterContainer/CounterContainer";

// ReduxThunkComp
import PostListContainer from "./components/function/ReduxThunkSagaComp/PostListContainer/PostListContainer";
import PostPage from "./components/function/ReduxThunkSagaComp/PostPage/PostPage";
import {Router, BrowserRouter, Switch, Route} from "react-router-dom";
import {createBrowserHistory} from 'history';

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

export const customHistory = createBrowserHistory();

function App () {
    return (
        <div className="App">
            <Router history = {customHistory}>
                <CounterContainer/>
                <Switch>
                    <Route exact path ="/" component={PostListContainer}></Route>
                    <Route path = "/:id" component={PostPage}></Route>
                </Switch>
            </Router>

            {/*
                <CounterContainer/>
                <UserComp/>
                <hr/>
                <TodoContainer/>

                <GlobalStyle/>
                <AppRouter/>
            */}

        </div>
    )
}
export default App;