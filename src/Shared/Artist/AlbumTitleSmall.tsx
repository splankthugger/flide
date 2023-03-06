import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../../styles/theme';

const AlbumTitleSmall = ({title}: any) => {
    return (
        <Wrapper>
            {title}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    font-size: 14px;
    font-weight: 700;
    color: ${darkTheme.fontColor.white};
    margin-bottom: 8px;
`

export default AlbumTitleSmall;