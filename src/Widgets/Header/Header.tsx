import React, { useState } from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../../styles/theme';
import Router, { useRouter } from "next/router"
import Logo from './Logo';
import UserInfo from './UserInfo';
import UserInfoDropdown from './UserInfoDropdown';
import Breadcrumbs from './Breadcrumbs';
import Tabs from './Tabs';

function Header() {
    const [showDropdown, setShowDropdown] = useState(false)
    const [activeTab, setActiveTab] = useState()
    const router = useRouter()

    const isLibrary = router.asPath === "/library"
    return (
        <Wrapper onClick={(e) => e.stopPropagation()}>
            <Breadcrumbs/>
            {isLibrary &&
                <Tabs active={activeTab} setActive={setActiveTab}/>
            }
            <button onClick={() => setShowDropdown(!showDropdown)}>
                <UserInfo/>
            </button>
            {showDropdown && (
                <UserInfoDropdown isShow={showDropdown} setShow={setShowDropdown}/>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    grid-area: main-view;
    justify-content: space-between;
    grid-area: header;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 9999;
    padding: 16px 32px;
    background-color: ${darkTheme.backgroundColor.black};

    & button {
        background: transparent;
        outline: 0;
        border: 0;
        padding: 0;
    }
`

export default Header;