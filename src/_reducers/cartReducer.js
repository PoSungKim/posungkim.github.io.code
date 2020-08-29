import {
    ADD_CART,
    ADD_CART_ERROR,
    ADD_CART_SUCCESS, DELETE_CART, DELETE_CART_ERROR, DELETE_CART_SUCCESS,
    SHOW_ALL_CARTS, SHOW_ALL_CARTS_ERROR,
    SHOW_ALL_CARTS_SUCCESS
} from "../_actions/cartAction";

const initialState = {
    transmission: {
        loading: false,
        data: [],
        error: false,
    },
    myCart: [],
};


// productReducer 생성
export default function cartReducer(state = initialState, action) {
    console.log("cartReducer() 함수 실행", action);
    switch (action.type) {
        case SHOW_ALL_CARTS:
        case ADD_CART:
        case DELETE_CART :
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
        case SHOW_ALL_CARTS_ERROR:
        case ADD_CART_ERROR:
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