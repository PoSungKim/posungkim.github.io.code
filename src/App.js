import React, {useEffect} from "react";

import {createGlobalStyle} from "styled-components";
import AppRouter from "./router/AppRouter";
import oc from "open-color";

import {useDispatch, useSelector} from "react-redux";
import {LOGIN} from "./_actions/userAction";


const GlobalStyle = createGlobalStyle`
body {
    background: ${oc.white};
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

const checkLoggedIn = (user, dispatch) => {
    const login = JSON.parse(localStorage.getItem("login"));
    // 기존에 로그인이 되어있지 않았다면, 함수 종료
    if(!login)
        return;
    // 기존에 로그인이 되어있었다면, 로그인 상태로 전환
    // 정상적으로 재로그인을 하는 것으로 사용하기 위해서는 type: LOGIN으로 하면 됌
    dispatch({
        type: LOGIN,
        data: login,
    });
    // 추후에 기능 구현이 완료되고나서, Backend에서 토큰을 이용한 재로그인 프로세스를 구현할 예정
}

function App() {
    const user = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    useEffect(()=>{
        checkLoggedIn(user, dispatch);
    }, []);

    return (
        <>
            <GlobalStyle/>
            <AppRouter/>
        </>
    )
}

export default App;