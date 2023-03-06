import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../../styles/theme';
import LikedIcon from '../../Components/ButtonIcon/LikedIcon';

const ArtistLikedSongsButton = (props: any) => {
    return (
        <Wrapper>
            <LikedIcon active={true}/>
            Ты лайкнул&nbsp;<Strong>{props.count} треков</Strong>&nbsp;этого исполнителя
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 400;
    border: 1px solid rgba(54, 54, 54, 0.7);
    border-radius: 4px;
    height: 38px;
    letter-spacing: 0.5px;
    transition: ease-in-out 0.2s;
    cursor: pointer;

    &:hover {
        border: 1px solid rgba(200, 200, 200, 0.7);
        transition: ease-in-out 0.2s;
    }
`

const Strong = styled.span`
    display: flex;
    font-weight: 500;
    color: ${darkTheme.backgroundColor.mainColor};
`
export default ArtistLikedSongsButton;