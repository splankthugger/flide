import React from "react"
import styled from "styled-components"

import ArtistCardItem from "../../Components/General/MiniCardItem/ArtistCardItem"
import {
    useGetArtistsLimitQuery,
    useGetArtistsQuery,
} from "../../Stores/artists/artist.api"

const LibraryArtistsPage = () => {
    const { data: artistsData, isLoading, error } = useGetArtistsLimitQuery(6)

    return (
        <Wrapper>
            {isLoading ? (
                "Loading"
            ) : error ? (
                "error"
            ) : (
                <>
                    {artistsData?.map((artist: any) => {
                        return (
                            <ArtistCardItem key={artist.id} artist={artist} />
                        )
                    })}
                </>
            )}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 32px;
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
export default LibraryArtistsPage
