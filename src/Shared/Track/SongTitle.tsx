import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../../styles/theme';

const SongTitle = ({title}: any) => {
    return (
        <Wrapper>
            {title}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    color: ${darkTheme.fontColor.white};
`

export default SongTitle;