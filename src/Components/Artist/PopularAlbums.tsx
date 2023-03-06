import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import styled from "styled-components"

import { darkTheme } from "../../../styles/theme"
import { useGetArtistAlbumsQuery } from "../../Stores/artists/artist.api"
import AlbumCardItem from "../General/MiniCardItem/AlbumCardItem"

const PopularAlbums = ({ artist }: any) => {
    const router = useRouter()
    const { id } = router.query
    const { data: ArtistAlbumsData } = useGetArtistAlbumsQuery(id)
    return (
        <Wrapper>
            <Title>Популярные релизы</Title>
            <PopularAlbumsSection>
                {ArtistAlbumsData?.allReleases.map((album) => {
                    return <AlbumCardItem album={album} artist={artist} />
                })}
            </PopularAlbumsSection>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
`

const Title = styled.div`
    display: flex;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 24px;
    user-select: none;
    cursor: pointer;
`

const PopularAlbumsSection = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: 1fr;
    grid-auto-rows: 0;
    grid-gap: 48px;
`
export default PopularAlbums
