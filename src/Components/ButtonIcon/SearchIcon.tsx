import React from 'react';
import styled from 'styled-components';

type Props = {
    active: boolean,
}


const SearchIcon = ({active}: Props) => {
    return (
        <Wrapper>
            <svg width="16" height="16" viewBox="0 0 18 18" fill={active ? '#FF9F9F' : 'white'} xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.385 12.4458C8.73476 14.5685 4.85532 14.4014 2.39854 11.9446C-0.237501 9.30856 -0.237501 5.0347 2.39854 2.39866C5.03458 -0.237379 9.30844 -0.237379 11.9445 2.39866C14.4013 4.85544 14.5683 8.73487 12.4457 11.3851L17.6013 16.5408C17.8942 16.8337 17.8942 17.3085 17.6013 17.6014C17.3084 17.8943 16.8335 17.8943 16.5407 17.6014L11.385 12.4458ZM3.4592 10.8839C1.40895 8.83369 1.40895 5.50957 3.4592 3.45932C5.50945 1.40907 8.83357 1.40907 10.8838 3.45932C12.9326 5.50807 12.9341 8.82881 10.8883 10.8794C10.8868 10.8809 10.8853 10.8824 10.8838 10.8839C10.8823 10.8854 10.8808 10.8869 10.8793 10.8884C8.8287 12.9342 5.50795 12.9327 3.4592 10.8839Z"/>
            </svg>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    left: 0;
    justify-content: center;
    width: 16px;
    height: 16px;
    margin-right: 24px;
    align-items: center;
`

export default SearchIcon;