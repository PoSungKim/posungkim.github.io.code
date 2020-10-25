import {
    ADD_CART,
    ADD_CART_ERROR,
    ADD_CART_SUCCESS, DELETE_CART, DELETE_CART_ERROR, DELETE_CART_SUCCESS, PURCHASE_CARTS, PURCHASE_CARTS_SUCCESS,
    SHOW_ALL_CARTS, SHOW_ALL_CARTS_ERROR,
    SHOW_ALL_CARTS_SUCCESS, SHOW_ALL_PURCHASE, SHOW_ALL_PURCHASE_SUCCESS
} from "../_actions/cartAction";

const initialState = {
    transmission: {
        loading: false,
        data: [],
        error: false,
    },
    myCart: [],
    myPurchase: [],
};


// productReducer 생성
export default function cartReducer(state = initialState, action) {
    // console.log("cartReducer() 함수 실행", action);
    switch (action.type) {
        case ADD_CART:
        case SHOW_ALL_CARTS:
        case PURCHASE_CARTS:
        case SHOW_ALL_PURCHASE:
        case DELETE_CART:
            return {
                ...state,
                transmission: {
                    ...initialState.transmission,
                    loading: true,
                },
            }
        case SHOW_ALL_CARTS_SUCCESS :
            return {
                ...state,
                transmission: {
                    ...state.transmission,
                    data: action.payload,
                    loading: false,
                },
                myCart: action.payload,
            };
        case SHOW_ALL_PURCHASE_SUCCESS : {
            return {
                ...state,
                transmission: {
                    ...state.transmission,
                    data: action.payload,
                    loading: false,
                },
                myPurchase: action.payload,
            }
        }
        case PURCHASE_CARTS_SUCCESS:
            return {
                ...state,
                transmission: {
                    ...state.transmission,
                    data: action.payload,
                    loading: false,
                },
                myCart: [],
            }
        case ADD_CART_SUCCESS:
        case DELETE_CART_SUCCESS:
            return {
                ...state,
                transmission: {
                    ...state.transmission,
                    data: action.payload,
                    loading: false,
                },
            }
        case ADD_CART_ERROR:
        case SHOW_ALL_CARTS_ERROR:
        case PURCHASE_CARTS_SUCCESS:
        case SHOW_ALL_CARTS_ERROR:
        case DELETE_CART_ERROR:
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