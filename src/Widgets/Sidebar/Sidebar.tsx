import Link from "next/link"
import React from "react"
import styled from "styled-components"

import { darkTheme } from "../../../styles/theme"
import Logo from "../../Widgets/Header/Logo"

import NavMenu from "./Navigation/NavMenu"
import PlaylistsMenu from "./Playlists/PlaylistsMenu"

type Props = {
    active: boolean
}

function Sidebar({ active }: Props) {
    return (
        <Wrapper>
            <Content>
                <LogoContainer>
                    <Link href="/home">
                        <Logo />
                    </Link>
                </LogoContainer>
                <NavMenu active={active} />
                <PlaylistsMenu />
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.nav`
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: ${darkTheme.backgroundColor.black};
    /* border-right: 1px solid rgba(255, 255, 255, 0.03); */
    grid-area: sidebar;
    max-width: 320px;
    min-width: 320px;
    min-height: 0;
    z-index: 3;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 40px 40px 0px 40px;

    @media (max-width: 768px) {
        align-items: center;
        width: fit-content;
        min-width: 0;
    }
`

const LogoContainer = styled.div`
    margin-bottom: 32px;
`

export default Sidebar
