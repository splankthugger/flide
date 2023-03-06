import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../../styles/theme';

const HeartIconFill = () => {
    return (
        <Wrapper>
            <svg width="16" height="16" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.666992 3.68653C0.666992 2.20459 1.97834 1 3.60033 1C4.39653 1 5.11919 1.37467 5.65391 1.88843C5.84743 2.07437 6.15322 2.07437 6.34675 1.88843C6.88147 1.37466 7.60412 1 8.40032 1C10.0223 1 11.3337 2.20459 11.3337 3.68653C11.3337 4.76183 10.8322 5.69386 10.1078 6.5079C9.38353 7.32182 8.43659 8.01758 7.54607 8.62037L6.00033 9.66667L4.45458 8.62037C3.56406 8.01758 2.61712 7.32182 1.89284 6.5079C1.16846 5.69386 0.666992 4.76183 0.666992 3.68653Z" fill={darkTheme.backgroundColor.mainColor} stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    transition: .2s ease-in-out;
    cursor: pointer;

    & path {
        transition: .2s ease-in-out;
    }
`
export default HeartIconFill;