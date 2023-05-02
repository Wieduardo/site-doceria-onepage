import styled from "styled-components";

export const SquareContainer = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-family: 'Pacifico', cursive;

    @media(max-width: 800px){
        flex-direction:column;
    };
`

export const SquareTopLeft = styled.div`
    height:40vh;
    width: 50vw;
    padding: 20px;
    background-color: var(--color-primary);

    &>span{
        font-family: 'Barlow Condensed', sans-serif;
    }

    @media(max-width: 800px){
        width: 100vw;
    };
`

export const SquareTopRight = styled.div`
    height:40vh;
    width: 50vw;
    padding: 20px;
    background-color: var(--color-secondary);

    &>span{
        font-family: 'Barlow Condensed', sans-serif;
    }

    @media(max-width: 800px){
        width: 100vw;
    };
`

export const SquareBottomLeft = styled.div`
    height:40vh;
    width: 50vw;
    padding: 20px;
    background-color: var(--color-tertiary);

    &>span{
        font-family: 'Barlow Condensed', sans-serif;
    }

    @media(max-width: 800px){
        width: 100vw;
    };
`

export const SquareBottomRight = styled.div`
    height:40vh;
    width: 50vw;
    padding: 20px;
    background-color: var(--color-primary-light);

    &>span{
        font-family: 'Barlow Condensed', sans-serif;
    }

    @media(max-width: 800px){
        width: 100vw;
    };
`