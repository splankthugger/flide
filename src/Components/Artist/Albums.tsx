import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import styled from "styled-components"

import { useGetArtistAlbumsQuery } from "../../Stores/artists/artist.api"
import AlbumCardItem from "../General/MiniCardItem/AlbumCardItem"

const Albums = ({ artist }: any) => {
    const router = useRouter()
    const { id } = router.query
    const { data: ArtistAlbumsData } = useGetArtistAlbumsQuery(id)
    return (
        <Wrapper>
            {ArtistAlbumsData?.albums.map((album) => {
                return <AlbumCardItem album={album} artist={artist} />
            })}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    grid-template-rows: 1fr;
    grid-auto-rows: 0;
    grid-gap: 4px;
    width: 100%;
`

export default Albums
