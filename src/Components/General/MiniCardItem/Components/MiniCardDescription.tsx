import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import styled from "styled-components"

import { darkTheme } from "../../../../../styles/theme"

type props = {
    description: any
    isAlbum: boolean
    artistId?: any
}

const MiniCardDescription = ({ description, isAlbum, artistId }: props) => {
    const router = useRouter()
    const isArtist = router.pathname === "/artist/[id]"

    return (
        <>
            {isArtist && <Wrapper isAlbum={isAlbum}>{description}</Wrapper>}

            {!isArtist && (
                <Link href={`/artist/${artistId}`}>
                    <Wrapper isAlbum={isAlbum}>{description}</Wrapper>
                </Link>
            )}
        </>
    )
}

const Wrapper = styled.div<{ isAlbum: boolean }>`
    display: -webkit-box;
    font-size: 14px;
    font-weight: 400;
    color: ${darkTheme.fontColor.gray};
    width: fit-content;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    &:hover {
        text-decoration: ${({ isAlbum }) => (isAlbum ? "underline" : "none")};
    }
`

export default MiniCardDescription
