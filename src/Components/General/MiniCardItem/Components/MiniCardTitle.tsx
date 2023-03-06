import React from "react"
import styled from "styled-components"

import { darkTheme } from "../../../../../styles/theme"

type props = {
    title: string;
    isAlbum: boolean;
}

const MiniCardTitle = ({ title, isAlbum }: props) => {
    return (
        <Wrapper isAlbum={isAlbum}>
            <Title isAlbum={isAlbum}>
                {title}
            </Title>
        </Wrapper>
    )
}

const Wrapper = styled.div<{isAlbum: boolean}>`
    display: flex;
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    color: ${darkTheme.fontColor.white};
    margin-bottom: 8px;
    justify-content: ${({isAlbum}) => isAlbum ? 'start' : 'center'};
`

const Title = styled.div<{isAlbum: boolean}>`
    max-width: 180px;
    text-align: ${({isAlbum}) => isAlbum ? 'start' : 'center'};
    letter-spacing: .4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`
export default MiniCardTitle
