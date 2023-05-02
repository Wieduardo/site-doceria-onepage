import styled from "styled-components";

export const ListContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &>input{
        width: 500px;
        height: 50px;
        padding:0px 20px;
        font-family: 'Barlow Condensed', sans-serif;
        border: 2px solid var(--color-secondary);
        border-radius: 5px;
    }
    &>h2{
        color: var(--color-tertiary);
        font-family: 'Pacifico', cursive;
        margin: 10px 0;
    }
`

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    max-height: 85vh;
    flex-wrap: wrap;
    overflow-x: auto;
    gap: 25px 25px;
    list-style-type:none;
    padding: 15px;
    margin:20px 0;
    font-family: 'Barlow Condensed', sans-serif;

    @media(max-width: 800px){
        overflow-y: auto;
        flex-wrap:nowrap;
        min-height:80vh;
        justify-content: space-between;
    }
`;

export const Card = styled.li`
    max-width:22vw;
    min-width:22vw;
    min-height: 40vh;
    border-radius: 10px;
    outline: thick solid var(--color-primary-light);
    color: var(--color-secondary);
    box-shadow: 5px 5px 5px gray;

    &:hover{
        cursor:pointer;
        box-shadow: 5px 5px 5px var(--color-secondary);
        transition: 0.75s;
    }

    &>img{
        max-width:22vw;
        border-radius: 10px;
    }
    @media(max-width: 800px){
        min-width:85vw;
        margin-left:5vw;

        &>img{
            max-width:85vw;
            border-top: 10px
        }
    }
`
export const InfoCard = styled.div`
    padding:10px;
    max-width:20vw;

    @media(max-width: 800px){
        min-width:85vw;
    }
`