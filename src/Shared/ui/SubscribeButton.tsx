import React from "react"
import styled from "styled-components"

const SubscribeButton = ({ title }: any) => {
    return (
        <Wrapper>
            <span>{title}</span>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border: 1px solid rgba(54, 54, 54, 0.7);
    border-radius: 4px;
    height: 38px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    transition: ease-in-out 0.2s;
    cursor: pointer;

    &:hover {
        border: 1px solid rgba(200, 200, 200, 0.7);
        transition: ease-in-out 0.2s;
    }
`
export default SubscribeButton
