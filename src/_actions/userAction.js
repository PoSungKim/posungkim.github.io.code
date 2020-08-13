import * as userApi from "../utils/userApi";
// 로그인, 로그아웃 등 회원가입 관련 Action 및 Redux-Saga 생성

// Action Types 생성
import {call, put, takeEvery, takeLatest} from "redux-saga/effects";
import * as postsAPI from "../components/reduxpractice/ReduxThunkSagaComp/API/posts";

export const LOGIN = 'user/LOGIN';
export const LOGOUT = 'user/LOGOUT';
export const USERS = 'user/USERS';
export const USERS_SUCCESS = 'user/USERS_SUCCESS';
export const USERS_ERROR = 'user/USERS_ERROR';

// Action 생성
export const getUsers = () => (
    {type: USERS}
);
export const loginUser = () => (
    {type: LOGIN}
);
export const logOutUser = () => (
    {type: LOGOUT}
);

// Redux-Saga Action 처리 함수 생성
function* getUsersSaga() {
    console.log("getUsersSaga()가 실행");
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

// Redux-saga action 처리 함수
function* getPostsSaga() {
    console.log("getPostsSaga()");
    try {
        const posts = yield call(postsAPI.getPosts); // Promise 반환 값이 올 때까지 대기하게 된다 (yield)
        yield put({
            type: USERS_SUCCESS,
            payload: posts
        });
    } catch (error) {
        yield put({
            type: USERS_ERROR,
            payload: error,
            error: true
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
}