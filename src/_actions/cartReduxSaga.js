import {call, getContext, put, takeEvery} from "redux-saga/effects";
import {
    ADD_CART, ADD_CART_ERROR, ADD_CART_SUCCESS, DELETE_CART, DELETE_CART_ERROR, DELETE_CART_SUCCESS, GO_TO_MYCART,
    SHOW_ALL_CARTS, SHOW_ALL_CARTS_ERROR, SHOW_ALL_CARTS_SUCCESS
} from "./cartAction";
import * as cartApi from "../utils/axios/cartApi"

function* addCartSaga(action) {
    console.log("addCartSaga() 실행", action);
    try {
        const success = yield call(cartApi.addCurCart, action.data);
        // 성공적으로 Cart에 넣었다면
        yield put({
            type: ADD_CART_SUCCESS,
            payload: success,
            error: false,
        });
        // 새로운 Cart 리스트로 업데이트 시작 한 이후에
        yield put ({
            type: SHOW_ALL_CARTS,
            data: {email: action.data.email},
        })
        // MyCart 페이지로 이동하세요, 설사 새로운 Cart 리스트로 업데이트 완료 전에 페이지로 이동한다고 해도,
        // 추후에 SHOW_ALL_CARTS_SUCCESS 엑션이 처리됨에 따라 State 내용이 달라지고. MyCart 페이지도 리렌더링되기 때문에 괜찮을 것이라 생각함.
        yield put ({
            type: GO_TO_MYCART,
        })
    } catch(error) {
        yield put ({
            type: ADD_CART_ERROR,
            payload: error,
            error: true,
        });
    }
}

function* deleteCartSaga(action) {
    console.log("deleteCartSaga() 실행", action);
    try {
        const success = yield call(cartApi.deleteCurCart, action.data);
        yield put({
            type: DELETE_CART_SUCCESS,
            payload: success,
            error: false,
        });
        yield put( {
            type: SHOW_ALL_CARTS,
            data: {email : action.data.email},
        })
    } catch(error) {
        yield put ({
            type: DELETE_CART_ERROR,
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

function* goToMyCartSaga() {
    const history = yield getContext('history');
    history.push("/mycart");
}

export function* cartSaga() {
    yield takeEvery(ADD_CART, addCartSaga);
    yield takeEvery(DELETE_CART, deleteCartSaga);
    yield takeEvery(SHOW_ALL_CARTS, showAllSaga);
    yield takeEvery(GO_TO_MYCART, goToMyCartSaga);
}