// Product 관련 Action

export const UPLOAD_PREVIEW = 'product/UPLOAD_PREVIEW';
export const UPLOAD_PREVIEW_SUCCESS = 'product/UPLOAD_PREVIEW_SUCCESS';
export const UPLOAD_PREVIEW_ERROR = 'product/UPLOAD_PREVIEW_ERROR';

export const UPLOAD_ALL = 'product/UPLOAD_ALL';
export const UPLOAD_ALL_SUCCESS = 'product/UPLOAD_ALL_SUCCESS';
export const UPLOAD_ALL_ERROR = 'product/UPLOAD_ALL_ERROR';

export const UPLOAD_REFRESH = 'product/UPLOAD_REFRESH';

export const GO_TO_HOME = "product/GO_TO_HOME"
export const GO_TO_LOGIN = "product/GO_TO_LOGIN"

export const GET_PRODUCTS = 'product/GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'product/GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR = 'product/GET_PRODUCTS_ERROR';

export const GET_PRODUCT = 'product/GET_PRODUCT';
export const GET_PRODUCT_SUCCESS = 'product/GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_ERROR = 'product/GET_PRODUCT_ERROR';
export const REFRESH_PRODUCT = 'product/REFRESH_PRODUCT'

export const GET_CARTSOLD = 'product/GET_CARTSOLD';
export const GET_CARTSOLD_SUCCESS = 'product/GET_CARTSOLD_SUCCESS';
export const GET_CARTSOLD_ERROR = 'product/GET_CARTSOLD_ERROR';

// Action 생성
export const uploadPreview = () => (
    {type: UPLOAD_PREVIEW}
);

export const uploadAll = () => (
    {type: UPLOAD_ALL}
);

export const uploadRefresh = () => (
    {type: UPLOAD_REFRESH}
)

export const getProduct = () => (
    {type: GET_PRODUCT}
)

export const refreshProduct = () => (
    {type: REFRESH_PRODUCT}
)

export const getProducts = () => (
    {type: GET_PRODUCTS}
)

export const getCartSold = () => (
    {type: GET_CARTSOLD}
)

export const goToHome = () => (
    {type: GO_TO_HOME}
)

export const goToLogin = () => (
    {type: GO_TO_LOGIN}
)


