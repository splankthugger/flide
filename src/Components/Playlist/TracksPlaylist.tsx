import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../../styles/theme';
import SongItem from '../../Widgets/Song/SongItem';
import TimeDurationIcon from '../ButtonIcon/TimeDurationIcon';
import PlaylistContentHeader from '../../Shared/Playlist/PlaylistContentHeader';

const TracksPlaylist = () => {
    return (
        <Wrapper>
            <PlaylistContentHeader/>
            <SongItem/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export default TracksPlaylist;