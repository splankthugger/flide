import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../../styles/theme';

type props = {
    isShow: boolean;
    setShow: Function;
}

const HeadActionsDropdownMenu = ({isShow, setShow}: props) => {
    const albumActions = [
        {
            title: "Добавить в медиатеку",
            
        },
        {
            title: "Скопировать ссылку",
            
        },
    ]

    const playlistActions = [
        {
            title: "Добавить в медиатеку",
            
        },
        {
            title: "Изменить данные",
            
        },
        {
            title: "Удалить плейлист",
            
        },
        {
            title: "Скопировать ссылку",
            
        },
    ]

    const artistActions = [
        {
            title: "Добавить в медиатеку",
            
        },
        {
            title: "Скопировать ссылку",
            
        },
    ]

    const profileActions = [
        {
            title: "Изменить профиль",
            
        },
        {
            title: "Скопировать ссылку",
            
        },
    ]

    const router = useRouter()
    const isArtist = router.pathname === "/artist/[id]"
    const isAlbum = router.pathname === `/album/[id]`
    const isPlaylist = router.pathname === `/playlist/[id]`
    const isLiked = router.asPath === "/liked"
    const isProfile = router.pathname === `/user/[id]`

    useEffect(() => {
        document.addEventListener("click", () => setShow(false));
    
        return () => {
          document.removeEventListener("click", () => setShow(false));
        };
    }, []);

    if (!isShow) return null;

    return (
        <>
        {isArtist &&
            <Wrapper>
            {artistActions.map((action) => {
                return(
                    <DropdownItem onClick={() => setShow(!isShow)}>
                        {action.title}
                    </DropdownItem>
                )
            })}
            </Wrapper>
        }

        {isAlbum &&
            <Wrapper>
            {albumActions.map((action) => {
                return(
                    <DropdownItem onClick={() => setShow(!isShow)}>
                        {action.title}
                    </DropdownItem>
                )
            })}
            </Wrapper>
        }

        {isPlaylist &&
            <Wrapper>
            {playlistActions.map((action) => {
                return(
                    <DropdownItem onClick={() => setShow(!isShow)}>
                        {action.title}
                    </DropdownItem>
                )
            })}
            </Wrapper>
        }

        {isProfile &&
            <WrapperProfile>
            {profileActions.map((action) => {
                return(
                    <DropdownItem onClick={() => setShow(!isShow)}>
                        {action.title}
                    </DropdownItem>
                )
            })}
            </WrapperProfile>
        }
        </>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 9999;
    inset: 0 0 auto auto;
    transform: translate(-1170px, 330px);
    min-width: 200px;
    padding: 16px;
    border-radius: 16px;
    background-color: rgba(18,18,18,255);
    color: ${darkTheme.fontColor.white};
    font-size: 14px;
    box-shadow: ${darkTheme.shadow.boxShadow};
`

const WrapperProfile = styled.div`
display: flex;
flex-direction: column;
position: absolute;
z-index: 9999;
inset: 0 0 auto auto;
transform: translate(-1270px, 330px);
min-width: 200px;
padding: 16px;
border-radius: 16px;
background-color: rgba(18,18,18,255);
color: ${darkTheme.fontColor.white};
font-size: 14px;
box-shadow: ${darkTheme.shadow.boxShadow};
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
export default HeadActionsDropdownMenu;