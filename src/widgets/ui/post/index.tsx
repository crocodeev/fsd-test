import React from "react"
import { Card, CardContent, CardActions, Button } from "@mui/material"
import TPostProps from "src/widgets/model/props"
import { Link } from "react-router-dom"


const Post = ({ data, index, style }: TPostProps) => {

    const post = data?.[index]
    
    return(
        <li key={post.id} style={style}>
            <Card>
                <CardContent>
                    <label htmlFor="">{index + 1}</label>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
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