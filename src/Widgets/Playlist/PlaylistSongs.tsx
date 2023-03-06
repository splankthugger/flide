import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { useGetAlbumsByIdQuery } from '../../Stores/albums/albums.api';
import { useGetSongsByIdQuery } from '../../Stores/songs/song.api';
import { useGetUserByIdQuery } from '../../Stores/users/user.api';
import SongItem from '../Song/SongItem';

const PlaylistSongs = () => {
    const router = useRouter()
    const isLiked = router.asPath === "/liked"
    const isPlaylist = router.pathname === "/playlist/[id]"
    // const {data: userData} = useGetUserByIdQuery(1)
    const {data: songsData} = useGetSongsByIdQuery([1,2,3,4,5,6])
    
    return (
        <Wrapper>
            {isLiked &&
                <>
                    {songsData?.map((song, i) => {
                        return(
                            <>
                                <SongItem song={song} i={i} length={songsData?.length} key={song.id}/>
                            </>
                        )
                    })}
                </>
            }

            {isPlaylist &&
                <>
                    {songsData?.map((song, i) => {
                        return(
                            <>
                                <SongItem song={song} i={i} length={songsData?.length} key={song.id}/>
                            </>
                        )
                    })}
                </>
            }
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export default PlaylistSongs;