import { NodeNextRequest } from 'next/dist/server/base-http/node';
import React, { useState } from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../../styles/theme';




const HeartIcon = () => {
    const [isActive, setIsActive] = useState(false);
    const changeColor = () => {
        setIsActive(current => !current);
    }

    return (
        <Wrapper onClick={() => changeColor()}>
            <svg width="16" height="16" viewBox="0 0 18 15" fill='none' xmlns="http://www.w3.org/2000/svg">
                <path d="M5.4 0.25C2.61914 0.25 0.25 2.3293 0.25 5.0298C0.25 6.89275 1.12235 8.46118 2.27849 9.76043C3.43066 11.0552 4.91714 12.142 6.26097 13.0516L8.57959 14.6211C8.83351 14.793 9.16649 14.793 9.42041 14.6211L11.739 13.0516C13.0829 12.142 14.5693 11.0552 15.7215 9.76043C16.8777 8.46118 17.75 6.89275 17.75 5.0298C17.75 2.3293 15.3809 0.25 12.6 0.25C11.1665 0.25 9.90516 0.922139 9 1.79183C8.09484 0.922139 6.83347 0.25 5.4 0.25Z" fill={isActive ? "#FF9F9F" : "#A0A0A0"}/>
            </svg>

            {/* {<img src={isActive ? "/img/heart-filled-icon.svg" : "/img/heart-icon.svg"} alt=""/>} */}
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

    &:hover path {
        fill: ${darkTheme.fontColor.white};
        transition: .2s ease-in-out;
    }
`

export default HeartIcon;