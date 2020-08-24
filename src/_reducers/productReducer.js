import {
    UPLOAD_ALL, UPLOAD_ALL_ERROR,
    UPLOAD_ALL_SUCCESS,
    UPLOAD_PREVIEW,
    UPLOAD_PREVIEW_ERROR,
    UPLOAD_PREVIEW_SUCCESS
} from "../_actions/productAction";
// 로그인, 로그아웃 등 회원가입 관련 Reducer 생성

// InitialState 생성

const initialState = {
    transmission : {
        loading: false,
        data: [],
        error: null,
    },
    uploadProduct: {
        images: [],
        title: '',
        content: '',
        price : '',
        continent: 'Asia',
    }
}

// productReducer 생성
export default function productReducer(state = initialState, action) {
    console.log("productReducer() 함수 실행", action);
    switch (action.type) {
        case UPLOAD_PREVIEW:
            return {
                ...state,
                transmission: {
                    ...state.transmission,
                    loading: true,
                }
            }
        case UPLOAD_PREVIEW_SUCCESS :
            return {
                ...state,
                transmission: {
                    ...state.transmission,
                    data: action.payload,
                    loading: false,
                },
                uploadProduct: {
                    ...state.uploadProduct,
                    images: action.payload
                }
            }
        case UPLOAD_PREVIEW_ERROR:
            return {
                ...state,
                transmission: {
                    data: action.payload,
                    error: action.error,
                    loading: false,
                },
            };
        case UPLOAD_ALL:
            return {
                ...state,
                transmission: {
                    ...state.transmission,
                    loading: true,
                },
            }
        case UPLOAD_ALL_SUCCESS :

            return {
                ...state,
                transmission: {
                    ...state.transmission,
                    data: action.payload,
                    loading: false,
                },
                uploadProduct: {
                    ...action.payload,
                },
            }

        case UPLOAD_ALL_ERROR:
            return {
                ...state,
                transmission: {
                    data: action.payload,
                    error: action.error,
                    loading: false,
                },
            };
        default:
            return state;
    }
}