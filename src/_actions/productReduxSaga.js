import {call, getContext, put, takeEvery, takeLeading} from "@redux-saga/core/effects";
import {
    GET_PRODUCT, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS,
    GET_PRODUCTS, GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS,
    GO_TO_HOME, GO_TO_LOGIN,
    UPLOAD_ALL, UPLOAD_ALL_ERROR,
    UPLOAD_ALL_SUCCESS,
    UPLOAD_PREVIEW,
    UPLOAD_PREVIEW_ERROR,
    UPLOAD_PREVIEW_SUCCESS, UPLOAD_REFRESH,
} from "./productAction";
import * as productApi from "../utils/axios/productApi";


// Product Upload 관련 Redux-Saga 생성

// Redux-Saga Action 처리 함수 생성

function* uploadPreviewSaga(action) {
    console.log("uploadPreviewSaga() 실행", action);
    try {
        const previewImages = yield call(productApi.uploadPreview, action.data, action.config);
        yield put({
            type: UPLOAD_PREVIEW_SUCCESS,
            payload: previewImages,
        });
    } catch(error) {
        yield put ({
            type: UPLOAD_PREVIEW_ERROR,
            payload: error,
            error: true,
        });
    }
}

function* uploadAllSaga(action) {
    console.log("uploadAllSaga() 실행", action);
    try {
        const transmissionResult = yield call(productApi.uploadAll, action.data, action.config);
        console.log("transmissionResult", transmissionResult);
        yield put({
            type: transmissionResult? UPLOAD_ALL_SUCCESS : UPLOAD_ALL_ERROR,
            payload: {
                ...action.data,
                isSaved: transmissionResult,
            },
            error: !transmissionResult
        });
        yield put({
            type: UPLOAD_REFRESH,
        });
        yield put({
            type: GET_PRODUCTS,
        });
    } catch(error) {
        yield put ({
            type: UPLOAD_ALL_ERROR,
            payload: error,
            error: true,
        });
    }
}

function* getProductSaga(action) {
    console.log("getProductSaga() 실행", action);
    try {
        const product = yield call(productApi.getOne, action.data);
        console.log(product);
        yield put({
            type: GET_PRODUCT_SUCCESS,
            payload: product,
            error: false,
        });
    } catch(error) {
        yield put ({
            type: GET_PRODUCT_ERROR,
            payload: error,
            error: true,
        });
    }
}

function* getProductsSaga(action) {
    console.log("getProductsSaga() 실행", action);
    try {
        const products = yield call(productApi.getAll);
        console.log(products);
        yield put({
            type: GET_PRODUCTS_SUCCESS,
            payload: products,
            error: false,
        });
    } catch(error) {
        yield put ({
            type: GET_PRODUCTS_ERROR,
            payload: error,
            error: true,
        });
    }
}

function* goToHomeSaga(action) {
    const history = yield getContext('history');
    history.push("/");
}

function* goToLoginSaga(action) {
    const history = yield getContext('history');
    history.push("/login");
}


export function* productSaga() {
    yield takeEvery(GET_PRODUCT, getProductSaga);
    yield takeEvery(GET_PRODUCTS, getProductsSaga);

    yield takeEvery(UPLOAD_PREVIEW, uploadPreviewSaga);
    yield takeLeading(UPLOAD_ALL, uploadAllSaga);

    yield takeEvery(GO_TO_HOME, goToHomeSaga);
    yield takeEvery(GO_TO_LOGIN, goToLoginSaga);

}