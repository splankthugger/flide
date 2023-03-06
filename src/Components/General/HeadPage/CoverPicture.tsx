import { useRouter } from "next/router"
import React from "react"
import styled from "styled-components"

import { darkTheme } from "../../../../styles/theme"

type Props = {
    coverUrl: any
}

const CoverPicture = ({ coverUrl }: Props) => {
    const router = useRouter()
    const isArtist = router.pathname === "/artist/[id]"
    const isProfile = router.pathname === `/user/[id]`

    return (
        <Wrapper Artist={isArtist || isProfile}>
            <img src={coverUrl} alt="ProfilePicture" />
        </Wrapper>
    )
}

const Wrapper = styled.div<{ Artist?: boolean }>`
    width: 216px;
    height: 216px;
    margin-right: 48px;
    border-radius: ${({ Artist }) => (!Artist ? "32px" : "50%")};
    user-select: none;

    & > img {
        width: 100%;
        height: auto;
        border-radius: ${({ Artist }) => (!Artist ? "32px" : "50%")};
        box-shadow: ${darkTheme.shadow.cardShadow};
    }
`

export default CoverPicture
