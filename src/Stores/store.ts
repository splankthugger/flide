import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { artistApi } from "./artists/artist.api";
import { albumApi } from "./albums/albums.api";
import { songApi } from "./songs/song.api";
import { userApi } from "./users/user.api";
import { playlistApi } from "./playlists/playlist.api";

export const store = configureStore ({
    reducer: {
        [artistApi.reducerPath]: artistApi.reducer,
        [albumApi.reducerPath]: albumApi.reducer,
        [songApi.reducerPath]: songApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [playlistApi.reducerPath]: playlistApi.reducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(artistApi.middleware, albumApi.middleware, songApi.middleware, userApi.middleware, playlistApi.middleware)
})