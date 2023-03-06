import { useRouter } from "next/router"
import React, { useState } from "react"
import styled from "styled-components"

import ActionIcon from "../../Components/ButtonIcon/ActionIcon"
import PlayButton from "../../Components/ButtonIcon/PlayButton"
import ShuffleButton from "../../Components/ButtonIcon/ShuffleButton"
import InputTrackSearch from "../../Components/Playlist/InputTracklistFilter"
import ArtistLikedSongsButton from "../../Shared/ui/ArtistLikedSongsButton"
import SubscribeButton from "../../Shared/ui/SubscribeButton"
import { useGetArtistsByIdQuery } from "../../Stores/artists/artist.api"
import { useGetSongsByIdQuery } from "../../Stores/songs/song.api"
import {
    useGetUserLikedSongsQuery,
    useGetUserSubscriptionsQuery,
} from "../../Stores/users/user.api"

import HeadActionsDropdownMenu from "./HeadActionsDropdownMenu"

function HeadActions() {
    const router = useRouter()
    const isArtist = router.pathname === "/artist/[id]"
    const isAlbum = router.pathname === `/album/[id]`
    const isPlaylist = router.pathname === "/playlist/[id]"
    const isLiked = router.asPath === "/liked"
    const isProfile = router.pathname === `/user/[id]`

    const { data: userSubsData } = useGetUserSubscriptionsQuery(1)

    const { data: userLikedSongsData } = useGetUserLikedSongsQuery(1)
    const { data: songsData } = useGetSongsByIdQuery(
        userLikedSongsData?.likedSongs
    )

    const { data: artistsData } = useGetArtistsByIdQuery([
        userSubsData?.subscriptionArtistsId,
    ])

    const { id } = router.query

    const [showDropdown, setShowDropdown] = useState(false)
    return (
        <>
            {isArtist && (
                <>
                    <Wrapper onClick={(e) => e.stopPropagation()}>
                        <PlayButton />
                        <ShuffleButton />
                        <button onClick={() => setShowDropdown(!showDropdown)}>
                            <ActionIcon />
                        </button>
                        {showDropdown && (
                            <HeadActionsDropdownMenu
                                isShow={showDropdown}
                                setShow={setShowDropdown}
                            />
                        )}
                        {userSubsData?.subscriptionArtistsId == id && (
                            <SubscribeButton title="Отписаться" />
                        )}
                        <SubscribeButton title="Подписаться" />
                        <Last>
                            <ArtistLikedSongsButton count="8" />
                        </Last>
                    </Wrapper>
                </>
            )}

            {isAlbum && (
                <Wrapper onClick={(e) => e.stopPropagation()}>
                    <PlayButton />
                    <ShuffleButton />
                    <button onClick={() => setShowDropdown(!showDropdown)}>
                        <ActionIcon />
                    </button>
                    {showDropdown && (
                        <HeadActionsDropdownMenu
                            isShow={showDropdown}
                            setShow={setShowDropdown}
                        />
                    )}
                    <></>
                </Wrapper>
            )}

            {isPlaylist && (
                <Wrapper onClick={(e) => e.stopPropagation()}>
                    <PlayButton />
                    <ShuffleButton />
                    <button onClick={() => setShowDropdown(!showDropdown)}>
                        <ActionIcon />
                    </button>
                    {showDropdown && (
                        <HeadActionsDropdownMenu
                            isShow={showDropdown}
                            setShow={setShowDropdown}
                        />
                    )}
                    <InputTrackSearch />
                    <></>
                </Wrapper>
            )}

            {isLiked && (
                <Wrapper>
                    <PlayButton />
                    <ShuffleButton />
                    <InputTrackSearch />
                    <></>
                </Wrapper>
            )}

            {isProfile && (
                <Wrapper onClick={(e) => e.stopPropagation()}>
                    <button onClick={() => setShowDropdown(!showDropdown)}>
                        <ActionIcon />
                    </button>
                    {showDropdown && (
                        <HeadActionsDropdownMenu
                            isShow={showDropdown}
                            setShow={setShowDropdown}
                        />
                    )}
                    {/* <SubscribeButton title="Подписаться" /> */}
                    <></>
                </Wrapper>
            )}
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start !important;
    align-items: center;
    height: 38px;
    gap: 24px;
    padding: 0px 16px 0px 16px;
    margin-bottom: 32px;
`

const Last = styled.div`
    margin-left: auto;
`
export default HeadActions
