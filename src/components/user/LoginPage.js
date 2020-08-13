import React from 'react';
import PageWrapper from "./framework/PageWrapper";
import InputWithLabel from "./framework/InputWithLabel";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../_actions/userAction";
import {Link} from "react-router-dom";
import LinkButton from "./framework/LinkButton";


const LoginPage = () => {
  const users = useSelector(state => state.userReducer.data);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(getUsers());
  }

  console.log("render ");
  return (
      <PageWrapper>
        <InputWithLabel label="이메일" name="email" placeholder="이메일"/>
        <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password"/>

        <LinkButton content="로그인" width = "100%"/>
        <LinkButton to = "/register" content="회원가입"/>
        <LinkButton content="Get Users" onClick={onClick}/>

        <ul>
          {users && users.map(user => (<li key={user.id}>
            {user.username} {user.password}
          </li>))}
        </ul>
      </PageWrapper>
  )
};

export default LoginPage; 