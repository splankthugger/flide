import { useRouter } from "next/router"
import React from "react"
import styled from "styled-components"

import { useGetArtistByIdQuery } from "../../Stores/artists/artist.api"
import HeadPage from "../General/HeadPage/HeadPage"

import HeadArtistPage from "./HeadArtistPage"
import MainArtistPage from "./MainArtistPage"

const ArtistPage = () => {
    const router = useRouter()
    const { id } = router.query
    const { data: artistsData } = useGetArtistByIdQuery(id)

    return (
        <Wrapper>
            <Content>
                {artistsData?.map((artist: any) => {
                    return (
                        <>
                            <HeadPage artist={artist} />
                            <MainArtistPage artist={artist} />
                        </>
                    )
                })}
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: inherit;
    width: 100%;
    min-height: 100vh;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px;
    border-radius: 24px;
    background-color: rgb(12, 12, 12);
    margin-bottom: 64px;
`

export default ArtistPage
