import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../../styles/theme';

const SongDuration = ({duration}: any) => {
    return (
        <Wrapper>
            {duration}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 32px;
    font-size: 14px;
    font-weight: 400;
    color: ${darkTheme.fontColor.gray};
`

export default SongDuration;