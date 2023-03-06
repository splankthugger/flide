import React from "react"
import styled from "styled-components"

const PlayerBackButton = () => {
    return (
        <Wrapper>
            <img src="/img/Player/player-back-white-icon.svg" alt="" />
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

export default PlayerBackButton
