import React, { FunctionComponent } from "react"
import TPost from "src/entities/post/model/post";

type TPostProps = {
    post: TPost,
    index: number
}

const Post = ({ post, index }: TPostProps) => {
    
    return(
        <li key={post.id}>
            <label htmlFor="">{index + 1}</label>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </li>
    )
}


export default Post;