import { useRouter } from "next/router"
import React from "react"
import styled from "styled-components"

type Props = {
    count: any
}

const Count = ({ count }: Props) => {
    const router = useRouter()
    const isArtist = router.pathname === "/artist/[id]"
    const isPlaylist = router.pathname === "/playlist/[id]"
    const isProfile = router.pathname === `/user/[id]`

    return <Wrapper ArtistCount={isArtist || isProfile}>{count}</Wrapper>
}

const Wrapper = styled.div<{ ArtistCount?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 400;
    cursor: default;

    &:before {
        content: "${({ ArtistCount }) => (!ArtistCount ? "•" : "")}";
        margin: ${({ ArtistCount }) => (!ArtistCount ? "0 12px" : "0px")};
    }
`

export default Count
