import React from "react";
import PostContainer from "../PostContainer/PostContainer";

function PostPage({match}) {
    const {id} = match.params;
    const postId = parseInt(id, 10);
    console.log(postId);

    return <PostContainer postId={postId}/>;
}

export default PostPage;