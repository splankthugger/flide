import React from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import { darkTheme } from '../../../styles/theme';

const RestorePage = () => {
    return (
        <Wrapper>
            <Content>
                <LogoTitle>
                    <span>Flide</span>
                </LogoTitle>
                <Title>
                    <span>Восстановление аккаунта</span>
                </Title>
                <form action=''>
                    <UserdataInput>
                        <button>
                            Я забыл имя пользователя или E-mail
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.2661 9.51616C15.258 8.74868 15.258 7.25122 14.2661 6.48374C11.2685 4.16434 7.92133 2.33619 4.34979 1.06771L3.69732 0.835971C2.44904 0.392631 1.13053 1.23719 0.961542 2.52574C0.489382 6.12595 0.489382 9.87394 0.961541 13.4742C1.13053 14.7627 2.44904 15.6073 3.69731 15.1639L4.34979 14.9322C7.92133 13.6637 11.2685 11.8356 14.2661 9.51616Z" fill="white"/>
                            </svg>
                        </button>
                    </UserdataInput>
                    <UserdataInput>
                        <button>
                            Я забыл пароль
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.2661 9.51616C15.258 8.74868 15.258 7.25122 14.2661 6.48374C11.2685 4.16434 7.92133 2.33619 4.34979 1.06771L3.69732 0.835971C2.44904 0.392631 1.13053 1.23719 0.961542 2.52574C0.489382 6.12595 0.489382 9.87394 0.961541 13.4742C1.13053 14.7627 2.44904 15.6073 3.69731 15.1639L4.34979 14.9322C7.92133 13.6637 11.2685 11.8356 14.2661 9.51616Z" fill="white"/>
                            </svg>
                        </button>
                    </UserdataInput>
                    <UserdataInput>
                        <Link href='/authorization'><BackButton>Назад</BackButton></Link>
                    </UserdataInput>
                </form>
            </Content>
        </Wrapper>
    );
};

const slideToRight = keyframes`
    from {
        opacity: 1;
        transform: translateY(0px)
    }

    to {
        opacity: 0;
        transform: translateY(1920px)
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: inherit;
    width: 100%;
    min-height: 100vh;
    margin-left: auto;
    margin-right: auto;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${darkTheme.backgroundColor.grayDarkest};
    padding: 32px;
    border: 1px solid ${darkTheme.border.grayTranslucent};
    border-radius: 24px;
    animation: ${slideToRight} .3s linear;
`

const LogoTitle = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    font-size: 40px;
    font-weight: 700;
    color: ${darkTheme.backgroundColor.mainColor};
    margin-bottom: 48px;
`

const Title = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    font-size: 20px;
    font-weight: 600;
    color: ${darkTheme.fontColor.white};
    text-transform: uppercase;
    margin-bottom: 32px;
`

const UserdataInput = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 480px;
    margin-bottom: 20px;
   
    & input {
        color: ${darkTheme.fontColor.white};
        background: ${darkTheme.backgroundColor.gray};
        border: 1px solid ${darkTheme.border.grayTranslucent};
        border-radius: 6px;
        outline: none;
        width: 100%;
        padding: 18px 32px;
        transition: .2s ease-in-out;

        &:focus {
            border-color: ${darkTheme.border.mainColorTranslucent};
            transition: .2s ease-in-out;
        }
    }

    & button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: ${darkTheme.fontColor.white};
        background: ${darkTheme.backgroundColor.gray};
        font-size: 14px;
        font-weight: 600;
        border: 1px solid ${darkTheme.border.grayTranslucent};
        border-radius: 6px;
        outline: none;
        width: 100%;
        padding: 18px 32px;
        transition: .2s ease-in-out;
        cursor: pointer;
    }

    &:nth-child(2)
    {
        margin-bottom: 0px;
    }

    &:last-child {
        & > button {
            justify-content: center;
            font-size: 16px;
        }
    }
`

const BackButton = styled.button`
    display: flex;
    justify-content: center;
    color: ${darkTheme.fontColor.white};
    background: ${darkTheme.backgroundColor.gray};
    font-size: 16px;
    font-weight: 600;
    border: 1px solid ${darkTheme.border.grayTranslucent};
    border-radius: 6px;
    outline: none;
    width: 100%;
    padding: 18px 32px;
    margin-top: 40px;
    transition: .2s ease-in-out;
    cursor: pointer;
`

export default RestorePage;