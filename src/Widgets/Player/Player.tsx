import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../../styles/theme';
import NowPlayingInfo from './NowPlayingInfo';
import PlaybackBar from './PlaybackBar';
import PlayerControls from './PlayerControls';
import PlayerOptions from './PlayerOptions';

function Player() {
    return (
        <Wrapper>
            <Container>
                <NowPlayingInfo/>
                <PlayerControls/>
                <PlayerOptions/>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
    position: sticky;
    grid-area: player;
    width: 100%;
    /* height: 100px; */
    /* background-color: #141414e8;
    backdrop-filter: blur(75px);
    gap: 64px;
    padding: 0 40px;
    bottom: 0; */
    border-radius: 16px 16px 0px 0px;
    background-color: rgb(12,12,12);
    z-index: 999;
    border-top: 1px solid rgba(255, 255, 255, 0.03);
`
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    background-color: transparent;
    backdrop-filter: blur(75px);
    border-radius: 16px 16px 0px 0px;
    gap: 64px;
    padding: 0 40px;
    bottom: 0;
`
export default Player;