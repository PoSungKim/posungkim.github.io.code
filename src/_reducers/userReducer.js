// 로그인, 로그아웃 등 회원가입 관련 Reducer 생성

// InitialState 생성
import {
    GO_TO_HOME, LOGOUT,
    REGISTER,
    REGISTER_ERROR,
    REGISTER_SUCCESS,
    USERS,
    USERS_ERROR,
    USERS_SUCCESS
} from "../_actions/userAction";

const initialState = {
    loading: false,
    data: [],
    error: null,
    currentUser: null,
}

// Counter Reducer 생성
export default function userReducer(state = initialState, action) {
    console.log("userReducer() 함수 실행");
    console.log(action);
    switch (action.type) {
        case USERS:
            console.log("action.type 실행");
            return {
                ...state,
                loading: true,
            };
        case USERS_SUCCESS:
            return {
                ...state,
                data: action.payload
            };
        case USERS_ERROR:
            return {
                ...state,
                data: [action.payload],
                error: action.error,
            };
        case REGISTER:
            return {
                ...state,
                loading: true,
            }
        case REGISTER_SUCCESS :
            return {
                ...state,
                currentUser: action.payload,
            }
        case REGISTER_ERROR:
            return {
                ...state,
                data: [action.payload],
                error: action.error,
            };
        case LOGOUT:
            return {
                ...state,
                currentUser: null,
            }
        default:
            return state;
    }
}