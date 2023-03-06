import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from './user.types'

export const userApi = createApi({
    reducerPath: 'api/users',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    endpoints: (builder) => ({
        getUsers: builder.query<any, void>({query: () => `users`}),
        getUserById: builder.query<IUser[], number>({query: (id: number) => `users?=${id}/`}),
        getUserArtistsSearchHistory: builder.query<IUser, number>({query: (id: number) => `users/${id}/`}),
        getUserAlbumsSearchHistory: builder.query<IUser, number>({query: (id: number) => `users/${id}/`}),
        getUserLikedSongs: builder.query<IUser, number>({query: (id: number) => `users/${id}/`}),
        getUserSubscriptions: builder.query<IUser, number>({
            query: (id: number) => `users/${id}/`
        }),
        getUserPopularMonthlySongs: builder.query<IUser, number>({
            query: (id: number) => `users/${id}/`
        }),
    }),
        
})

export const {
    useGetUsersQuery, 
    useGetUserByIdQuery, 
    useGetUserArtistsSearchHistoryQuery, 
    useGetUserAlbumsSearchHistoryQuery, 
    useGetUserLikedSongsQuery,
    useGetUserSubscriptionsQuery,
    useGetUserPopularMonthlySongsQuery} = userApi