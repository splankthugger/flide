import React from 'react';
import styled from 'styled-components';
import LabelTitle from '../../Shared/Album/LabelTitle';
import ReleaseDate from '../../Shared/Album/ReleaseDate';

const BottomSubtitleAlbum = ({album}: any) => {
    return (
        <Wrapper >
            <LabelTitle labelTitle={album.labelTitle}/>
            <ReleaseDate releaseDate={album.releaseDate}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    user-select: none;
`

export default BottomSubtitleAlbum;