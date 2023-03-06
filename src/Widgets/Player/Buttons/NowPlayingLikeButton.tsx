import React from 'react';
import styled from 'styled-components';

const NowPlayingLikeButton = () => {
    return (
        <Wrapper>
            <img src="img/Player/now-playing-liked-fill-icon.svg" alt=""/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 24px;
    height: 24px;
`

export default NowPlayingLikeButton;