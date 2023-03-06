import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../../../../styles/theme';

export const MiniCardPlayButton = () => {
    return (
        <Wrapper>
            <img src="/img/play-filled-icon.svg" alt="play"/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    opacity: 0;
    width: 48px;
    height: 48px;
    background-color: ${darkTheme.backgroundColor.white};
    border-radius: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 2;
    transition: all .2s;

    & img {
        width: 24px;
        height: 24px;
    }

    &:hover {
        transform: scale(105%);
    }
`

export default MiniCardPlayButton;