import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../../styles/theme';

const Logo = () => {
    return (
        <Wrapper>
            <LogoTitle>Flide</LogoTitle>
        </Wrapper>
    );
};


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0 0px;
    margin-bottom: 32px;
    font-size: 24px;
    font-weight: 700;
    color: ${darkTheme.fontColor.white};
    position: relative;
    cursor: pointer;
    user-select: none;
`

const LogoTitle = styled.div`
    display: flex;
    width: 100%;
`
export default Logo;