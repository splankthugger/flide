import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPlaylist } from './playlist.types'

export const playlistApi = createApi({
    reducerPath: 'api/playlists',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    endpoints: (builder) => ({
        getPlaylists: builder.query<any, void>({
            query: () => `playlists`
        }),
        getPlaylistById: builder.query<IPlaylist, any>({
            query: (id: any) => `playlists?id=${id}`
        }),
        getPlaylistsById: builder.query<IPlaylist[], number[]>({
            query: (ids) => `playlists?id=${ids.join('&id=')}`
        }),
    }),
        
})

export const {
    useGetPlaylistsQuery,
    useGetPlaylistByIdQuery,
    useGetPlaylistsByIdQuery} = playlistApi