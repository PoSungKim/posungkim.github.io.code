import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import PostComp from "../PostComp/Postcomp";
import {getPost, goToHome, printState} from "../Modules/posts";
import {reducerUtils} from "../lib/asyncUtils";

function PostContainer({postId}) {

    const {data, loading, error} = useSelector(
        state => state.posts.post[postId] || reducerUtils.initial());
    const dispatch = useDispatch();

    useEffect(() => {
        if (data)
            return;
        dispatch(getPost(postId));
    }, [postId, dispatch]);

    if (loading && !data)
        return <div>로딩 중...</div>;
    if (error)
        return <div>에러 발생! </div>;
    if (!data)
        return null;

    return (
        <>
            <button onClick={() => dispatch(goToHome())}>홈으로 이동</button>
            <button onClick={() => dispatch(printState())}>상태 출력</button>
            <PostComp post={data}/>
        </>
    )
}

export default PostContainer;