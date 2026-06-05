import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color:  #0d0d1a;
    color: #f0e6c8;
    padding: 2rem;
    gap: 2rem;
    min-height: 100vh;

    img {
    width: 35rem;
    border-radius: 0.5rem;
    align-self: stretch;
    object-fit: cover;
}
        h2 {
        color: #d4a017;
        font-size: 2rem;
        margin-top: 1.5rem;
        border-bottom: 1px solid #d4a017;
        padding-bottom: 0.5rem;
    }
`

export const Nome = styled.h1`
    color: #d4a017;
    font-size: 5rem;
`

export const Descricao = styled.p`
    font-size: 1.2rem;
    margin-top:1.5rem;
    line-height: 1.6;
`
export const InfoEspecial = styled.div`
    background-color: #0d0d1a;
    border: 1px solid #d4a017;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    width: fit-content;
    `

