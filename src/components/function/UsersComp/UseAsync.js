import React, {useReducer, useEffect, useCallback} from "react";

// 기능별 Reducer를 사용하는 것이 아니라,
// 하나의 Reducer (UseAsync.js)로 관련 기능들을 통합 관리하는 방식
function reducer(state, action) {
    switch(action.type) {
        case 'LOADING' :
            return {
                loading: true,
                data: null,
                error: null
            };
        case 'SUCCESS' :
            return {
                loading: false,
                data: action.data,
                error: null
            };
        case 'ERROR' :
            return {
                loading: false,
                data: null,
                error: action.error
            };
        default :
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

function useAsync(callback, deps = [], skip = false) {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null
    });

    const fetchData = useCallback(async () => {
        dispatch({type: 'LOADING'});
        try {
            const data = await callback();
            dispatch({type: "SUCCESS", data});
        } catch (error) {
            dispatch({type: 'ERROR', error: error});
        }
    }, [callback]);

    useEffect(()=> {
        if (skip)
            return;
        fetchData();
    }, deps);

    return [state, fetchData]
}

export default useAsync;