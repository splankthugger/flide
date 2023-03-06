import React from "react";
import styled from "styled-components";
import { darkTheme } from "../../../styles/theme";
import { useRouter } from "next/router";

import HeadPage from "../../Components/General/HeadPage/HeadPage";
import { useGetUserByIdQuery, useGetUserLikedSongsQuery } from "../../Stores/users/user.api";
import PlaylistContent from "../../Widgets/Playlist/PlaylistContent";

function LikedPage() {
    const router = useRouter()
    const {data: userData} = useGetUserByIdQuery(1)
    
    return (
        <Wrapper>
            <Content>
                {userData?.map((user) => {
                    return(
                        <>
                            <HeadPage likedPage={user} />
                            <PlaylistContent/>
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
    min-height: 0;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px;
    border-radius: 24px;
    background-color: rgb(12, 12, 12);
    margin-bottom: 32px;
`

export default LikedPage;