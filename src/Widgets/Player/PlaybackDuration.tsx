import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../../styles/theme';

type Props = {
    duration: any,
}

const PlaybackDuration = ({duration}: Props) => {
    return (
        <Wrapper>
            {duration}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${darkTheme.fontColor.gray};
    user-select: none;
`

export default PlaybackDuration;