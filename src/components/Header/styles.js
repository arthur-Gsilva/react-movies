import styled from 'styled-components'

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    

    h1 svg{
        margin-bottom: -4px;
    }

    h1 a{
        color: #ccc;
        font-size: 2rem;
        text-transform: uppercase;
    }
`

export const FormArea = styled.form`
    margin-top: 30px;
    border: 2px solid #ccc;
    width: 75vw;
    display: flex;
    align-items: center;
    padding: 15px;
    border-radius: 30px;
    


    input{
        background-color: transparent;
        border: none;
        outline: none;
        color: #ccc;
        flex: 1;
        margin-left: 10px;
    }
`