import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import NowPlayingLikeButton from './Buttons/NowPlayingLikeButton';

function NowPlayingInfo() {
    return (
        <Wrapper>
            <CoverArtImage>
                <img src="https://fakeimg.pl/300/"/>
            </CoverArtImage>
            <ItemData>
                <ItemTitle>
                    <Link href="">Track title</Link>
                </ItemTitle>
                <ItemArtist>
                    <Link href="">Artist Name</Link>
                </ItemArtist>
            </ItemData>
            <NowPlayingControls>
                <NowPlayingLikeButton/>
            </NowPlayingControls>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    width: 30%;
    height: fit-content;
    min-width: 180px;
`

const CoverArtImage = styled.div`
    max-width: 50px;
    max-height: 50px;

    & img {
        border-radius: 8px;
        max-width: 100%;
        max-height: auto;
    }
`

const ItemData = styled.div`
    display: grid;
    grid-template:
    "title"
    "artist";
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin: 0 24px;
`

const ItemTitle = styled.div`
    grid-area: title;
    position: relative;
    color: #FFF;
    font-size: 14px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    -webkit-mask-image: linear-gradient(90deg,transparent 0,#000 0px,#000 calc(100% - 12px),transparent);
`
const ItemArtist = styled.div`
    grid-area: artist;
    color: #A6A6A6;
    font-size: 10px;
    overflow: hidden;
    white-space: nowrap;
    -webkit-mask-image: linear-gradient(90deg,transparent 0,#000 0px,#000 calc(100% - 12px),transparent);
`

const NowPlayingControls = styled.div`
    display: flex;
    align-items: center;
`
export default NowPlayingInfo;