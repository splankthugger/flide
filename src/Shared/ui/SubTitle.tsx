import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../../styles/theme';

type Props = {
    subTitle: any;
}

const SubTitle = ({subTitle}: Props) => {
    return (
        <Wrapper>
            {subTitle}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: left;
    font-size: 16px;
    font-weight: 700;
    color: ${darkTheme.fontColor.white};
    margin-bottom: 24px;
`

export default SubTitle;