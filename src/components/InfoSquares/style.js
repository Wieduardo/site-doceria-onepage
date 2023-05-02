import styled from "styled-components";

export const SquareContainer = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const SquareTopLeft = styled.div`
    height:40vh;
    width: 50vw;
    background-color: var(--color-primary);
`

export const SquareTopRight = styled.div`
    height:40vh;
    width: 50vw;
    background-color: var(--color-secondary);
`

export const SquareBottomLeft = styled.div`
    height:40vh;
    width: 50vw;
    background-color: var(--color-tertiary);
`

export const SquareBottomRight = styled.div`
    height:40vh;
    width: 50vw;
    background-color: var(--color-primary-light);
`