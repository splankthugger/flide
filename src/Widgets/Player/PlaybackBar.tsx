import React from 'react';
import styled from 'styled-components';
import PlaybackDuration from './PlaybackDuration';
import PlaybackPosition from './PlaybackPosition';
import PlaybackProgressBar from './PlaybackProgressBar';

const PlaybackBar = () => {
    return (
        <Wrapper>
            <PlaybackPosition position={"0:00"}/>
            <PlaybackProgressBar/>
            <PlaybackDuration duration={"2:00"}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    gap: 16px;
`

export default PlaybackBar;