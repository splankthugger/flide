import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import styled from "styled-components"

import { darkTheme } from "../../../../styles/theme"

const PlaylistsItem = ({ playlist }: any) => {
    const route = useRouter()
    
    return (
        <Link href={`/playlist/${playlist.id}`}>
            {/* `/playlist/${id}` */}
            <Wrapper active={route.pathname === `/playlist/${playlist.id}`}>
                {playlist.title}
            </Wrapper>
        </Link>
    )
}

const Wrapper = styled.div<{ active: boolean }>`
    flex-direction: column;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 14px;
    font-weight: 400;
    color: ${({ active }) =>
        active ? darkTheme.fontColor.white : darkTheme.fontColor.gray};
    padding: 16px 0px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        color: ${darkTheme.fontColor.white};
        transition: 0.2s ease-in-out;
    }
`

export default PlaylistsItem
