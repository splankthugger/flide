import React from 'react';
import styled from 'styled-components';

const Title = ({title}: any) => {
    return (
        <Wrapper>
            {title}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    font-size: 64px;
    font-weight: 700;
    margin-bottom: 24px;
    user-select: none;
    cursor: pointer;
`
export default Title;