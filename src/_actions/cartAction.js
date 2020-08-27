// Cart 관련 Action

export const ADD_CART = 'cart/ADD_CART';
export const ADD_CART_SUCCESS = 'cart/ADD_CART_SUCCESS';
export const ADD_CART_ERROR = 'cart/ADD_CART_ERROR';

export const SHOW_ALL_CARTS = 'cart/SHOW_ALL_CARTS';
export const SHOW_ALL_CARTS_SUCCESS = 'cart/SHOW_ALL_CARTS_SUCCESS';
export const SHOW_ALL_CARTS_ERROR = 'cart/SHOW_ALL_CARTS_ERROR';

// Action 생성
export const addCart = () => (
    {type: ADD_CART}
);

export const showAllCarts = () => (
    {type: SHOW_ALL_CARTS}
);
