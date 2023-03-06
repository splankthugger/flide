import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import styled from "styled-components"

import { darkTheme } from "../../../styles/theme"
import { useGetArtistPopularSongsQuery } from "../../Stores/artists/artist.api"
import { useGetSongsByIdQuery } from "../../Stores/songs/song.api"
import SongItem from "../../Widgets/Song/SongItem"

import SongCardItem from "./SongCardItem"

const PopularSongs = () => {
    const router = useRouter()
    const {id}: any = router.query
    const {data: artistPopularSongs} = useGetArtistPopularSongsQuery(id)
    
    const {data: songsData} = useGetSongsByIdQuery(artistPopularSongs?.popularSongs)

    return (
        <Wrapper>
            <Title>Популярные треки</Title>
            <PopularSongsSection>
                {songsData?.map((song, i) => {
                    return <SongItem song={song} i={i} key={song.id} />
                })}
            </PopularSongsSection>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
`

const Title = styled.div`
    display: flex;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 24px;
    user-select: none;
    cursor: pointer;
`

const PopularSongsSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export default PopularSongs
