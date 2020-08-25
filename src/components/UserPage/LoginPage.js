import React, {useEffect, useState} from 'react';
import PageWrapper from "./Frame/PageWrapper";
import InputWithLabel from "./Frame/InputWithLabel";
import {useDispatch, useSelector} from "react-redux";
import {initialTransmission, goToHome, loginUser} from "../../_actions/userAction";
import {Link} from "react-router-dom";
import LinkButton from "./Frame/LinkButton";
import ErrorMessage from "./Frame/ErrorMessage";

const initialLogInState = {
    email: '',
    password: '',
}

const LoginPage = () => {
    const users = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const [logInState, setLogIn] = useState(initialLogInState);
    const [errorState, setError] = useState(false);
    const {email, password} = logInState;

    const onClick = () => {
        dispatch({
            ...loginUser(),
            data: {...logInState},
        });
    }

    const onChange = (event) => {
        setLogIn({
            ...logInState,
            [event.target.name]: event.target.value,
        });
        if (users.transmission.error) {
            dispatch({
                ...initialTransmission(),
            });
            setError(false);
        }
    }

    const onKeyPress = (event) => {
        if (event.key == "Enter")
            onClick();
    }

    useEffect(()=>{
        setError(users.transmission.error);
        }, [dispatch, users.transmission]);

    users.isLoggedIn && dispatch(goToHome());
    console.log("render ", users);

    return (
      <PageWrapper info = {"Log In Page"}>
        <InputWithLabel
            infoType = 'input' label="이메일" name="email"
            placeholder="이메일" onChange={onChange} value={email}
            onKeyPress = {onKeyPress}/>
        <InputWithLabel
            infoType = 'input' label="비밀번호" name="password"
            placeholder="비밀번호" type="password" onChange={onChange}
            value={password} onKeyPress = {onKeyPress} />

        {errorState && <ErrorMessage>이메일 혹은 비밀번호가 맞지 않습니다.</ErrorMessage>}

        <LinkButton content="로그인" width = "100%" onClick={onClick}/>
        <LinkButton to = "/register" content="회원가입"/>
        <ul>
          {users.data && users.data.map(user => (<li key={user.id}>
            {user.username} {user.password}
          </li>))}
        </ul>
      </PageWrapper>
    )
};

export default LoginPage; 