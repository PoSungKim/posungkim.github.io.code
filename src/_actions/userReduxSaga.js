import {call, put, takeEvery, takeLatest} from "redux-saga/effects";
import {
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
            payload: "회원가입이 성공적으로 되었습니다",
        });
    } catch (error) {
        yield put ({
            type: REGISTER_ERROR,
            payload: error,
            error: true,
        });
    }
}

function* loginSaga() {
    yield put(loginUser());
}

function* logoutSaga() {
    yield put(logOutUser());
}

export function* userSaga() {
    yield takeEvery(LOGIN, loginSaga);
    yield takeLatest(LOGOUT, logoutSaga);
    yield takeEvery(USERS, getUsersSaga);
    yield takeEvery(REGISTER, registerUserSaga);
}