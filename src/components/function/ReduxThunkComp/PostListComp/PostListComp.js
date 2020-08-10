import React from "react";
import {Link} from "react-router-dom";

function PostListComp({posts}) {
    return (
        <ul>
            {
                posts.map( post => (
                    <li key = {post.id}>
                        <Link to = {`${post.id}`}> {post.title} </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default PostListComp;