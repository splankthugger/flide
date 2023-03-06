import Link from "next/link"
import React from "react"
import styled from "styled-components"

import { darkTheme } from "../../../../styles/theme"
import { useGetPlaylistsByIdQuery } from "../../../Stores/playlists/playlist.api"

import CreatePlaylistButton from "./CreatePlaylistButton"
import PlaylistsItem from "./PlaylistsItem"

function PlaylistsMenu() {
    const {data: playlistsData} = useGetPlaylistsByIdQuery([1,2])
    return (
        <Wrapper>
            <PlaylistsMenuItem>
                <PlaylistsMenuItemTitle>Твои плейлисты</PlaylistsMenuItemTitle>
                <CreatePlaylist>
                    <CreatePlaylistButton />
                </CreatePlaylist>
            </PlaylistsMenuItem>
            <PlaylistsContent>
                {playlistsData?.map((playlist) => {
                    return <PlaylistsItem playlist={playlist} />
                })}
            </PlaylistsContent>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const PlaylistsMenuItem = styled.div`
    display: flex;
    align-items: center;
    padding: 16px 0px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    user-select: none;

    & .playlists-icon {
        width: 24px;
        height: 24px;
        margin-right: 24px;

        @media (max-width: 768px) {
            margin: 0;
        }
    }
`

const PlaylistsMenuItemTitle = styled.div`
    display: flex;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    color: ${darkTheme.fontColor.gray};
    letter-spacing: 0.07em;

    @media (max-width: 768px) {
        display: none;
    }
`

const DropdownButton = styled.div`
    display: flex;
    justify-content: flex-end;
`

const PlaylistsContent = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
    user-select: none;
`

const CreatePlaylist = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    user-select: none;
`
export default PlaylistsMenu
