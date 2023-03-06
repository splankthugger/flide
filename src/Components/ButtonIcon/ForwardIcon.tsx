import React from 'react';
import styled from 'styled-components';

const ForwardIcon = () => {
    return (
        <Wrapper>
            <img src="/img/right_arrow-icon.svg" alt="forward" />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`

export default ForwardIcon;