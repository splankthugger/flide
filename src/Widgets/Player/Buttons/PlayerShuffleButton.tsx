import React from "react"
import styled from "styled-components"

const PlayerShuffleButton = () => {
    return (
        <Wrapper>
            <img src="/img/Player/player-shuffle-white-icon.svg" alt="" />
        </Wrapper>
    )
}

const Wrapper = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;

    & img {
        margin-left: auto;
        margin-right: auto;
    }
`

export default PlayerShuffleButton
