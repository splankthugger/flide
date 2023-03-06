import React from 'react';
import styled from 'styled-components';

const SearchFilterIcon = () => {
    return (
        <Wrapper>
            <svg width="16px" height="16px" viewBox="0 -0.24 28.423 28.423" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.953,2.547A12.643,12.643,0,1,0,27.6,15.19,12.649,12.649,0,0,0,14.953,2.547Zm0,2A10.643,10.643,0,1,1,4.31,15.19,10.648,10.648,0,0,1,14.953,4.547Z" transform="translate(-2.31 -2.547)"/>
                <path d="M30.441,28.789l-6.276-6.276a1,1,0,1,0-1.414,1.414L29.027,30.2a1,1,0,1,0,1.414-1.414Z" transform="translate(-2.31 -2.547)"/>
            </svg>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 0px 8px;
    width: 40px;
    height: 100%;
    pointer-events: none;

    & svg {
        flex-shrink: 0;
        fill: #757575;
    }
`

export default SearchFilterIcon;