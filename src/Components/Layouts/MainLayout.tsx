import { useRouter } from "next/router"
import React, { useState } from "react"
import styled from "styled-components"

import { darkTheme } from "../../../styles/theme"
import Header from "../../Widgets/Header/Header"
import Player from "../../Widgets/Player/Player"
import CreatePlaylistModal from "../../Widgets/Sidebar/Playlists/CreatePlaylistModal"
import Sidebar from "../../Widgets/Sidebar/Sidebar"

type Layout = {
    children: any
}

const MainLayout: React.FC<Layout> = ({ children }) => {
    return (
        <Wrapper>
            <Sidebar />
            <Content>
                <Container>
                    <Header />
                    <CurrentPage>{children}</CurrentPage>
                </Container>
            </Content>
            <PlayerContainer>
                <Player />
            </PlayerContainer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-areas:
        "empty empty"
        "sidebar main-view"
        "player player";
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    min-width: 100%;
    height: 100%;
    min-height: 100%;
`

const Content = styled.div`
    display: flex;
    grid-area: main-view;
    position: relative;
    width: 100%;
`

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`

const CurrentPage = styled.div`
    display: flex;
    flex: 1;
    position: relative;
    width: 100%;
    padding: 32px;
    background-color: ${darkTheme.backgroundColor.black};
`

const PlayerContainer = styled.div`
    grid-area: player;
    position: fixed;
    padding: 0px 32px;
    bottom: 0;
    width: 100%;
    background-color: ${darkTheme.backgroundColor.black};
    z-index: 9999;
`
export default MainLayout
