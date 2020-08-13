// redux-saga
import {all} from "redux-saga/effects";
import {combineReducers} from "redux";
import userReducer from "./userReducer";
import {userSaga} from "../_actions/userAction";


const rootReducer = combineReducers({userReducer});

export function* rootSaga() {
    yield all([
        userSaga()
    ]);
}

export default rootReducer;