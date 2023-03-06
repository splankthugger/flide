import React from 'react';
import styled from 'styled-components';
import Count from './Count';

const InformationArtist = ({artist}: any) => {
    return (
        <Wrapper>
            <Count count={artist.mounthlyPlays} />&nbsp;прослушиваний за месяц
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
`
export default InformationArtist;