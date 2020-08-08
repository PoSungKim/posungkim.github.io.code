import React from "react";
import AppRouter from "./components/router/AppRouter";
import {createGlobalStyle} from "styled-components";
import Users from "./components/function/UsersComp/UsersComp3";

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
            <Users/>
            {/*
                <GlobalStyle/>
                <AppRouter/>
            */}
        </div>
    )
}
export default App;