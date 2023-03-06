import React from "react"
import styled from "styled-components"

import HeadPage from "../../Components/General/HeadPage/HeadPage"
import { useGetUserByIdQuery } from "../../Stores/users/user.api"

import MainProfilePage from "./MainProfilePage"

const ProfilePage = () => {
    const {data: userData} = useGetUserByIdQuery(1)
    return (
        <Wrapper>
            <Content>
                {userData?.map((user) => {
                    return(
                        <>
                            <HeadPage profile={user} />
                            <MainProfilePage />
                        </>
                    )
                })}
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: inherit;
    width: 100%;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px;
    border-radius: 24px;
    background-color: rgb(12, 12, 12);
`

export default ProfilePage
