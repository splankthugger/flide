import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { darkTheme } from '../../../../../styles/theme';
import MiniCardPlayButton from './MiniCardPlayButton';
// import OverlayDark from './OverlayDark';

const MiniCardCover = () => {
    return (
        <Wrapper>
            <img src="/img/1.png" alt="cover"/>
            <Link href='/play'>
                <MiniCardPlayButton/>
            </Link>
            <OverlayDark/>
        </Wrapper>
    );
};

const OverlayDark = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 32px;
    z-index: 1;
    transition: all .2s;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    margin-bottom: 16px;
    border-radius: 16px;
    user-select: none;

    &:hover ${OverlayDark} {
        background-color: rgba(0, 0, 0, 0.2);
    }

    & > img {
        max-width: 100%;
        height: auto;
        border-radius: 32px;
    }
`

export default MiniCardCover;