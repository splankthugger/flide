import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../../styles/theme';

type Props = {
    year: any;
}

const AlbumDateCategory = ({year}: Props) => {
    return (
        <Wrapper>
            {year}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    font-size: 14px;
    color: ${darkTheme.fontColor.gray};
`

export default AlbumDateCategory;