import styled from "styled-components";

export const FooterContainer= styled.footer`
    min-height: 35vh;
    color: var(--color-text);
    background-color: var(--color-text2);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
    font-size: 2.5rem;
    font-family: 'Barlow Condensed', sans-serif;

    &>h3 {
        font-family: 'Pacifico', cursive;
        padding:20px 0;
    }
`

export const MediaContainer= styled.div`
    width: 100vw;
    display:flex;
    flex-direction: row;
    justify-content: center;

    @media(max-width: 800px){
        flex-direction:column;
        align-items: center;
    }
`

export const FooterMedia= styled.ul`
    width: 40vw;
    list-style-type:none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border-right: 2px solid var(--primary-color);

    @media(max-width: 800px){
        border-right: none;
        width: 90vw;
    }
`

export const IconFace= styled.a`
    color: var(--color-text);
    font-size:40px;

    &:hover{
      transition: 0.75s;
      color: #4267B2;
    }
`

export const IconTwit= styled.a`
    color: var(--color-text);
    font-size:40px;

    &:hover{
      transition: 0.75s;
      color: #1DA1F2;
    }
`

export const IconInsta= styled.a`
    color: var(--color-text);
    font-size:40px;

    &:hover{
      transition: 0.75s;
      color: #833AB4;
    }
`

export const IconWhats= styled.a`
    color: var(--color-text);
    font-size:40px;

    &:hover{
      transition: 0.75s;
      color: #25D366;
    }
`
export const FooterEndereco= styled.div`
    width: 40vw;
    min-height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 2rem;

    @media(max-width: 800px){
        width: 90vw;
        min-height:10vh;
    }
`