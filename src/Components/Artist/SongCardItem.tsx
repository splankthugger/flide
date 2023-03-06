import React from "react"
import styled from "styled-components"

import { darkTheme } from "../../../styles/theme"
import SongDuration from "../../Shared/Track/SongDuration"
import SongTitle from "../../Shared/Track/SongTitle"
import HeartIcon from "../ButtonIcon/HeartIcon"

type SongCardItemProps = {
    active: boolean
}

const SongCardItem = ({ coverUrl, title, duration }: any) => {
    return (
        <Wrapper active>
            <LeftSide>
                <HeartIcon />
                <Cover url={coverUrl}>
                    <img src={coverUrl} alt="cover" />
                </Cover>
                <SongTitle title={title} />
            </LeftSide>
            <RightSide>
                <SongDuration duration={duration} />
                <Actions>
                    <img src="/img/other-white-icon.svg" alt="" />
                </Actions>
            </RightSide>
        </Wrapper>
    )
}

const Actions = styled.div`
    display: flex;
    opacity: 0;
    align-items: center;
    justify-content: center;
    transition: 0.1s ease-in-out;
`

const Wrapper = styled.div<{ active: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    border-radius: 16px;
    padding: 16px 24px;
    transition: 0.1s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: ${({ active }) =>
            active ? darkTheme.backgroundColor.hover : "none"};
        transition: 0.2s ease-in-out;
    }

    &:hover ${Actions} {
        opacity: 1;
        transition: 0.2s ease-in-out;
    }
`

const Cover = styled.div<{ url: any }>`
    display: flex;
    position: relative;
    align-items: center;
    margin-right: 16px;
    border-radius: 4px;
    user-select: none;

    & > img {
        max-width: 40px;
        height: auto;
        border-radius: 4px;
    }
`

const LeftSide = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const RightSide = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export default SongCardItem
