import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../../styles/theme';
import TimeDurationIcon from '../../Components/ButtonIcon/TimeDurationIcon';

const AlbumContentHeader = () => {
    return (
        <Wrapper>
            <TableStatus></TableStatus>
            <TableHeadTitle active={false}>
                #
            </TableHeadTitle>
            <TableHeadSort>
                <TableHeadTitle active={false}>Название</TableHeadTitle>
            </TableHeadSort>
            <TableHeadSort>
                <TableHeadTitle active={false}>Прослушивания</TableHeadTitle>
            </TableHeadSort>
            <TableHeadSort>
                <TableHeadTitle active={false}><TimeDurationIcon/></TableHeadTitle>
            </TableHeadSort>
            <TableActions></TableActions>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    grid-gap: 16px;
    grid-template-columns: [status] 32px [index] 16px [first] 6fr [var1] 4fr [last] minmax(120px,1fr) [actions] 32px;
    height: 40px;
    padding: 0px 16px 0px 16px;
    border-bottom: 1px solid rgba(54, 54, 54, 0.7);
    z-index: 999;
    width: 100%;
    margin-bottom: 16px;
`

const TableHeadSort = styled.div`
    display: flex;
    align-items: center;
`

const TableHeadTitle = styled.span<{active: boolean}>`
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 400;
    text-transform: uppercase;
    color: ${({active}) => active ? darkTheme.fontColor.white : darkTheme.fontColor.gray};
    cursor: pointer;
    transition: .2s ease-in-out;

    &:hover {
        color: ${darkTheme.fontColor.white};
        transition: .2s ease-in-out;
    }
`

const TableStatus = styled.div`
    
`

const TableActions = styled.div`
    
`
export default AlbumContentHeader;