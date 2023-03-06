import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../../styles/theme';

type Props = {
    releaseDate: any;
}

const ReleaseDate = ({releaseDate}: Props) => {
    return (
        <Wrapper>
            {releaseDate}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    font-size: 14px;
    color: ${darkTheme.fontColor.gray};
`

export default ReleaseDate;