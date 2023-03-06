import { useRouter } from "next/router"
import React, { useState } from "react"
import styled from "styled-components"

import { darkTheme } from "../../../../styles/theme"
import HeadActions from "../../../Features/ui/HeadActions"
import { useGetAlbumByIdQuery } from "../../../Stores/albums/albums.api"
import { useGetArtistByIdQuery } from "../../../Stores/artists/artist.api"
import { useGetSongsByAlbumIdQuery } from "../../../Stores/songs/song.api"
import { useGetUserByIdQuery } from "../../../Stores/users/user.api"
import PlaylistsItem from "../../../Widgets/Sidebar/Playlists/PlaylistsItem"
import ItemCategory from "../ItemCategory"

import Count from "./Count"
import CoverPicture from "./CoverPicture"
import InformationAlbum from "./InformationAlbum"
import InformationArtist from "./InformationArtist"
import InformationLiked from "./InformationLiked"
import InformationPlaylist from "./InformationPlaylist"
import InformationProfile from "./InformtaionProfile"
import Title from "./Title"
import UserName from "./UserName"

type Props = {
    album?: any
    artist?: any
    profile?: any
    playlist?: any
    likedPage?: any
}

const HeadPage = ( {album, artist, profile, playlist, likedPage}: Props) => {
    const router = useRouter()
    const isArtist = router.pathname === "/artist/[id]"
    const isAlbum = router.pathname === `/album/[id]`
    const isPlaylist = router.pathname === `/playlist/[id]`
    const isProfile = router.pathname === `/user/[id]`
    const isLikedPage = router.asPath === "/liked"

    const {id} = router.query
    const {data: albumData} = useGetAlbumByIdQuery(id)
    const {data: artistData} = useGetArtistByIdQuery(id)
    const {data: userData} = useGetUserByIdQuery(1)
    return (
        <Wrapper>
            <Head>
                {isArtist && (
                    <CoverPicture coverUrl={artist.coverUrl} />
                )}
                {isAlbum && (
                    <CoverPicture coverUrl={album.coverUrl} />
                )}
                {isLikedPage && (
                    <CoverPicture coverUrl="/img/likedpage.jpg" />
                )}
                {isPlaylist && (
                    <CoverPicture coverUrl={playlist.coverUrl} />
                )}
                {isProfile && (
                    <CoverPicture coverUrl={profile.coverUrl} />
                )}
                <HeadMain>
                    <ItemCategory />
                    {isArtist && (
                        <Title title={artist.title} />
                    )}
                    {isAlbum && (
                        <Title title={album.title} />
                    )}
                    {isLikedPage && (
                        <Title title="Лайкнутые треки" />
                    )}
                    {isPlaylist && (
                        <Title title={playlist.title} />
                    )}
                    {isProfile && (
                        <Title title={profile.title} />
                    )}
                    {isAlbum && (
                        <>
                            {albumData?.map((album) => {
                                return(
                                    <InformationAlbum album={album}/>
                                )
                            })}
                        </>
                    )}
                    {isArtist && (
                        <>
                            {artistData?.map((artist) => {
                                return(
                                    <InformationArtist artist={artist}/>
                                )
                            })}
                        </>
                    )}
                    {isPlaylist && (
                        <InformationPlaylist playlist={playlist}/>
                    )}
                    {isProfile && (
                        <>
                            {userData?.map((user) => {
                                return(
                                    <InformationProfile user={user}/>
                                )
                            })}
                        </>    
                    )}
                    {isLikedPage && (
                        <InformationLiked liked={likedPage}/>
                    )}
                </HeadMain>
            </Head>
            <HeadActions />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    /* border-radius: 24px; */
    /* padding: 32px; */
    color: ${darkTheme.fontColor.white};
    /* background-color: ${darkTheme.backgroundColor.grayDarkest}; */
`

const Head = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 32px;
`

const HeadMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const UserPicture = styled.div`
    display: flex;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 12px;

    & img {
        border-radius: 50%;
    }
`
export default HeadPage
