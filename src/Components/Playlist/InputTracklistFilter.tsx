import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../../styles/theme';
import SearchFilterIcon from '../General/Icons/SearchFilterIcon';

const InputTrackSearch = () => {
    return (
        <Wrapper>
            <TracklistFilterGroup>
                <SearchFilterIcon/>
                <input placeholder='Искать в лайкнутых...'/>
            </TracklistFilterGroup>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;

    & input {
        display: flex;
        width: 100%;
        font-size: 14px;
        font-weight: 500;
        outline: none;
        padding: 12px 36px;
        border: 1px solid transparent;
        border-radius: 8px;
        color: ${darkTheme.fontColor.white};
        background-color: ${darkTheme.backgroundColor.gray};
        transition: all .2s ease-in-out;
    }

    & input:focus {
        border: 1px solid ${darkTheme.border.mainColorTranslucent};
        transition: all .2s ease-in-out;
    }

    input::placeholder {
        font-family: 'Graphik LCG';
        font-weight: 500;
        color: #757575;
    }
`

const TracklistFilterGroup = styled.div`
    display: flex;
    position: relative;
    width: 30%;
`
export default InputTrackSearch;