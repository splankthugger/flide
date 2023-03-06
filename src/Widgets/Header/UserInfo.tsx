import Image from "next/image"
import React, { useState } from "react"
import styled from "styled-components"
import { darkTheme } from "../../../styles/theme"
import DropdownIcon from "../../Components/ButtonIcon/DropdownIcon"

function UserInfo(user: any) {
    return (
        <Wrapper>
            <UserPicture>
                <img src="/img/avatar.jpg" alt="User Picture" />
            </UserPicture>
            <UserName>
                <span>User</span>
            </UserName>
            <DropdownIcon />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: fit-content;
    padding: 8px 16px;
    border-radius: 16px;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        background: ${darkTheme.backgroundColor.hover};
        transition: 0.2s ease-in-out;
    }
`

const UserPicture = styled.div`
    display: flex;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 24px;

    & img {
        border-radius: 50%;
    }

    @media (max-width: 768px) {
        margin: 0;
    }
`

const UserName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    margin-right: 24px;
    color: ${darkTheme.fontColor.white};

    @media (max-width: 768px) {
        display: none;
    }
`
export default UserInfo
