import {call, put, takeEvery} from "redux-saga/effects";
import {ADD_CART, ADD_CART_ERROR, ADD_CART_SUCCESS,
    SHOW_ALL_CARTS, SHOW_ALL_CARTS_ERROR, SHOW_ALL_CARTS_SUCCESS} from "./cartAction";
import * as cartApi from "../utils/axios/cartApi"

function* addCartSaga(action) {
    console.log("addCartSaga() 실행", action);
    try {
        const success = yield call(cartApi.addCurCart, action.data);
        yield put({
            type: ADD_CART_SUCCESS,
            payload: success,
            error: false,
        });
    } catch(error) {
        yield put ({
            type: ADD_CART_ERROR,
            payload: error,
            error: true,
        });
    }
}

function* showAllSaga(action) {
    console.log("showAllSaga() 실행", action);
    try {
        const carts = yield call(cartApi.getMyCart, action.data);
        yield put({
            type: SHOW_ALL_CARTS_SUCCESS,
            payload: carts,
            error: false,
        });
    } catch(error) {
        yield put ({
            type: SHOW_ALL_CARTS_ERROR,
            payload: error,
            error: true,
        });
    }
}

export function* cartSaga() {
    yield takeEvery(ADD_CART, addCartSaga);
    yield takeEvery(SHOW_ALL_CARTS, showAllSaga);
}