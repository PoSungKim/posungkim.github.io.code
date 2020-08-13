import React from 'react';
import LoginPageWrapper from "./LoginPageWrapper";
import InputWithLabel from "./InputWithLabel";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../_actions/userAction";
import styled from "styled-components";

const LoginButton = styled.button`
    & + & {
        margin-left: 10px;
        margin-top: 30px;
    }
    padding: 8px 12px;
    border-radius: 4px;
    background-color: #ffd43b;
`;

const LoginPage = () => {
    const users = useSelector(state => state.userReducer.data);
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(getUsers());
    }

    console.log("render ");
    return (
        <LoginPageWrapper>
            <InputWithLabel label="이메일" name="email" placeholder="이메일"/>
            <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password"/>

            <LoginButton>로그인</LoginButton>
            <LoginButton>회원가입</LoginButton>
            <LoginButton onClick={onClick}>Get Users</LoginButton>
            <ul>
                {users && users.map(user => (<li key={user.id}>
                    {user.username} {user.password}
                </li>))}
            </ul>
        </LoginPageWrapper>
    )
};

export default LoginPage;