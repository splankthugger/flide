import React from "react"
import styled from "styled-components"

import { darkTheme } from "../../../styles/theme"

import Albums from "./Albums"
import PopularAlbums from "./PopularAlbums"
import PopularSongs from "./PopularSongs"
import SinglesEP from "./SinglesEP"

const MainArtistPage = ({ artist }: any) => {
    return (
        <Wrapper>
            <PopularSection>
                <PopularSongs />
                <PopularAlbums artist={artist} />
            </PopularSection>
            <Music>
                <AlbumSection>
                    <Title>Альбомы</Title>
                    <Albums artist={artist} />
                </AlbumSection>
                <SinglesEPSection>
                    <Title>Синглы и EP</Title>
                    <SinglesEP artist={artist} />
                </SinglesEPSection>
            </Music>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: inherit;
    width: 100%;
    border-radius: 24px;
    /* padding: 32px; */
    color: ${darkTheme.fontColor.white};
    /* background-color: rgb(12,12,12); */
`

const PopularSection = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 32px;
`

const Music = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 32px;
`

const AlbumSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const SinglesEPSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.4px;
    margin-bottom: 16px;
    color: ${darkTheme.fontColor.white};
`
export default MainArtistPage
