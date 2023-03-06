import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../../styles/theme';

const HeadTitle = (props: any) => {
    return (
        <Wrapper>
            {props.title}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
    color: ${darkTheme.fontColor.white};
    margin-bottom: 24px;
`

export default HeadTitle;