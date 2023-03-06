import React, { useEffect } from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../../styles/theme';

const tabs = [
    {
        value: "playlists",
        title: "Плейлисты",
    },
    {
        value: "albums",
        title: "Альбомы",
    },
    {
        value: "artists",
        title: "Исполнители",
    },
]

type Props = {
    active?: {
        value: string
        title: string
    }
    setActive: Function
}

const Tabs = ({ active, setActive }: Props) => {
    useEffect(() => {
        setActive(tabs[0].value)
    }, [])
    
    return (
        <Wrapper>
            {tabs.map((tab: any) => {
                return (
                    <TabItem active={tab.value === active} onClick={() => setActive(tab.value)} key={tab.value}>
                        {tab.title}
                    </TabItem>
                )
            })}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    gap: 16px;
`

const TabItem = styled.div<{ active?: boolean }>`
    display: flex;
    padding: 16px 32px;
    color: ${darkTheme.fontColor.white};
    font-size: 14px;
    font-weight: 600;
    background-color: ${({ active }) =>
        active ? darkTheme.border.grayTranslucent : "none"};
    border-radius: 8px;
    transition: 0.1s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: ${({ active }) =>
            active ? "none" : darkTheme.backgroundColor.hover};
        transition: 0.1s ease-in-out;
    }
`
export default Tabs;