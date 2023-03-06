import React from 'react';
import styled from 'styled-components';
import ItemCategory from '../General/ItemCategory';
import { darkTheme } from '../../../styles/theme';

const HeadArtistPage = (item: any) => {
    return (
        <Wrapper>
            <ArtistPicture>
                <img src='/img/1.png'/>
            </ArtistPicture>
            <ArtistMain>
                <ItemCategory categoryTitle="Исполнитель"/>
                <ArtistTitle>
                    {item.title}
                </ArtistTitle>
                <ArtistMonthlyStats>
                    {item.listenersCount} прослушиваний за месяц
                </ArtistMonthlyStats>
            </ArtistMain>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    border-radius: 24px;
    /* padding: 32px; */
    margin-bottom: 32px;
    color: ${darkTheme.fontColor.white};
    /* background-color: rgb(12,12,12); */
`

const ArtistPicture = styled.div`
    width: 216px;
    height: auto;
    margin-right: 48px;
    user-select: none;

    & > img {
        max-width: 100%;
        height: auto;
        border-radius: 50%;
    }
`

const ArtistMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const ArtistTitle = styled.div`
    display: flex;
    font-size: 64px;
    font-weight: 700;
    margin-bottom: 24px;
    user-select: none;
    cursor: pointer;
`

const ArtistMonthlyStats = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    cursor: default;
`
export default HeadArtistPage;