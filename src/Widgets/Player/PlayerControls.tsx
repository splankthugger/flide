import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../../styles/theme';
import PlayerShuffleButton from './Buttons/PlayerShuffleButton';
import PlayerBackButton from './Buttons/PlayerBackButton';
import PlayPauseButton from './Buttons/PlayPauseButton';
import PlayerForwardButton from './Buttons/PlayerForwardButton';
import PlayerLoopButton from './Buttons/PlayerLoopButton';
import PlaybackBar from './PlaybackBar';

function PlayerControls() {
    return (
        <Wrapper>
            <Controls>
                <PlayerControlsLeft>
                    <PlayerShuffleButton/>
                    <PlayerBackButton/>
                </PlayerControlsLeft>
                <PlayPauseButton/>
                <PlayerControlsRight>
                    <PlayerForwardButton/>
                    <PlayerLoopButton/>
                </PlayerControlsRight>
            </Controls>
            <PlaybackBar/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 12px;
    width: 40%;
    height: fit-content;
`

const Controls = styled.div`
    display: flex;
    justify-content: center;
    gap: 32px;
`

const PlayerControlsLeft = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 32px;
    align-items: center;
`

const PlayerControlsRight = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 32px;
    align-items: center;
`

export default PlayerControls;