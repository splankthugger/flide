import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import styled from "styled-components"

import { darkTheme } from "../../../../styles/theme"
import { useGetAlbumByIdQuery } from "../../../Stores/albums/albums.api"
import { useGetArtistByIdQuery } from "../../../Stores/artists/artist.api"

import MiniCardCover from "./Components/MiniCardCover"
import MiniCardDescription from "./Components/MiniCardDescription"
import MiniCardGeneralInfo from "./Components/MiniCardGeneralInfo"
import MiniCardPlayButton from "./Components/MiniCardPlayButton"
import MiniCardTitle from "./Components/MiniCardTitle"

function AlbumCardItem({ album, artist }: any) {
    const router = useRouter()
    const isArtist = router.pathname === "/artist/[id]"

    const { data: artistsData } = useGetArtistByIdQuery(artist?.id || artist)
    const { data: albumData } = useGetAlbumByIdQuery(album)

    return (
        <Wrapper>
            {albumData?.map((album) => {
                return <MiniCardGeneralInfo album={album} />
            })}

            {isArtist && (
                <>
                    {albumData?.map((album) => {
                        return (
                            <MiniCardDescription
                                description={album.year}
                                isAlbum={true}
                            />
                        )
                    })}
                </>
            )}

            {!isArtist && (
                <>
                    {artistsData?.map((artist) => {
                        return (
                            <MiniCardDescription
                                description={artist.title}
                                isAlbum={true}
                                artistId={artist.id}
                            />
                        )
                    })}
                </>
            )}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    padding: 8px;
    width: 100%;
    cursor: pointer;
    transform: translateY(0px);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: translateY(-4px);
        transition: all 0.2s ease-in-out;
    }
`

export default AlbumCardItem
