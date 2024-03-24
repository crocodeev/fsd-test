import React, { useState, useEffect } from "react"
import { useGetAllPostsQuery} from "src/entities/post/api/api"
import Post from "src/widgets/ui/post/post"

export const HomePage = () => {

    
    const [start, setStart] = useState(0)
    const { data, error, isLoading } = useGetAllPostsQuery({ limit: 5, start: start})
    const [isScrollDown, setIsScrollDown] = useState(false)
    const [isScrollUp, setIsScrollUp] = useState(false)

    console.log(data)

    const scrollHandler = (event:any):void => {

        if(event.target.documentElement.scrollTop<50){
                setIsScrollUp(true)
        }
        if(event.target.documentElement.scrollHeight-event.target.documentElement.scrollTop-window.innerHeight<50){
                setIsScrollDown(true)
                console.log(setIsScrollDown);
                
                window.scrollTo(0,(event.target.documentElement.scrollHeight + event.target.documentElement.scrollTop));
        }
    }

    useEffect(() => {
        
        if(isScrollDown){
            setStart((previous) => {
                return previous < 93 ? previous + 1 : previous
            })
            setIsScrollDown(false)
        }
    }, [isScrollDown])
    
    useEffect(() => {
        if(isScrollUp){
            setStart((previous) => {
                return previous > 0 ? previous - 1 : previous
            })
            setIsScrollUp(false)
        }
    }, [isScrollUp])

    
    useEffect(() => {

        document.addEventListener('scroll', scrollHandler)

        return () => {
          document.removeEventListener('scroll', scrollHandler)
        }
      },[])

    return(
        <ul>
            {
                data?.map((post, index) => {
                    return <Post key={post.id} post={post} index={index}/>
                }) 
            }
        </ul>
    )
}