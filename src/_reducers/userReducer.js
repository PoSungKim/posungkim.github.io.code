// 로그인, 로그아웃 등 회원가입 관련 Reducer 생성

// InitialState 생성
import {
    FINDUSER, FINDUSER_SUCCESS,
    GO_TO_HOME, LOGOUT,
    REGISTER,
    REGISTER_ERROR,
    REGISTER_SUCCESS,
    USERS,
    USERS_ERROR,
    USERS_SUCCESS
} from "../_actions/userAction";

const initialState = {
    transmission : {
        loading: false,
        data: [],
        error: null,
    },
    register: {
        username: null,
        email: null,
        password: null,
        passwordConfirm: null,
    },
    isExisted: {
        username: null,
        email: null,
    },
    login: {
        email: null,
        password: null,
    },
    isLoggedIn: false
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
                transmission: {
                    ...state.transmission,
                    loading: true
                },
            };
        case USERS_SUCCESS:
            return {
                ...state,
                transmission: {
                    ...state.transmission,
                    data: action.payload
                }
            };
        case USERS_ERROR:
            return {
                ...state,
                transmission: {
                    data: [action.payload],
                    error: action.error,
                }
            };
        case REGISTER:
            return {
                ...state,
                transmission: {
                    ...state.transmission,
                    loading: true,
                }
            }
        case REGISTER_SUCCESS :
            return {
                ...state,
                transmission: {
                    ...state.transmission,
                    data: action.payload,
                },
                register: action.payload,
                isLoggedIn: true,
            }
        case REGISTER_ERROR:
            return {
                ...state,
                transmission: {
                    data: [action.payload],
                    error: action.error,
                },
            };
        case FINDUSER:
            return {
                ...state,
                transmission: {
                    ...state.transmission,
                    loading: true,
                }
            }
        case FINDUSER_SUCCESS :
            return {
                ...state,
                transmission: {
                    ...state.transmission,
                    data: action.payload,
                },
                isExisted: {
                    username: action.payload.username,
                    email: action.payload.email
                }
            }
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            }
        default:
            return state;
    }
}