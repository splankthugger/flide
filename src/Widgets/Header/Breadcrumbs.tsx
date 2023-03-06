import React from 'react';
import styled from 'styled-components';
import BackIcon from '../../Components/ButtonIcon/BackIcon';
import MiddlePathIcon from '../../Components/ButtonIcon/MiddlePathIcon';
import { useRouter } from 'next/router';
import { darkTheme } from '../../../styles/theme';
import ForwardIcon from '../../Components/ButtonIcon/ForwardIcon';

function Breadcrumbs() {
    const router = useRouter()
    const key = router.pathname;
    return (
        <Wrapper>
            <BackIcon/>
            <ForwardIcon/>
            {/* <PathTitle>
               {key}
            </PathTitle>
            <MiddlePathIcon/>
            <PathTitle>
                Artist Name
            </PathTitle>
            <MiddlePathIcon/>
            <PathTitle>
                Album title
            </PathTitle> */}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    user-select: none;
    gap: 32px;
`

const PathTitle = styled.div`
    color: ${darkTheme.fontColor.gray};
    font-size: 14px;
    font-weight: 600;
    margin: 0 24px;
    cursor: pointer;

    &:last-child {
        color: ${darkTheme.fontColor.white};
    }
`
export default Breadcrumbs;