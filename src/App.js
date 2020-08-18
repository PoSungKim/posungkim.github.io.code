import React from "react";
import AppRouter from "./router/AppRouter";
import {createGlobalStyle} from "styled-components";

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

function App() {
    return (
        <>
            <GlobalStyle/>
            <AppRouter/>
        </>
    )
}

export default App;