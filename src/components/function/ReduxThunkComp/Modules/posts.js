import * as postsAPI from "../API/posts";
import {
    createPromiseThunk,
    createPromiseThunkById,
    handleAsyncActions,
    handleAsyncActionsById,
    reducerUtils
} from "../lib/asyncUtils";

const GET_POSTS = 'posts/GET_POSTS';
const GET_POSTS_SUCCESS = 'posts/GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'posts/GET_POSTS_ERROR';

const GET_POST = 'posts/GET_POST';
const GET_POST_SUCCESS = 'posts/GET_POST_SUCCESS';
const GET_POST_ERROR = 'posts/GET_POST_ERROR';

const CLEAR_POST = 'posts/CLEAR_POST';

const initialState = {
    posts : reducerUtils.initial(),
    post : {}
}

const getPostsReducer = handleAsyncActions(GET_POSTS, 'posts', true);
const getPostReducer = handleAsyncActionsById(GET_POST, 'post', true);

export default function posts(state = initialState, action) {
    switch(action.type) {
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_ERROR:
            return getPostsReducer(state, action);
        case GET_POST:
        case GET_POST_SUCCESS:
        case GET_POST_ERROR:
            return getPostReducer(state, action);
        case CLEAR_POST:
            return {
                ...state,
                post: reducerUtils.initial()
            }
        default :
            return state;
    }
}


export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunkById(GET_POST, postsAPI.getPostById);
export const goToHome = () => (dispatch, getState, { history }) => {
    history.push("/");
}

export const clearPost = () => ({type: CLEAR_POST});


/*
//const getPostReducer = handleAsyncActions(GET_POST, 'post');
const getPostReducer = (state, action) => {
    const id = action.meta;

    switch (action.type) {
        case GET_POST:
            return {
                ...state,
                post: {
                    ...state.post,
                    [id] : reducerUtils.loading(state.post[id] && state.post[id].data)
                }
            }
        case GET_POST_SUCCESS:
            return {
                ...state,
                post: {
                    ...state.post,
                    [id] : reducerUtils.success(action.payload)
                }
            }
        case GET_POST_ERROR:
            return {
                ...state,
                post: {
                    ...state.post,
                    [id] : reducerUtils.error(action.payload)
                }
            }

        default :
            return state;
    }
}
*/


//export const getPost = createPromiseThunk(GET_POST, postsAPI.getPostById);
/*
export const getPost = (id) => async dispatch => {
    dispatch({
        type: GET_POST,
        meta: id
    })
    try {
        const payload = await postsAPI.getPostById(id);
        dispatch({
            type: GET_POST_SUCCESS,
            payload,
            meta: id
        })
    } catch (error) {
        dispatch({
            type: GET_POST_ERROR,
            payload: error,
            error: true,
            meta: id
        });
    }
};
 */