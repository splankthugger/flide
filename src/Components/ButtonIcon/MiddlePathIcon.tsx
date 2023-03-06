import React from 'react';
import styled from 'styled-components';

const MiddlePathIcon = () => {
    return (
        <Wrapper>
            <img src="/img/right_arrow_lite-icon.svg" alt="next" />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

export default MiddlePathIcon;