import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import TPost from '../model/post';
import TGetAllPosts from '../model/query';

export const postApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/"}),
    endpoints: (build) => ({
        getAllPosts: build.query<TPost[], TGetAllPosts>({
            query: ({limit, start}) => ({
                url: '/posts',
                params: {
                    _limit: limit,
                    _start: start,
                }
            })
        })
    })
})

export const { useGetAllPostsQuery } = postApi;