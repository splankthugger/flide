import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from "next/link";
import {useRouter} from "next/router";
import { darkTheme } from "../../../styles/theme";

type props = {
    isShow: boolean;
    setShow: Function;
}

function UserInfoDropdown({isShow, setShow}: props) {
    const links = [
        {
            title: "Профиль",
            route: "/user/1",
        },
        {
            title: "Настройки",
            route: "/settings",
        },
        {
            title: "Выйти",
            route: "/authorization",
        },
    ]

    useEffect(() => {
        document.addEventListener("click", () => setShow(false));
    
        return () => {
          document.removeEventListener("click", () => setShow(false));
        };
    }, []);

    if (!isShow) return null;

    return (
        <Wrapper>
            {links.map((link) => {
                return(
                    <Link href={link.route} key={link.route}>
                        <DropdownItem onClick={() => setShow(!isShow)}>
                            {link.title}
                        </DropdownItem>
                    </Link>
                )
            }  
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 9999;
    inset: 0 0 auto auto;
    transform: translate(-16px, 80px);
    min-width: 200px;
    padding: 16px;
    border-radius: 16px;
    background-color: rgba(18,18,18,255);
    color: ${darkTheme.fontColor.white};
    font-size: 14px;
    box-shadow: ${darkTheme.shadow.boxShadow};

    /* padding: 16px 0px; */
`

const DropdownItem = styled.div`
    display: flex;
    align-items: center;
    padding: 16px;
    border-radius: 8px;
    cursor: pointer;
    user-select: none;
    transition: .05s ease-in-out;

    /* padding: 16px 32px;
    border-radius: 0; */

    &:hover {
        background-color: ${darkTheme.backgroundColor.hover};
        transition: .05s ease-in-out;
    }
`
export default UserInfoDropdown;