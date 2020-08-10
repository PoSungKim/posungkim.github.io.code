import React, {useEffect} from "react";
import PostListComp from "../PostListComp/PostListComp";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../Modules/posts";

function PostListContainer() {
    const {data, loading, error } = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    if (loading && !data)
        return <div>로딩 중...</div>;
    if (error)
        return <div>에러 발생! </div>;
    if (!data)
        return null;
    return (
        <PostListComp posts={data}/>
    )
}

export default PostListContainer;