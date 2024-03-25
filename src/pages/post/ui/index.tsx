import React from "react"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { paths } from "src/shared/api/paths"
import { TRootState } from "src/app/store" 
import TPost from "src/entities/post/model/post"
import { Card, CardContent, CardActions,Typography, Button, Divider, Box } from "@mui/material"

export const PostPage = () => {

    const { id } = useParams()
    // fix "as"
    const data = useSelector((state: TRootState) => state.postsApi.queries.getAllPosts?.data) as TPost[] 
    
    const post = data.find(item => item.id.toString() === id)

    if (!post) {
        return <h1>No Post Here</h1>
    }
    
    return(
        <Card>
            <CardContent>
                <Typography variant="h5">{post?.title}</Typography>
                <Divider />
                <Box component="p">
                    <Typography variant="body1">{post?.body}</Typography>
                </Box>
                <Box component="p">
                    <Typography variant="body2">{`Post ID: ${post?.id}`}</Typography>
                </Box>
                <Box component="p">
                    <Typography variant="body2">{`User ID: ${post?.userId}`}</Typography>
                </Box>
                <CardActions>
                <Link to={paths.home}>
                    <Button>Назад</Button>
                </Link>
                </CardActions>
            </CardContent>
        </Card>
    )
}