import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../../styles/theme';
import ActionIcon from '../../Components/ButtonIcon/ActionIcon';
import HeartIcon from '../../Components/ButtonIcon/HeartIcon';
import SongData from '../../Entitites/Song/SongData';
import { useGetAlbumsByIdQuery } from '../../Stores/albums/albums.api';
import { useGetArtistByIdQuery, useGetArtistsByIdQuery } from '../../Stores/artists/artist.api';

const SongItem = ({song, length, i}: any) => {
    const {data: artistData} = useGetArtistByIdQuery(song.artistId)

    return (
        <Wrapper active>
            {artistData?.map((artist) => {
                return(
                    <SongData song={song} artist={artist} i={i} length={length}/>
                )
            })}
            
        </Wrapper>
    );
};

const LikeButton = styled.div`
    display: flex;
    opacity: 0;
    align-items: center;
    justify-content: center;
    transition: 0.1s ease-in-out;
    margin-right: 32px;
`

const ActionsButton = styled.div`
    display: flex;
    opacity: 0;
    align-items: center;
    justify-content: center;
    transition: 0.1s ease-in-out;
`

const Wrapper = styled.div<{ active?: boolean }>`
    display: flex;
    align-items: center;
    height: 64px;
    border-radius: 16px;
    padding: 16px 16px;
    width: 100%;
    transition: 0.1s ease-in-out;
    cursor: pointer;
    margin-bottom: 4px;

    &:hover {
        background-color: ${({ active }) =>
            active ? darkTheme.backgroundColor.hover : "none"};
        transition: 0.1s ease-in-out;
    }

    &:hover ${ActionsButton} {
        opacity: 1;
        transition: 0.1s ease-in-out;
    }

    &:hover ${LikeButton} {
        opacity: 1;
        transition: 0.1s ease-in-out;
    }

    &:active {
        background-color: ${darkTheme.backgroundColor.gray};
    }
`
export default SongItem;