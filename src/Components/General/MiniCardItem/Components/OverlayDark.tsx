import React from 'react';
import styled from 'styled-components';

export const OverlayDark = () => {
    return (
        <Wrapper>
            
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 32px;
    z-index: 1;
    transition: all .2s;
`

export default OverlayDark;