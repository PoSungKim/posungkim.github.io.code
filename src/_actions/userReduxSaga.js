import {call, getContext, put, takeEvery, takeLatest} from "redux-saga/effects";
import {
    GO_TO_HOME, goToHome,
    LOGIN,
    loginUser,
    LOGOUT,
    logOutUser,
    REGISTER,
    REGISTER_ERROR, REGISTER_SUCCESS,
    USERS,
    USERS_ERROR,
    USERS_SUCCESS
} from "./userAction";
import * as userApi from "../utils/userApi";

// 로그인, 로그아웃 등 회원가입 관련 Redux-Saga 생성

// Redux-Saga Action 처리 함수 생성
function* getUsersSaga() {
    console.log("getUsersSaga() 실행");
    try {
        const users = yield call(userApi.getUsers);
        console.log("getUsersSaga ", users);
        yield put({
            type: USERS_SUCCESS,
            payload: users,
        });
    } catch (error) {
        yield put ({
            type: USERS_ERROR,
            payload: error,
            error: true,
        });
    }
}

function* registerUserSaga (action) {
    console.log("registerUserSaga() 실행", action);

    try {
        yield call(userApi.registerUser, action.data);
        yield put({
            type: REGISTER_SUCCESS,
            payload: action.data,
        });
    } catch (error) {
        yield put ({
            type: REGISTER_ERROR,
            payload: error,
            error: true,
        });
    }
}

function* goToHomeSaga () {
    const history = yield getContext('history');
    history.push("/");
}

function* loginSaga() {
    yield put(loginUser());
}

export function* userSaga() {
    yield takeEvery(LOGIN, loginSaga);
    yield takeEvery(USERS, getUsersSaga);
    yield takeEvery(REGISTER, registerUserSaga);
    yield takeEvery(GO_TO_HOME, goToHomeSaga);
}