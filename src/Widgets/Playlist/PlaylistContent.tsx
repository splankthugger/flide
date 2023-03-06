import React from 'react';
import styled from 'styled-components';
import PlaylistContentHeader from '../../Shared/Playlist/PlaylistContentHeader';
import PlaylistSongs from './PlaylistSongs';

const PlaylistContent = ({user}: any) => {
    return (
        <Wrapper>
            <PlaylistContentHeader/>
            <PlaylistSongs/>
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
export default PlaylistContent;