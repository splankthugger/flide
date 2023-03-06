import React from 'react';
import styled from 'styled-components';

const AuthorPicture = ({authorPictureUrl}: any) => {
    return (
        <Wrapper>
            <img src={authorPictureUrl} alt="avatar"/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 12px;

    & img {
        border-radius: 50%;
    }
`
export default AuthorPicture;