import React, {useState} from 'react';
import PageWrapper from "./frame/PageWrapper";
import InputWithLabel from "./frame/InputWithLabel";
import {useDispatch, useSelector} from "react-redux";
import {getUsers, goToHome, loginUser} from "../../_actions/userAction";
import {Link} from "react-router-dom";
import LinkButton from "./frame/LinkButton";

const initialLogInState = {
    email: '',
    password: '',
}

const LoginPage = () => {
    const users = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const [logInState, setLogIn] = useState(initialLogInState);
    const {email, password} = logInState;

    const onClickGetUsers = () => {
        dispatch(getUsers());
    }

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
        })
    }

    users.isLoggedIn && dispatch(goToHome());
    console.log("render ", users);

    return (
      <PageWrapper info = {"Log In Page"}>
        <InputWithLabel label="이메일" name="email" placeholder="이메일" onChange={onChange} value={email}/>
        <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password" onChange={onChange} value={password}/>

        <LinkButton content="로그인" width = "100%" onClick={onClick}/>
        <LinkButton to = "/register" content="회원가입"/>
        <LinkButton content="Get Users" onClick={onClickGetUsers}/>

        <ul>
          {users.data && users.data.map(user => (<li key={user.id}>
            {user.username} {user.password}
          </li>))}
        </ul>
      </PageWrapper>
    )
};

export default LoginPage; 