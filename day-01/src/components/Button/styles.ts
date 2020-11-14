import styled, { css } from 'styled-components'

export const Wrapper = styled.button<{ outlined?: boolean }>`
    outline: none;
    background: none;
    border: none;

    width: 150px;
    height: 50px;
    background-color: #5995fd;
    color: #fff;
    border-radius: 50px;
    text-transform: uppercase;
    transition: .5s;
    cursor: pointer;
    font-weight: 600;

    &:hover {
        background-color: #4d84e2;
    }


    ${({ outlined }) => outlined && css`
        background: none;
        border: 2px solid #fff;
    `}
`
