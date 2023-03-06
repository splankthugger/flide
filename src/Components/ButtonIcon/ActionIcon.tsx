import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../../styles/theme';

const ActionIcon = () => {
    return (
        <Wrapper>
            <svg width="20" height="16" viewBox="0 0 20 4" fill="#A0A0A0" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="2" r="2" />
                <circle cx="2" cy="2" r="2" />
                <circle cx="18" cy="2" r="2" />
            </svg>

            {/* <img src="/img/action-white-icon.svg" alt="action" /> */}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    user-select: none;
    cursor: pointer;
    transition: .2s ease-in-out;

    & svg {
        transition: .2s ease-in-out;
    }

    &:hover > svg {
        fill: ${darkTheme.fontColor.white};
        transition: .2s ease-in-out;
    }
`

export default ActionIcon;