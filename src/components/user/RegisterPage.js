import React, {useState} from 'react';
import PageWrapper from "./framework/PageWrapper";
import InputWithLabel from "./framework/InputWithLabel";
import {useDispatch, useSelector} from "react-redux";
import {registerUser} from "../../_actions/userAction";
import LinkButton from "./framework/LinkButton";

const initialState = {
    username: null,
    email: null,
    password: null
}

const RegisterPage = () => {
    const users = useSelector(state => state.userReducer.data);
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

    console.log("render ");
    return (
        <PageWrapper>
            <InputWithLabel label="사용자 이름" name="username" placeholder="사용자 이름" onChange={onChange}/>
            <InputWithLabel label="이메일" name="email" placeholder="이메일" onChange={onChange}/>
            <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password" onChange={onChange}/>
            <LinkButton to = "/register" content = "회원가입" width = "100%" onClick={onClick} />
        </PageWrapper>
    )
};

export default RegisterPage;