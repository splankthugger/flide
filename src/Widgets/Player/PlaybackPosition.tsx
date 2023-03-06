import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../../styles/theme';

type Props = {
    position: any,
}

const PlaybackPosition = ({position}: Props) => {
    return (
        <Wrapper>
            {position}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${darkTheme.fontColor.gray};
    user-select: none;
`

export default PlaybackPosition;