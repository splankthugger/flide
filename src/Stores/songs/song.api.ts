import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ISong } from './song.types'

export const songApi = createApi({
    reducerPath: 'api/songs',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    endpoints: (builder) => ({
        getSong: builder.query<any, void>({query: () => `songs`}),
        getSongById: builder.query<ISong[], any>({query: (id: any) => `songs?id=${id}`}),
        getSongsById: builder.query<ISong[], any>({query: (ids: any) => `songs?id=${ids.join('&id=')}`}),
        getSongsByArtistId: builder.query<ISong[], any[]>({query: (id: any) => `artists/${id}`}),
        getSongsByAlbumId: builder.query<ISong[], any>({query: (id: any) => `albums/${id}/songs`}),
    })
})

export const {useGetSongQuery, useGetSongByIdQuery, useGetSongsByIdQuery, useGetSongsByArtistIdQuery, useGetSongsByAlbumIdQuery} = songApi