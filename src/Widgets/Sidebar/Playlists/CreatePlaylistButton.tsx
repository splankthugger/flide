import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../../../styles/theme';
import AddIcon from '../../../Components/ButtonIcon/AddIcon';

function CreatePlaylistButton() {
    return (
        <Wrapper>
            <AddIcon/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    right: 0;
    align-items: center;
    background-color: ${darkTheme.backgroundColor.gray};
    border-radius: 50%;
    cursor: pointer;
`

export default CreatePlaylistButton;