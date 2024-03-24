import React, { FunctionComponent } from "react"
import TPostProps from "src/widgets/model/props"


const Post = ({ data, index, style }: TPostProps) => {

    const post = data?.[index]
    
    return(
        <li key={post.id} style={style}>
            <label htmlFor="">{index + 1}</label>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </li>
    )
}


export default Post;