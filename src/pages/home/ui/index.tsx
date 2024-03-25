import React, { useState, useEffect,useCallback } from "react"
import { useGetAllPostsQuery} from "src/entities/post/api/api"
import Post from "src/widgets/ui/post"
import { VariableSizeList, ListOnItemsRenderedProps, ListOnScrollProps } from 'react-window'
import TPostProps from "src/widgets/model/props"
import AutoSizer from "react-virtualized-auto-sizer"
import List from 'rc-virtual-list';
 
// These row heights are arbitrary.
// Yours should be based on the content of the row.

const Item = ({ data, index, style }: TPostProps) => (
  <Post  data={data} index={index} style={style}/>
);


const rowH = () => 230

export const HomePage = () => {

    const [offset, setOffset] = useState(0)
    const { data, error, isLoading, isFetching } = useGetAllPostsQuery({limit: 10, offset: offset})

   
    const scrollHandler = (event: ListOnScrollProps, height: number) => {
        console.log(event.scrollOffset);
        console.log(height);
    }

    const itemRenderHandler = (event: ListOnItemsRenderedProps) => {

        console.log(event.visibleStopIndex);
        
      
        if(event.visibleStopIndex === data?.length - 1){
            console.log("fire");
            setOffset(offset + 10);
        }
    }
       
    return(
        // remove
        <ul style={{ width: "100%", height: "800px", display: "flex", position: "absolute"}}>
        <AutoSizer>
        {({ height, width }: { [k: string]: number}) => (
          <List
          height={height}
          data={[1,2,3,4]}
          itemKey="id"
          itemHeight={300}
          >
            {index => <h1>{index}</h1>}
          </List>
        )}
      </AutoSizer>
      </ul>
    )
}