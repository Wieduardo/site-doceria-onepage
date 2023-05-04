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
    display:flex;
    gap: 15px;
    max-width: 20vw;
    min-width: 20vw;
    padding-left: 20px;
    font-family: 'Pacifico', cursive;
    color: var(--color-text);
    align-items:center;
    line-height:2rem;

    &>img{
        max-height:40px;
        object-fit:scale-down;
    }

    @media(max-width: 800px){
        max-width: 40vw;
        min-width: 40vw;
        &>h1{
            font-size:1.8rem;
        }
    };

    @media(max-width: 415px){
        &>h1{
            font-size:1.6rem;
        }
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