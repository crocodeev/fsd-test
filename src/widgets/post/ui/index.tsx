import React from "react"
import { Card, CardContent, CardActions, Button } from "@mui/material"
import TPostProps from "src/widgets/post/model/props"
import { Link } from "react-router-dom"


const Post = ({ data, index }: TPostProps) => {

    const post = data
    
    return(
        <li key={post.id}>
            <Card>
                <CardContent>
                    <label htmlFor="">{index + 1}</label>
                    <h2>{post.title}</h2>
                    <p className="previev-post__body">{post.body}</p>
                    <Link to={`/details/${post.id}`}>
                    <CardActions>
                        <Button>Просмотр</Button>
                    </CardActions>
                    </Link>
                </CardContent>
            </Card>  
        </li>
    )
}


export default Post;