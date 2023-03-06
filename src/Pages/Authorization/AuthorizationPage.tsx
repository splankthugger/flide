import React, { FormEvent, useDebugValue, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { darkTheme } from '../../../styles/theme';
import useFocus from '../../Hooks/useFocus';
import InfoStatusIcon from '../../Components/ButtonIcon/InfoStatusIcon';

const AuthorizationPage = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const focusRef = useFocus();

    const clickLoginHandle = async (e: FormEvent) => {
        e.preventDefault();
        setError("");
    
        if (login.length === 0 || password.length === 0) {
            return setError("Все поля должны быть заполнены.");
        }
    
        const reqBody = { login, password };
    }

    return (
        <Wrapper>
            <Content>
                <LogoTitle>
                    <span>Flide</span>
                </LogoTitle>
                <Title>
                    <span>Авторизация</span>
                </Title>
                {error && <ErrorMessage>
                    <InfoStatusIcon/>
                    <Message>{error}</Message>
                </ErrorMessage>}
                <form onSubmit={clickLoginHandle}>
                    <UserdataInput>
                        <input 
                            ref={focusRef}
                            value={login}
                            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setLogin(e.target.value)
                            }
                            type="text" 
                            placeholder='Имя пользователя или E-mail' 
                            required 
                        />
                    </UserdataInput>
                    <UserdataInput>
                        <input 
                            value={password}
                            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setPassword(e.target.value)
                            }
                            type="password" 
                            placeholder='Пароль' 
                            required 
                        />
                    </UserdataInput>
                    <UserdataCheckbox>
                        <span>Запомнить меня</span>
                        <input type="checkbox"/>
                    </UserdataCheckbox>
                    <UserdataInput>
                        <button>Войти</button>
                    </UserdataInput>
                </form>
                <AuthorizationActions>
                    <ActionItem>Нет аккаунта? <ActionLink><Link href='/registration'>Зарегистрируйтесь</Link></ActionLink></ActionItem>
                    <ActionItem><ActionLink><Link href='/restore'>Забыли данные?</Link></ActionLink></ActionItem>
                </AuthorizationActions>
            </Content>
        </Wrapper>
    );
};

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

const ErrorMessage = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${darkTheme.border.grayTranslucent};
    border-radius: 6px;
    padding: 18px 32px;
    min-width: 480px;
    margin-bottom: 20px;
    background-color: #EF2738;
    color: ${darkTheme.fontColor.white};
    transition: .2s ease-in-out;
`

const Message = styled.div`
    margin: auto;
`

const UserdataInput = styled.div`
    display: flex;
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
        color: ${darkTheme.fontColor.white};
        background: ${darkTheme.backgroundColor.gray};
        font-size: 16px;
        font-weight: 600;
        border: 1px solid ${darkTheme.border.grayTranslucent};
        border-radius: 6px;
        outline: none;
        width: 100%;
        padding: 18px 32px;
        transition: .2s ease-in-out;
        cursor: pointer;
    }

    &:last-child {
        margin-top: 40px;
        margin-bottom: 32px;
    }
`

const UserdataCheckbox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: ${darkTheme.fontColor.white};
    padding: 18px 32px;
    margin-bottom: 0px;

    & input[type = checkbox] {
    color: ${darkTheme.fontColor.white};
    accent-color: ${darkTheme.backgroundColor.mainColor};
    border: 1px solid ${darkTheme.border.grayTranslucent};
    border-radius: 6px;
    outline: none;
    transition: .2s ease-in-out;

    &:focus {
        border-color: ${darkTheme.border.mainColorTranslucent};
        transition: .2s ease-in-out;
    }
   }
`

const AuthorizationActions = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`

const ActionItem = styled.span`
    color: ${darkTheme.fontColor.gray};
    font-size: 14px;
`

const ActionLink = styled.span`
    color: ${darkTheme.fontColor.link};
    cursor: pointer;
`

export default AuthorizationPage;