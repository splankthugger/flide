import React from 'react';
import styled from 'styled-components';

const DropdownIcon = () => {
    return (
        <Wrapper>
            <img src="/img/down_arrow_lite-icon.svg" alt="down" />
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

export default DropdownIcon;