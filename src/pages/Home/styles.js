import styled from "styled-components";

export const Container = styled.div`


    h2{
        margin: 2.5rem 0;
        text-align: center;
        font-size: 2rem;
        text-transform: uppercase;
        font-family: sans-serif;
    }

    h3{
        font-size: 1.5rem;
    }

    #query{
        color: yellow;
    }
`

export const MoviesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.8rem;


    @media(max-width: 900px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 600px){
        grid-template-columns: 1fr;
    }
`