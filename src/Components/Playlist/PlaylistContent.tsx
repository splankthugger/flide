import { useRouter } from "next/router"
import React from "react"
import styled from "styled-components"

import { darkTheme } from "../../../styles/theme"
import BottomSubtitleAlbum from "../../Entitites/Album/BottomSubtitleAlbum"
import HeadActions from "../../Features/ui/HeadActions"

import TracksPlaylist from "./TracksPlaylist"

function PlaylistContent() {
    const router = useRouter()
    const isAlbum = router.asPath === "/album"

    return (
        <Wrapper>
            <TracksPlaylist />
            {isAlbum && <BottomSubtitleAlbum />}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    /* border-radius: 24px;
    padding: 32px;
    background-color: ${darkTheme.backgroundColor.grayDarkest}; */
`

export default PlaylistContent
