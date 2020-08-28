// Cart 관련 Action

export const ADD_CART = 'cart/ADD_CART';
export const ADD_CART_SUCCESS = 'cart/ADD_CART_SUCCESS';
export const ADD_CART_ERROR = 'cart/ADD_CART_ERROR';

export const SHOW_ALL_CARTS = 'cart/SHOW_ALL_CARTS';
export const SHOW_ALL_CARTS_SUCCESS = 'cart/SHOW_ALL_CARTS_SUCCESS';
export const SHOW_ALL_CARTS_ERROR = 'cart/SHOW_ALL_CARTS_ERROR';

export const DELETE_CART = 'cart/DELETE_CART';
export const DELETE_CART_SUCCESS = 'cart/DELETE_CART_SUCCESS';
export const DELETE_CART_ERROR = 'cart/DELETE_CART_ERROR';

export const GO_TO_MYCART = 'cart/GO_TO_MYCART';

// Action 생성
export const addCart = () => (
    {type: ADD_CART}
);

export const showAllCarts = () => (
    {type: SHOW_ALL_CARTS}
);

export const deleteCart = () => (
    {type: DELETE_CART}
)

export const goToMyCart = () => (
    {type: GO_TO_MYCART}
)