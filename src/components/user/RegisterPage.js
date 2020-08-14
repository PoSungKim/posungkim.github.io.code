import React, {useCallback, useEffect, useMemo, useState} from 'react';
import PageWrapper from "./frame/PageWrapper";
import InputWithLabel from "./frame/InputWithLabel";
import LinkButton from "./frame/LinkButton";
import {useDispatch, useSelector} from "react-redux";
import {goToHome, registerUser} from "../../_actions/userAction";
import {RegisterInfoValidator} from "./UserInfoValidator";
import RegisterError from "./frame/RegisterError";

// Store에 반영하기 전에 준비해놓을 Local State
const initialRegisterState = {
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
};

const initialErrorState = {
    warning: [],
    isValid: false,
};

const RegisterPage = () => {
    const users = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const [registerState, setRegister] = useState(initialRegisterState);
    const [errorState, setError] = useState(initialErrorState);
    const {username, email, password, passwordConfirm} = registerState;

    const onClick = () => {
        if (!errorState.isValid) {
            return ;
        }
        dispatch({...registerUser(),
            data: {...registerState},
        });
    }

    const onChange = (event) => {
        setRegister({
            ...registerState,
            [event.target.name] : event.target.value
        })
    }

    useEffect( () => {
        const {warning, result} = RegisterInfoValidator(registerState, errorState, setError, dispatch);
        setError({warning, isValid: result});
        if (users.isExisted.username || users.isExisted.email) {
            setError({
                warning: [...warning, "중복된 유저이름 혹은 이메일이 존재합니다."],
                isValid: false
            });
        }

    }, [registerState, dispatch, users.isExisted.username, users.isExisted.email]);

    users.isLoggedIn && dispatch(goToHome());

    console.log("render ");
    console.log("errorState 확인", errorState)
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
            {!errorState.isValid
                && errorState.warning.map(warning=>
                (<RegisterError>{warning}</RegisterError>))
            }
            <LinkButton to = "/register" content = "회원가입" width = "100%" onClick={onClick} />
        </PageWrapper>
    )
};

export default RegisterPage;