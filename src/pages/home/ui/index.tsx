import React, { useState, useEffect,useCallback } from "react"
import { useGetAllPostsQuery} from "src/entities/post/api/api"
import Post from "src/widgets/post/ui"
import TPostProps from "src/widgets/post/model/props"
import AutoSizer from "react-virtualized-auto-sizer"
import { Virtuoso } from "react-virtuoso"
import { List } from "@mui/material"
// These row heights are arbitrary.
// Yours should be based on the content of the row.

const Item = ({ data, index, style }: TPostProps) => (
  <Post  data={data} index={index} style={style}/>
);


const rowH = () => 230

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