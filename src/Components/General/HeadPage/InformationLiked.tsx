import React from 'react';
import styled from 'styled-components';
import { useGetUserByIdQuery, useGetUserLikedSongsQuery } from '../../../Stores/users/user.api';
import AuthorPicture from './AuthorPicture';
import Count from './Count';
import UserName from './UserName';

const InformationLiked = ({liked}: any) => {
    const {data: userData} = useGetUserByIdQuery(1)
    const {data: userLikedSongsData} = useGetUserLikedSongsQuery(1)
    return (
        <Wrapper>
            {userData?.map((user: any) => {
                return(
                    <>
                        <AuthorPicture authorPictureUrl={user.coverUrl}/>
                        <UserName username={user.title} route={`/user/${user.id}`} />
                    </>
                )
            })}
            <Count count={userLikedSongsData?.likedSongs.length} />&nbsp;треков
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
export default InformationLiked;