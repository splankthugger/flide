import React from 'react';
import styled from 'styled-components';
import VolumeIcon from '../../../Components/ButtonIcon/VolumeIcon';
import PlayerOptionsVolumeSlider from './PlayerOptionsVolumeSlider';

const PlayerOptionsVolumeButton = () => {
    return (
        <Wrapper>
            <button><VolumeIcon/></button>
            <PlayerOptionsVolumeSlider/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 1 125px;
    gap: 16px;
`

export default PlayerOptionsVolumeButton;