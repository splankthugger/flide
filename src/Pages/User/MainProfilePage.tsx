import React from "react"
import styled from "styled-components"

import { darkTheme } from "../../../styles/theme"
import HeadActions from "../../Features/ui/HeadActions"
import SubTitle from "../../Shared/ui/SubTitle"
import { useGetSongsByIdQuery } from "../../Stores/songs/song.api"
import { useGetUserByIdQuery, useGetUserPopularMonthlySongsQuery } from "../../Stores/users/user.api"
import SongItem from "../../Widgets/Song/SongItem"

import Subscriptions from "./Subscriptions"

const MainProfilePage = () => {
    const {data: userData} = useGetUserPopularMonthlySongsQuery(1)
    const {data: songsData} = useGetSongsByIdQuery(userData?.popularMonthlySongs)
    return (
        <Wrapper>
            <SubscriptionsSection>
                <Title>Твои подписки</Title>
                <Subscriptions />
            </SubscriptionsSection>
            <StatisticsSection>
                <Title>Твоя статистика за последний месяц</Title>
                <SubTitle subTitle="Самые прослушиваемые треки" />
                {songsData?.map((song, i) => {
                        return(
                            <>
                                <SongItem song={song} i={i} length={songsData?.length} key={song.id}/>
                            </>
                        )
                })}
            </StatisticsSection>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: inherit;
    width: 100%;
    border-radius: 24px;
    gap: 32px;
    /* padding: 32px; */
    color: ${darkTheme.fontColor.white};
    /* background-color: rgb(12,12,12); */
`

const Title = styled.div`
    width: fit-content;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
    color: ${darkTheme.fontColor.white};
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`

const SubscriptionsSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const StatisticsSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 64px;
`
export default MainProfilePage
