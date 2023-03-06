import React, { useEffect } from "react";
import styled from "styled-components";
import { darkTheme } from "../../../../styles/theme";
import Link from "next/link";
import {useRouter} from "next/router";
import HomeIcon from "../../../Components/ButtonIcon/HomeIcon";
import SearchIcon from "../../../Components/ButtonIcon/SearchIcon";
import LibraryIcon from "../../../Components/ButtonIcon/LibraryIcon";
import LikedIcon from "../../../Components/ButtonIcon/LikedIcon";

type NavMenuProps = {
    active: boolean;
}

const NavMenu: React.FC<NavMenuProps> = ({active}) => {
    const route = useRouter()

    return (
        <Wrapper>
            <NavMenuTitle>Обзор</NavMenuTitle>
            <Link href="/home">
                <NavMenuItem active={route.asPath === "/home"}>
                    {/* <img src={active ? "/img/home-filled-icon.svg" : "/img/home-icon.svg"} alt="home" /> */}
                    <HomeIcon active={route.asPath === "/home"} />
                    <NavMenuItemTitle active={route.asPath === "/home"}>Главная</NavMenuItemTitle>
                </NavMenuItem>
            </Link>
            <Link href="/search">
                <NavMenuItem active={route.asPath === "/search"}>
                    {/* <img src="/img/search-icon.svg" alt="search" /> */}
                    <SearchIcon active={route.asPath === "/search"}/>
                    <NavMenuItemTitle active={route.asPath === "/search"}>Поиск</NavMenuItemTitle>
                </NavMenuItem>
            </Link>
            <Link href="/library">
                <NavMenuItem active={route.asPath === "/library"}>
                    {/* <img src="/img/library-icon.svg" alt="library" /> */}
                    <LibraryIcon active={route.asPath === "/library"}/>
                    <NavMenuItemTitle active={route.asPath === "/library"}>Медиатека</NavMenuItemTitle>
                </NavMenuItem>
            </Link>
            <Link href="/liked">
                <NavMenuItem active={route.asPath === "/liked"}>
                    {/* <img src="/img/heart-icon.svg" alt="heart" /> */}
                    <LikedIcon active={route.asPath === "/liked"}/>
                    <NavMenuItemTitle active={route.asPath === "/liked"}>Лайкнутые</NavMenuItemTitle>
                </NavMenuItem>
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 64px;
`

const NavMenuTitle = styled.div`
    display: flex;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    color: ${darkTheme.fontColor.gray};
    margin-bottom: 16px;
    letter-spacing: 0.07em;
    user-select: none;
`

const NavMenuItem = styled.div<{active: boolean}>`
    display: flex;
    align-items: center;
    /* background-color: ${({active}) => active ? darkTheme.backgroundColor.mainColor : 'none'}; */
    padding: 16px 0px;
    border-radius: 16px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    user-select: none;
    transition: all .1s ease-in-out;

    &:hover > div {
        color: ${({active}) => active ? darkTheme.backgroundColor.mainColor : darkTheme.fontColor.white};
        transition: .2s ease-in-out;
    }

    /* &:hover {
        background-color: ${({active}) => active ? darkTheme.backgroundColor.mainColor : darkTheme.backgroundColor.hover};
        transition: .2s ease-in-out;
    } */

    & img {
        width: 24px;
        height: 24px;
        margin-right: 24px;

        @media (max-width: 768px) {
            margin: 0;
        }
    }
`

const NavMenuItemTitle = styled.div<{active: boolean}>`
    display: flex;
    color: ${({active}) => active ? darkTheme.backgroundColor.mainColor : darkTheme.fontColor.gray};
    transition: .2s ease-in-out;

    @media (max-width: 768px) {
        display: none;
    }
`

export default NavMenu;