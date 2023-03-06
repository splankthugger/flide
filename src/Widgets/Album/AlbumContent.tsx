import React from 'react';
import styled from 'styled-components';
import AlbumContentHeader from '../../Shared/Album/AlbumContentHeader';
import AlbumSongs from './AlbumSongs';

const AlbumContent = () => {
    return (
        <Wrapper>
            <AlbumContentHeader/>
            <AlbumSongs/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-bottom: 32px;
`
export default AlbumContent;