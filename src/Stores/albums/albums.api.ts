import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { IAlbum } from "./album.types"

export const albumApi = createApi({
    reducerPath: "api/albums",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
    endpoints: (builder) => ({
        getAlbums: builder.query<any, void>({ query: () => `albums` }),
        getAlbumsLimit: builder.query<IAlbum[], number>({
            query: (limit) => `albums?_limit=${limit}`,
        }),
        getAlbumsById: builder.query<IAlbum[], any[]>({
            query: (ids) => `albums?id=${ids.join("&id=")}`,
        }),
        getAlbumById: builder.query<IAlbum[], any>({
            query: (id: any) => `albums?id=${id}`,
        }),
        getAlbumByTitle: builder.query<IAlbum[], string>({
            query: (title: string) => `albums/${title}`,
        }),
        getAlbumsByPlays: builder.query<IAlbum[], number>({
            query: (plays: number) => `albums?_order=${plays}`,
        }),
    }),
})

export const {
    useGetAlbumsQuery,
    useGetAlbumsLimitQuery,
    useGetAlbumsByIdQuery,
    useGetAlbumByIdQuery,
    useGetAlbumByTitleQuery,
    useGetAlbumsByPlaysQuery,
} = albumApi
