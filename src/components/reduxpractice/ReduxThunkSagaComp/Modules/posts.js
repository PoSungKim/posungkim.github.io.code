import * as postsAPI from "../API/posts";
import {
    createPromiseThunk,
    createPromiseThunkById,
    handleAsyncActions,
    handleAsyncActionsById,
    reducerUtils
} from "../lib/asyncUtils";
import {call, put, takeEvery, getContext, select} from "redux-saga/effects";

// Action 정의
const GET_POSTS = 'posts/GET_POSTS';
const GET_POSTS_SUCCESS = 'posts/GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'posts/GET_POSTS_ERROR';

const GET_POST = 'posts/GET_POST';
const GET_POST_SUCCESS = 'posts/GET_POST_SUCCESS';
const GET_POST_ERROR = 'posts/GET_POST_ERROR';

const GO_TO_HOME = "posts/GO_TO_HOME"
const CLEAR_POST = 'posts/CLEAR_POST';
const PRINT_STATE = "posts/PRINT_STATE";

// 초기 상태 정의
const initialState = {
    posts: reducerUtils.initial(),
    post: {}
}

const getPostsReducer = handleAsyncActions(GET_POSTS, 'posts', true);
const getPostReducer = handleAsyncActionsById(GET_POST, 'post', true);

// Reducer 함수
export default function posts(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_ERROR:
            return getPostsReducer(state, action);
        case GET_POST:
        case GET_POST_SUCCESS:
        case GET_POST_ERROR:
            return getPostReducer(state, action);
        case CLEAR_POST:
            return {
                ...state,
                post: reducerUtils.initial()
            }
        default :
            return state;
    }
}

// Redux-saga Action
export const getPosts = () => ({type: GET_POSTS});
export const getPost = (id) => ({
    type: GET_POST,
    payload: id, // Redux-saga 용도
    meta: id     // Reducer 용도
});
export const printState = () => ({type: PRINT_STATE});

// Redux-saga action 처리 함수
function* getPostsSaga() {
    console.log("getPostsSaga()");
    try {
        const posts = yield call(postsAPI.getPosts); // Promise 반환 값이 올 때까지 대기하게 된다 (yield)
        yield put({
            type: GET_POSTS_SUCCESS,
            payload: posts
        });
    } catch (error) {
        yield put({
            type: GET_POSTS_ERROR,
            payload: error,
            error: true
        });
    }
}

function* getPostSaga(action) {
    const id = action.payload;
    try {
        const post = yield call(postsAPI.getPostById, id); // Promise 반환 값이 올 때까지 대기하게 된다 (yield)
        yield put({
            type: GET_POST_SUCCESS,
            payload: post,
            meta: id
        });
    } catch (error) {
        yield put({
            type: GET_POST_ERROR,
            payload: error,
            error: true,
            meta: id
        });
    }
}

function* goToHomeSaga() {
    const history = yield getContext('history');
    history.push("/");
}

function* printStateSaga() {
    const state = yield select(state => state.posts);
    console.log(state);
}

// Redux-saga action 모니터링 함수
export function* postsSaga() {
    yield takeEvery(GET_POSTS, getPostsSaga);
    yield takeEvery(GET_POST, getPostSaga);
    yield takeEvery(GO_TO_HOME, goToHomeSaga);
    yield takeEvery(PRINT_STATE, printStateSaga);
}

export const goToHome = () => ({type: GO_TO_HOME})

export const clearPost = () => ({type: CLEAR_POST});

// Redux-thunk 코드
/*
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunkById(GET_POST, postsAPI.getPostById);

export const goToHome = () => (dispatch, getState, { history }) => {
    history.push("/");
}

//const getPostReducer = handleAsyncActions(GET_POST, 'post');
const getPostReducer = (state, action) => {
    const id = action.meta;

    switch (action.type) {
        case GET_POST:
            return {
                ...state,
                post: {
                    ...state.post,
                    [id] : reducerUtils.loading(state.post[id] && state.post[id].data)
                }
            }
        case GET_POST_SUCCESS:
            return {
                ...state,
                post: {
                    ...state.post,
                    [id] : reducerUtils.success(action.payload)
                }
            }
        case GET_POST_ERROR:
            return {
                ...state,
                post: {
                    ...state.post,
                    [id] : reducerUtils.error(action.payload)
                }
            }

        default :
            return state;
    }
}
*/


//export const getPost = createPromiseThunk(GET_POST, postsAPI.getPostById);
/*
export const getPost = (id) => async dispatch => {
    dispatch({
        type: GET_POST,
        meta: id
    })
    try {
        const payload = await postsAPI.getPostById(id);
        dispatch({
            type: GET_POST_SUCCESS,
            payload,
            meta: id
        })
    } catch (error) {
        dispatch({
            type: GET_POST_ERROR,
            payload: error,
            error: true,
            meta: id
        });
    }
};
 */