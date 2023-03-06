import React from 'react';
import styled from 'styled-components';

const AddIcon = () => {
    return (
        <Wrapper>
            <img src="/img/add-icon.svg" alt="add" />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 24px;
    height: 24px;
    align-items: center;
`

export default AddIcon;