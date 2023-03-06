import React from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';

const PlaybackProgressBar = () => {
    return (
        <Wrapper>
            <ProgressBar/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export default PlaybackProgressBar;