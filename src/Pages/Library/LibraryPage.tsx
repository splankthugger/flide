import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import styled from "styled-components"

import { darkTheme } from "../../../styles/theme"
import AlbumCardItem from "../../Components/General/MiniCardItem/AlbumCardItem"
import ArtistCardItem from "../../Components/General/MiniCardItem/ArtistCardItem"
import InputSearch from "../../Shared/ui/InputSearch"
import SubTitle from "../../Shared/ui/SubTitle"
import { useGetAlbumByTitleQuery } from "../../Stores/albums/albums.api"
import { useGetArtistByTitleQuery } from "../../Stores/artists/artist.api"
import { IArtist } from "../../Stores/artists/artist.types"
import LibraryAlbumsPage from "./LibraryAlbumsPage"
import LibraryArtistsPage from "./LibraryArtistsPage"

function LibraryPage() {
    const router = useRouter()
    
    const [searchTitle, setSearchTitle] = useState("");
    const [filter, setFilter] = useState()
    const {data: ArtistsData} = useGetArtistByTitleQuery(searchTitle)
    const {data: AlbumsData} = useGetAlbumByTitleQuery(searchTitle)

    return (
        <Wrapper>
            <Content>
                <HeadTitle>
                    <span>Твоя медиатека</span>
                </HeadTitle>
                <InputSearch placeholderTitle={"Поиск..."} searchTitle={searchTitle} setSearchTitle={setSearchTitle}/>
                <MainContainer>
                    <SubTitle subTitle={"Альбомы"}/>
                    {searchTitle.length === 0 && (
                        <>
                            
                            <LibraryAlbumsPage/>
                        </>
                    )}
                    

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

const HeadTitle = styled.div`
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
    color: ${darkTheme.fontColor.white};
    margin-bottom: 24px;
`

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const SearchInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin-bottom: 24px;

    & input {
        display: flex;
        align-content: center;
        width: 800px;
        padding: 24px;
        color: ${darkTheme.fontColor.white};
        background-color: ${darkTheme.backgroundColor.gray};
        font-size: 24px;
        font-weight: 500;
        outline: none;
        border-radius: 16px;
        border: 1px solid;
        border-color: ${darkTheme.border.grayTranslucent};
        font-family: "Graphik LCG";
        transition: all 0.2s ease-in-out;

        &:focus {
            border-color: ${darkTheme.border.mainColorTranslucent};
            transition: all 0.2s ease-in-out;
        }

        &::placeholder {
            display: flex;
            font-size: 16px;
        }
    }
`
export default LibraryPage
