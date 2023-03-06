import React from 'react';
import styled from 'styled-components';

const PlayFilledIcon = () => {
    return (
        <Wrapper>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.2661 9.51616C15.258 8.74868 15.258 7.25122 14.2661 6.48374C11.2685 4.16434 7.92133 2.33619 4.34979 1.06771L3.69732 0.835971C2.44904 0.392631 1.13053 1.23719 0.961542 2.52574C0.489382 6.12595 0.489382 9.87394 0.961541 13.4742C1.13053 14.7627 2.44904 15.6073 3.69731 15.1639L4.34979 14.9322C7.92133 13.6637 11.2685 11.8356 14.2661 9.51616Z" fill="white"/>
            </svg>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    transition: all 0.1s;

    &:hover svg {
        transition: all 0.1s;
    }

    &:hover path {
        transition: all 0.1s;
    }
`
export default PlayFilledIcon;