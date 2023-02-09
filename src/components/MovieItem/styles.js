import styled from "styled-components";

export const Container = styled.div`
    background-color: #111;
    padding: 10px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    svg{
        color: yellow;
    }


    a{
        
        text-align: center;
        margin-top: 1rem;
        background-color: yellow;
        border-radius: 10px;
        padding: 10px;
        font-size: 1.1rem;
        
        font-family: sans-serif;
        color: #222;
        transition: .3s;


        &:hover{
            opacity: .7;
        }
    }
`
