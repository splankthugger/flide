import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { useGetAlbumByIdQuery } from '../../../Stores/albums/albums.api';
import { useGetArtistByIdQuery } from '../../../Stores/artists/artist.api';
import { useGetSongsByAlbumIdQuery } from '../../../Stores/songs/song.api';
import AuthorPicture from './AuthorPicture';
import Count from './Count';
import UserName from './UserName';


const InformationAlbum = ({album}: any) => {
    const router = useRouter()
    const {id} = router.query
    const {data: artistData} = useGetArtistByIdQuery(album.artistId)
    const {data: albumData} = useGetAlbumByIdQuery(id)
    const {data: songsData} = useGetSongsByAlbumIdQuery(id)
    return (
        <Wrapper>
            {artistData?.map((artist) => {
                return(
                    <>
                        <AuthorPicture authorPictureUrl={artist.coverUrl}/>
                        <UserName username={artist.title} route={`/artist/${artist.id}`} />
                    </>
                )
            })}
            <Count count={songsData?.length} />&nbsp;треков
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
`
export default InformationAlbum;