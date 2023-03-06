import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { useGetSongsByAlbumIdQuery } from '../../Stores/songs/song.api';
import SongItem from '../Song/SongItem';

const AlbumSongs = () => {
    const router = useRouter()
    const {id} = router.query
    const {data: songsData} = useGetSongsByAlbumIdQuery(id)

    return (
        <Wrapper>
            {songsData?.map((song) =>{
                    return(
                    <>
                        <SongItem song={song}/>
                    </>
                    )
                    
                })}
            
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export default AlbumSongs;