import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IArtist } from './artist.types'

export const artistApi = createApi({
    reducerPath: 'api/artists',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    endpoints: (builder) => ({
        getArtists: builder.query<any, void>({
            query: () => `artists`
        }),
        getArtistTitle: builder.query<IArtist[], any>({
            query: (id: any) => `artists?id=${id}`
        }),
        getArtistByTitle: builder.query<IArtist[], string>({
            query: (title?: string) => `artists?title=${title}`
        }),
        getArtistById: builder.query<IArtist[], any>({
            query: (id: any) => `artists?id=${id}`
        }),
        getArtistsById: builder.query<IArtist[], any>({
            query: (ids) => `artists?id=${ids.join('&id=')}`
        }),
        getArtistsLimit: builder.query<IArtist[], number>({
            query: (limit = 6) => `artists?_limit=${limit}`
        }),
        getArtistsByPlays: builder.query<IArtist[], number>({
            query: (monthlyPlays: number) => `artists?_order=${monthlyPlays},[desc]`
        }),
        getArtistSingles: builder.query<IArtist, any>({
            query: (id: any) => `artists/${id}/`
        }),
        getArtistAlbums: builder.query<IArtist, any>({
            query: (id: any) => `artists/${id}/`
        }),
        getArtistByAlbumId: builder.query<IArtist[], any[]>({
            query: (id: any) => `albums/${id}`
        }),
        getArtistPopularSongs: builder.query<IArtist, number>({
            query: (id: number) => `artists/${id}/`
        }),
    }),
        
})

export const {
    useGetArtistsQuery, 
    useGetArtistTitleQuery,
    useGetArtistByTitleQuery, 
    useGetArtistByIdQuery, 
    useGetArtistsByIdQuery, 
    useGetArtistsLimitQuery, 
    useGetArtistsByPlaysQuery,
    useGetArtistSinglesQuery,
    useGetArtistAlbumsQuery,
    useGetArtistPopularSongsQuery} = artistApi