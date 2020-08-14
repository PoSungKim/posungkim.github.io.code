import React, {useState} from 'react';
import PageWrapper from "./frame/PageWrapper";
import InputWithLabel from "./frame/InputWithLabel";
import LinkButton from "./frame/LinkButton";
import {useDispatch, useSelector} from "react-redux";
import {goToHome, registerUser} from "../../_actions/userAction";

// Store에 반영하기 전에 준비해놓을 Local State
const initialState = {
    username: null,
    email: null,
    password: null,
    passwordConfirm: null,
}

const RegisterPage = () => {
    const users = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const [state, setState] = useState(initialState);

    const onClick = () => {
        dispatch({...registerUser(),
            data: {...state},
        });
    }

    const onChange = (event) => {
        setState({
            ...state,
            [event.target.name] : event.target.value
        })
        console.log(state);
    }
    users.isLoggedIn && dispatch(goToHome());
    console.log("render ");
    const {username, email, password, passwordConfirm} = state;
    return (
        <PageWrapper>
            <InputWithLabel
                label="사용자 이름" name="username" placeholder="사용자 이름"
                onChange={onChange} value={username}/>
            <InputWithLabel
                label="이메일" name="email" placeholder="이메일"
                onChange={onChange} value={email}/>
            <InputWithLabel
                label="비밀번호" name="password" placeholder="비밀번호"
                type="password" onChange={onChange} value={password}/>
            <InputWithLabel
                label="비밀번호 확인" name="passwordConfirm" placeholder="비밀번호 확인"
                type="password" onChange={onChange} value={passwordConfirm}/>
            <LinkButton to = "/register" content = "회원가입" width = "100%" onClick={onClick} />
        </PageWrapper>
    )
};

export default RegisterPage;