import React from 'react';
import styled from 'styled-components';
import QueueIcon from '../../Components/ButtonIcon/QueueIcon';
import PlayerOptionsVolumeButton from './Buttons/PlayerOptionsVolumeButton';

function PlayerOptions() {
    return (
        <Wrapper>
            <QueueIcon/>
            <PlayerOptionsVolumeButton/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 32px;
    width: 30%;
    height: fit-content;
    min-width: 180px;
`

export default PlayerOptions;