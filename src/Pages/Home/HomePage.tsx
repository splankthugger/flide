import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import styled from "styled-components"

import { darkTheme } from "../../../styles/theme"
import AlbumCardItem from "../../Components/General/MiniCardItem/AlbumCardItem"
import ArtistCardItem from "../../Components/General/MiniCardItem/ArtistCardItem"
import SubTitle from "../../Shared/ui/SubTitle"
import {
    useGetAlbumsByIdQuery,
    useGetAlbumsLimitQuery,
} from "../../Stores/albums/albums.api"
import {
    useGetArtistByIdQuery,
    useGetArtistsLimitQuery,
} from "../../Stores/artists/artist.api"
import Header from "../../Widgets/Header/Header"

function HomePage() {
    const router = useRouter()
    const { data: albumsData } = useGetAlbumsByIdQuery([1, 2, 3, 4, 5, 6])

    const { data: artistsData } = useGetArtistsLimitQuery(6)
    return (
        <Wrapper>
            <Content>
                <SubTitle subTitle="Топ альбомов за сегодня" />
                <MainContainer>
                    {albumsData?.map((album) => {
                        return (
                            <AlbumCardItem
                                key={album.id}
                                album={album.id}
                                artist={album.artistId}
                            />
                        )
                    })}
                </MainContainer>
                <SubTitle subTitle="Топ артистов за сегодня" />
                <MainContainer>
                    {artistsData?.map((artist: any) => {
                        return (
                            <ArtistCardItem key={artist.id} artist={artist} />
                        )
                    })}
                </MainContainer>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: inherit;
    width: 100%;
    min-height: 0;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
`

const MainContainer = styled.div`
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 4px;
    width: 100%;
    margin-bottom: 48px;

    @media (max-width: 2560px) {
        grid-template-columns: repeat(7, 1fr);
    }

    @media (max-width: 1920px) {
        grid-template-columns: repeat(6, 1fr);
    }

    @media (max-width: 1440px) {
        grid-template-columns: repeat(5, 1fr);
    }

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 425px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export default HomePage
