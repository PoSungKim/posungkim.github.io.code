import {
    GET_PRODUCT,
    GET_PRODUCT_ERROR,
    GET_PRODUCT_SUCCESS,
    REFRESH_PRODUCT,
    GET_PRODUCTS,
    GET_PRODUCTS_ERROR,
    GET_PRODUCTS_SUCCESS,
    UPLOAD_ALL,
    UPLOAD_ALL_ERROR,
    UPLOAD_ALL_SUCCESS,
    UPLOAD_PREVIEW,
    UPLOAD_PREVIEW_ERROR,
    UPLOAD_PREVIEW_SUCCESS,
    UPLOAD_REFRESH,
    GET_CARTSOLD,
    GET_CARTSOLD_SUCCESS,
    GET_CARTSOLD_ERROR
} from "../_actions/productAction";
// Product 관련 Reducer 생성

// InitialState 생성

const initialState = {
    transmission : {
        loading: false,
        data: [],
        error: false,
    },
    getProducts : [],
    singleProduct: {
        images: [],
        title: '',
        content: '',
        price : '',
        continent: '',
    },
    singleProductCartSold: {
      cart_cnt: 0,
      purchase_cnt: 0,
    },
    uploadProduct: {
        images: [],
        title: '',
        content: '',
        price : '',
        continent: 'Asia',
        isSaved: false,
    },
}

// productReducer 생성
export default function productReducer(state = initialState, action) {
    console.log("productReducer() 함수 실행", action);
    switch (action.type) {
        case GET_CARTSOLD:
            return {
                ...state,
                transmission: {
                    ...initialState.transmission,
                    loading: true,
                }
            }
        case GET_CARTSOLD_SUCCESS:
            return {
                ...state,
                transmission: {
                    ...state.transmission,
                    data: action.payload,
                    loading: false,
                },
                singleProductCartSold: action.payload,
            }
        case GET_CARTSOLD_ERROR :
            return {
                ...state,
                transmission: {
                    data: action.payload,
                    error: action.error,
                    loading: false,
                },
            };
        case UPLOAD_PREVIEW:
            return {
                ...state,
                transmission: {
                    ...initialState.transmission,
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
                    ...initialState.transmission,
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
                uploadProduct: action.payload,
            }
        case UPLOAD_ALL_ERROR:
            return {
                ...state,
                transmission: {
                    data: action.payload,
                    error: true,
                    loading: false,
                },
            };
        case UPLOAD_REFRESH :
            return {
                ...state,
                uploadProduct: initialState.uploadProduct,
            }
        case GET_PRODUCTS:
            return {
                ...state,
                transmission: {
                    ...state.transmission,
                    loading: true,
                },
            }
        case GET_PRODUCTS_SUCCESS :
            return {
                ...state,
                transmission: {
                    ...state.transmission,
                    loading: false,
                    data: action.payload,
                    error: action.payload === null? true : action.error,
                },
                getProducts: action.payload === null? [] : action.payload,
            }
        case GET_PRODUCTS_ERROR:
            return {
                ...state,
                transmission: {
                    data: action.payload,
                    error: action.error,
                    loading: false,
                },
            };
        case GET_PRODUCT :
            return {
                ...state,
                transmission: {
                    ...initialState.transmission,
                    loading: true,
                }
            }
        case GET_PRODUCT_SUCCESS :
            return {
                ...state,
                transmission: {
                    loading: false,
                    data: action.payload,
                    error: action.payload === null,
                },
                singleProduct: action.payload === null? initialState.singleProduct :action.payload,
            }
        case GET_PRODUCT_ERROR :
            return {
                ...state,
                transmission: {
                    loading: false,
                    data: action.payload === null ? initialState.singleProduct : action.payload,
                    error: action.error,
                },
                singleProduct: action.payload === null ? initialState.singleProduct : action.payload,
            }
        case REFRESH_PRODUCT :
            return {
                ...state,
                singleProduct: initialState.singleProduct,
            }
        default:
            return state;
    }
}