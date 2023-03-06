import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../../styles/theme';

type Props = {
    labelTitle: any;
}

const LabelTitle = ({labelTitle}: Props) => {
    return (
        <Wrapper>
            {labelTitle}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    font-size: 12px;
    color: ${darkTheme.fontColor.gray};
`

export default LabelTitle;