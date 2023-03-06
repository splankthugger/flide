import React from 'react';
import styled from 'styled-components';
import { useGetPlaylistByIdQuery } from '../../../Stores/playlists/playlist.api';
import { useGetUserByIdQuery } from '../../../Stores/users/user.api';
import AuthorPicture from './AuthorPicture';
import Count from './Count';
import UserName from './UserName';

const InformationPlaylist = ({playlist}: any) => {
    const {data: userData} = useGetUserByIdQuery(1)
    const {data: playlistData} = useGetPlaylistByIdQuery(1)
    console.log(playlistData)
    return (
        <Wrapper>
            {userData?.map((user) => {
                return(
                    <>
                        <AuthorPicture authorPictureUrl={user.coverUrl}/>
                        <UserName username={user.title} route={`/user/${user.id}`} />
                    </>
                )
            })}
           <Count count={"6"} />&nbsp;треков
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
export default InformationPlaylist;