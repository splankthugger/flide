import React from 'react';
import styled from 'styled-components';

const DropupIcon = () => {
    return (
        <Wrapper>
            <img src='/img/up_arrow_lite-icon.svg' alt='up'/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
`

export default DropupIcon;