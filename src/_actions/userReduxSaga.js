import {call, getContext, put, takeEvery, takeLatest} from "redux-saga/effects";
import {
    FINDUSER, FINDUSER_ERROR, FINDUSER_SUCCESS,
    GO_TO_HOME,
    LOGIN, LOGIN_ERROR, LOGIN_SUCCESS,
    REGISTER, REGISTER_ERROR, REGISTER_SUCCESS,
} from "./userAction";
import * as userApi from "../utils/axios/userApi";

// 로그인, 로그아웃 등 회원가입 관련 Redux-Saga 생성

// Redux-Saga Action 처리 함수 생성

function* registerUserSaga (action) {
    console.log("registerUserSaga() 실행", action);
    try {
        yield call(userApi.registerUser, action.data);
        yield put({
            type: REGISTER_SUCCESS,
            payload: action.data,
        });

        // 회원가입 하고 바로 로그인될 수 있도록 연결하기!!
        yield put({
            type: LOGIN,
            data: {
                email: action.data.email,
                password: action.data.password
            },
        });

    } catch (error) {
        yield put ({
            type: REGISTER_ERROR,
            payload: error,
            error: true,
        });
    }
}

function* findUserSaga(action) {
    console.log("findUserSaga() 실행", action);
    try {
        const user = yield call(userApi.findUser, action.data);
        yield put({
            type: FINDUSER_SUCCESS,
            payload: user,
        });
    } catch(error) {
        yield put ({
            type: FINDUSER_ERROR,
            payload: error,
            error: true,
        });
    }
}

function* loginSaga(action) {
    console.log("loginSaga() 실행", action);
    try {
        const result = yield call(userApi.logInUser, action.data);
        const isOkay = result.email && result.password? true : false;
        yield put({
            type: isOkay? LOGIN_SUCCESS : LOGIN_ERROR,
            payload: {...result,
                password: action.data.password,
                isLoggedIn: isOkay,
            },
            error: !isOkay,
        });
    } catch (error) {
        yield put ({
            type: LOGIN_ERROR,
            payload: error,
            error: true,
        })
    }
}

function* goToHomeSaga () {
    const history = yield getContext('history');
    history.push("/");
}




export function* userSaga() {
    yield takeEvery(LOGIN, loginSaga);
    yield takeEvery(REGISTER, registerUserSaga);
    yield takeEvery(GO_TO_HOME, goToHomeSaga);
    yield takeEvery(FINDUSER, findUserSaga);
}