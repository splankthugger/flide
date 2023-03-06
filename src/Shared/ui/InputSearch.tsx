import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../../styles/theme';
import useFocus from '../../Hooks/useFocus';

type Props = {
    placeholderTitle: any
    searchTitle: string
    setSearchTitle: Function
}

const InputSearch = ({placeholderTitle, searchTitle, setSearchTitle}: Props) => {
    const focusRef = useFocus();

    return (
        <Wrapper>
            <form action="">
                <input maxLength={256} 
                placeholder={placeholderTitle} 
                ref={focusRef} 
                value={searchTitle} 
                onChange={event => setSearchTitle(event.target.value)}
                />
            </form>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin-bottom: 24px;

    & input {
    display: flex;
    align-content: center;
    width: 800px;
    padding: 24px;
    color: ${darkTheme.fontColor.white};
    background-color: ${darkTheme.backgroundColor.gray};
    font-size: 24px;
    font-weight: 500;
    outline: none;
    border-radius: 16px;
    border: 1px solid;
    border-color: ${darkTheme.border.grayTranslucent};
    font-family: 'Graphik LCG';
    transition: all .2s ease-in-out;

    &:focus {
        border-color: ${darkTheme.border.mainColorTranslucent};
        transition: all .2s ease-in-out;
    }

    &::placeholder {
        display: flex;
        font-size: 16px;
    }
    }
`

export default InputSearch;