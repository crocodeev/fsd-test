import React, { useState, useEffect,useCallback } from "react"
import { useGetAllPostsQuery} from "src/entities/post/api/api"
import Post from "src/widgets/ui/post/post"
import { VariableSizeList as List } from 'react-window';
import TPostProps from "src/widgets/model/props";
 
// These row heights are arbitrary.
// Yours should be based on the content of the row.

const Item = ({ data, index, style }: TPostProps) => (
  <Post  data={data} index={index} style={style}/>
);

const rowH = () => 200

export const HomePage = () => {

    const { data, error, isLoading, isFetching } = useGetAllPostsQuery({limit: 5, offset: 0})
    const [offset, setOffset] = useState(0)

    const handleScroll = (event) => {

        console.log(event);
        
        /*
          if (event.target.clientHeight + event.target.scrollTop >= event.target.scrollHeight - 100 ) {
            console.log("handle scroll");
            
            setOffset(offset + 1)
          }*/
        }
       
    console.log(data);
    
    if(data){
        return(
            <List
                height={150}
                itemCount={1000}
                itemSize={rowH}
                width={300}
                itemData={data}
                onScroll={handleScroll}
            >
            {Item}
            </List>
        )
    }
}