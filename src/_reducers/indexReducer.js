// redux-saga
import {all} from "redux-saga/effects";
import {combineReducers} from "redux";
import userReducer from "./userReducer";
import {userSaga} from "../_actions/userReduxSaga";
import productReducer from "./productReducer";
import {productSaga} from "../_actions/productReduxSaga";


const rootReducer = combineReducers({userReducer, productReducer});

export function* rootSaga() {
    yield all([
        userSaga(), productSaga()
    ]);
}

export default rootReducer;