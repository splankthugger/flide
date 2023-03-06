import React, { useState } from 'react';
import styled from 'styled-components';
import ModalStateStore from '../../../Stores/ModalStateStore';

type PropTypes = {
    show: boolean,
    setShow: Function,
}

const CreatePlaylistModal = () => {
    
    return (
        <Wrapper>
            
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 450px;
    height: 300px;
    background-color: white;
`

export default CreatePlaylistModal;