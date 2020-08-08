import React from "react";
import AppRouter from "./components/router/AppRouter";
import {createGlobalStyle} from "styled-components";
import UserComp from "./components/function/UsersComp/UsersComp5";

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
            <UserComp/>

            {/*
                <GlobalStyle/>
                <AppRouter/>
            */}
        </div>
    )
}
export default App;