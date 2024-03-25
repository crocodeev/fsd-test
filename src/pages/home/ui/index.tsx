import React, { useState, useEffect,useCallback } from "react"
import { useGetAllPostsQuery} from "src/entities/post/api/api"
import Post from "src/widgets/post/ui"
import { Virtuoso } from "react-virtuoso"
import { List } from "@mui/material"

export const HomePage = () => {

    const [offset, setOffset] = useState(0)
    const { data, error } = useGetAllPostsQuery({limit: 10, offset: offset})

    if (error) {
       console.error(error)
       return alert("Error, please ")
    }

    

    const endReachedHandler = () => {

        setOffset(offset + 10);
    }
       
    return(
      <List style={{ display: 'contents'}}>
        <Virtuoso
          style={{ height: '100%', marginLeft: '20%', marginRight: '20%'}}
          data={data}
          endReached={endReachedHandler}
          itemContent={(index, data) => (
            <Post data={data} index={index}/>
          )}
        />
      </List>
    )
}