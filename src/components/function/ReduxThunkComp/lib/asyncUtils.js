// Modules/posts.js 파일 속 함수들의 코드 길이를 간략화하기 위해서 작업해주는 공간

export const createPromiseThunk = (type, promiseCreater) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    const thunkCreator = param => async dispatch => {
        dispatch({type});
        try {
            const payload = await promiseCreater(param);
            dispatch({
                type: SUCCESS,
                payload,
            });
        }catch (error) {
            dispatch({
                type: ERROR,
                payload: error,
                error: true
            });
        }
    }
    return thunkCreator;
}

export const handleAsyncActions = (type, key) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    const reducer = (state, action) => {
        switch(action.type) {
            case type:
                return {
                    ...state,
                    [key]: reducerUtils.loading()
                }
            case SUCCESS :
                return {
                    ...state,
                    [key] : reducerUtils.success(action.payload)
                };
            case ERROR :
                return {
                    ...state,
                    [key] : reducerUtils.error(action.payload)
                };
            default:
                return state;
        }
    }
    return reducer;
}

export const reducerUtils = {
    initial: (data = null) => ({
        data,
        loading: false,
        error: null
    }),
    loading: (prevState = null) => ({
        data: prevState,
        loading: true,
        error: null
    }),
    success: (data) => ({
        data,
        loading: false,
        error: null
    }),
    error: error => ({
        data: null,
        loading: false,
        error
    })
};

