import React from "react"
import styled, { ThemeConsumer } from "styled-components"

import { darkTheme } from "../../../styles/theme"

const PlayButton = () => {
    return (
        <Wrapper>
            <svg
                width="32"
                height="32"
                viewBox="0 0 19 22"
                fill="#A0A0A0"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M17.7144 9.26788C19.0477 10.0377 19.0477 11.9622 17.7144 12.732L3.14293 21.1448C1.80959 21.9146 0.142927 20.9523 0.142927 19.4127L0.142927 2.58711C0.142927 1.04751 1.80959 0.085261 3.14293 0.855061L17.7144 9.26788Z" />
            </svg>

            {/* <img src='/img/play-filled-white-icon.svg' alt='play'/> */}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    user-select: none;
    cursor: pointer;

    & svg {
        transition: 0.2s ease-in-out;
    }

    &:hover > svg {
        fill: ${darkTheme.fontColor.white};
        transition: 0.2s ease-in-out;
    }
`

export default PlayButton
