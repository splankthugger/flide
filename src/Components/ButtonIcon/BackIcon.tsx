import React from 'react';
import styled from 'styled-components';

const BackIcon = () => {
    return (
        <Wrapper>
            <img src="/img/left_arrow-icon.svg" alt="back" />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`

export default BackIcon;