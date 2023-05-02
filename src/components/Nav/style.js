import styled from "styled-components";

export const Navigation= styled.nav`
    background: var(--color-primary);
    position: fixed;
    height: 60px;
    top:0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    color: var(--color-text2);
    z-index: 1000;
`

export const Logo = styled.div`
    max-width: 20vw;
    min-width: 20vw;
    padding-left: 20px;
    font-family: 'Pacifico', cursive;
    color: var(--color-text);

    @media(max-width: 800px){
        max-width: 40vw;
        min-width: 40vw;
    };
`

export const NavContent = styled.div`
    max-width: 80vw;
    min-width: 80vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-right: 20px;
    gap: 10px;

    @media(max-width: 800px){
        max-width: 60vw;
        min-width: 60vw;
    }
`

export const Bola = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    color: var(--color-text);
    background-color: var(--color-primary-light);
    font-size: 2rem;

    &:hover{
        color: var(--color-primary-light);
        background-color: var(--color-text);
        cursor: pointer;
        transition: .5s;
    }

`