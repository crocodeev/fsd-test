import { Button } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { paths } from "src/shared/api/paths"
import { TRootState } from "src/app/store" 
import TPost from "src/entities/post/model/post"
import { Card, CardContent, CardActions,Typography } from "@mui/material"

export const PostPage = () => {

    const { id } = useParams()
    // fix "as"
    const data = useSelector((state: TRootState) => state.postsApi.queries.getAllPosts?.data) as TPost[] 
    
    const post = data.find(item => item.id.toString() === id)
    
    return(
        <Card>
            <CardContent>
                <Typography variant="h5">{post?.title}</Typography>
                <Typography variant="body1">{post?.body}</Typography>
                <CardActions>
                <Link to={paths.home}>
                    <Button>Назад</Button>
                </Link>
                </CardActions>
            </CardContent>
        </Card>
    )
}