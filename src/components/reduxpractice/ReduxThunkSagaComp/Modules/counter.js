// ActionType 생성
import {delay, put, takeEvery, takeLatest} from "redux-saga/effects";

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_ASYNC = "counter/INCREASE_ASYNC"
const DECREASE_ASYNC = "counter/DECREASE_ASYNC"

// Action 생성
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});
export const increaseAsync = () => ({type: INCREASE_ASYNC});
export const decreaseAsync = () => ({type: DECREASE_ASYNC});


// redux-saga 함수 생성
function* increaseSaga() {
    yield put(increase());
}

function* decreaseSaga() {
    yield delay(1000);
    yield put(decrease());
}

export function* counterSaga() {
    yield takeEvery(INCREASE_ASYNC, increaseSaga);
    yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

// redux-thunk 함수 생성
/*
export const increaseAsync = () => (dispatch, getState) => {
    setTimeout( () => {
        dispatch(increase());
    }, 1000);
}

export const decreaseAsync = () => (dispatch, getState) => {
    setTimeout( () => {
        dispatch(decrease());
    }, 1000);
}
*/


// InitialState 생성
const initialState = 0;

// Counter Reducer 생성
export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
}