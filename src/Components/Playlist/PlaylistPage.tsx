import React from "react"
import styled from "styled-components"
import { useGetPlaylistByIdQuery, useGetPlaylistsByIdQuery } from "../../Stores/playlists/playlist.api"
import { useGetUserByIdQuery } from "../../Stores/users/user.api"
import PlaylistContent from "../../Widgets/Playlist/PlaylistContent"
import HeadPage from "../General/HeadPage/HeadPage"

const PlaylistPage = () => {
    const {data: userData} = useGetUserByIdQuery(1)
    const {data: playlistData} = useGetPlaylistsByIdQuery([1])
    return (
        <Wrapper>
            <Content>
                {playlistData?.map((playlist) => {
                    return(
                        <>
                            <HeadPage playlist={playlist} />
                            <PlaylistContent />
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
    min-height: 100%;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px;
    border-radius: 24px;
    background-color: rgb(12, 12, 12);
`

export default PlaylistPage
