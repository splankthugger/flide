import Link from "next/link"
import React, { useState } from "react"
import styled from "styled-components"

import { darkTheme } from "../../../styles/theme"
import AlbumCardItem from "../../Components/General/MiniCardItem/AlbumCardItem"
import ArtistCardItem from "../../Components/General/MiniCardItem/ArtistCardItem"
import HeadTitle from "../../Shared/ui/HeadTitle"
import InputSearch from "../../Shared/ui/InputSearch"
import SubTitle from "../../Shared/ui/SubTitle"
import { useGetAlbumsByIdQuery } from "../../Stores/albums/albums.api"
import {
    useGetArtistByIdQuery,
    useGetArtistsByIdQuery,
} from "../../Stores/artists/artist.api"
import {
    useGetUserAlbumsSearchHistoryQuery,
    useGetUserArtistsSearchHistoryQuery,
} from "../../Stores/users/user.api"

//FIX: ?сделать общий массив?. Map должен выводить либо albumCard(32px), либо artistCard(50%) в зависимости от порядка данных

function SearchPage() {
    const [searchTitle, setSearchTitle] = useState()

    const { data: userSearchHistoryArtistsData } =
        useGetUserArtistsSearchHistoryQuery(1)
    // console.log(userSearchHistoryArtistsData?.searchArtists)
    const [ArtistsIds, setArtistsIds] = useState<number[]>([1, 2, 3])
    const { data: artistsHistoryData } = useGetArtistsByIdQuery(ArtistsIds)

    const { data: userSearchHistoryAlbumsData } =
        useGetUserAlbumsSearchHistoryQuery(1)
    const [AlbumsIds, setAlbumsIds] = useState<number[]>([1, 2, 3])
    const { data: albumsHistoryData } = useGetAlbumsByIdQuery(AlbumsIds)

    return (
        <Wrapper>
            <Content>
                <HeadTitle title="Найди свои любимые песни" />
                <InputSearch
                    placeholderTitle={
                        "Название, текст, имя исполнителя. Вводи что угодно"
                    }
                    searchTitle={""}
                    setSearchTitle={setSearchTitle}
                />
                <SubTitle subTitle="История поиска" />
                <MainContainer>
                    {artistsHistoryData?.map((artist: any) => {
                        return <ArtistCardItem artist={artist} />
                    })}

                    {albumsHistoryData?.map((album) => {
                        return (
                            <AlbumCardItem
                                album={album.id}
                                artist={album.artistId}
                            />
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
export default SearchPage
