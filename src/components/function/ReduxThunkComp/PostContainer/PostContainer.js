import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import PostComp from "../PostComp/Postcomp";
import {getPost} from "../Modules/posts";
import {reducerUtils} from "../lib/asyncUtils";

function PostContainer({postId}) {

    const {data, loading, error} = useSelector(
        state => state.posts.post[postId] || reducerUtils.initial());
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost(postId));
    }, [postId, dispatch]);

    if (loading && !data)
        return <div>로딩 중...</div>;
    if (error)
        return <div>에러 발생! </div>;
    if (!data)
        return null;

    return (
        <PostComp post={data}/>
    )
}

export default PostContainer;