import { useRouter } from "next/router"
import React from "react"
import styled from "styled-components"

function ItemCategory({ categoryTitle }: any) {
    const router = useRouter()
    const isArtist = router.pathname === "/artist/[id]"
    const isAlbum = router.pathname === `/album/[id]`
    const isPlaylist = router.pathname === `/playlist/[id]`
    const isLiked = router.asPath === "/liked"
    const isProfile = router.pathname === `/user/[id]`

    return (
        <Wrapper>
            {isArtist && "Исполнитель"}
            {isAlbum && "Альбом"}
            {isPlaylist && "Плейлист"}
            {isLiked && "Плейлист"}
            {isProfile && "Профиль"}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-bottom: 24px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
`

export default ItemCategory
