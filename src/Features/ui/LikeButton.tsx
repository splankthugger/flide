import React, { useState } from 'react';
import styled from 'styled-components';
import HeartIconFill from '../../Components/ButtonIcon/HeartIconFill';
import HeartIconOutline from '../../Components/ButtonIcon/HeartIconOutline';

const LikeButton = () => {
    const [isActive, setIsActive] = useState(false);
    const changeState = () => {
        setIsActive(current => !current);
    }

    return (
        <Wrapper onClick={() => changeState()}>
            {isActive &&
                <HeartIconFill/>
            }

            {!isActive && 
                <HeartIconOutline/>
            }
            
        </Wrapper>
    );
};

const Wrapper = styled.button`
    display: flex;
    opacity: 1;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 0;
    padding: 0;
    transition: 0.1s ease-in-out;
`
export default LikeButton;