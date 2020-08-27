// redux-saga
import {all} from "redux-saga/effects";
import {combineReducers} from "redux";
import userReducer from "./userReducer";
import {userSaga} from "../_actions/userReduxSaga";
import productReducer from "./productReducer";
import {productSaga} from "../_actions/productReduxSaga";
import {cartSaga} from "../_actions/cartReduxSaga";
import cartReducer from "./cartReducer";


const rootReducer = combineReducers({userReducer, productReducer, cartReducer});

export function* rootSaga() {
    yield all([
        userSaga(), productSaga(), cartSaga(),
    ]);
}

export default rootReducer;