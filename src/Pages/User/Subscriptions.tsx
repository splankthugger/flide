import Link from 'next/link';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import ArtistCardItem from '../../Components/General/MiniCardItem/ArtistCardItem';
import { useGetArtistsByIdQuery } from '../../Stores/artists/artist.api';
import { useGetUsersQuery, useGetUserSubscriptionsQuery } from '../../Stores/users/user.api';

const Subscriptions = () => {
    const {data: userData} = useGetUserSubscriptionsQuery(1)
    const {data: artistsData} = useGetArtistsByIdQuery(userData?.subscriptionArtistsId)

    return (
        <Wrapper>
            {artistsData?.map((artist) => {
                return (
                    <Link href={`artist/${artist.id}`} key={artist.id}>
                        <ArtistCardItem artist={artist}/>
                    </Link>
                )
            })}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(6, minmax(0,1fr));
    grid-template-rows: 1fr;
    grid-auto-rows: 0;
    grid-gap: 4px;
    width: 100%;
`

export default Subscriptions;