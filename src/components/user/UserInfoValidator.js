import {isEmail, isLength, isAlphanumeric} from 'validator';
import {useDispatch} from "react-redux";
import {findUser} from "../../_actions/userAction";

export const RegisterInfoValidator = (info, errorState, setError, dispatch) => {

    const {username, email, password, passwordConfirm} = info;
    dispatch({
        ...findUser(),
        data: {
            username,
            email
        }
    });
    console.log(info);
    let message = {
        warning: [],
        result: true,
    }

    if (!isAlphanumeric(username) || !isLength(username, { min:4, max: 15})) {
        if(username)
            message.warning.push('아이디는 4~15 글자의 알파벳 혹은 숫자로 이뤄져야 합니다.');
        message.result = false;
    }

    if (!isEmail(email)) {
        if(email)
            message.warning.push("잘못된 이메일 형식입니다");
        message.result = false;
    }

    if(!isLength(password, { min: 5 })) {
        if (password)
            message.warning.push('비밀번호를 6자 이상 입력하세요.');
        message.result = false;
    }

    if (password !== passwordConfirm) {
        if (passwordConfirm)
            message.warning.push("두 비밀번호가 일치하지 않습니다.");
        message.result = false;
    }

    return message;
}