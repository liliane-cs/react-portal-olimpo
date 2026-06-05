import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    justify-content: center;
`
export const SessaoCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:  #0d0d1a;
    padding: 2rem;

    h1 {
        color: #d4a017;
        font-size: 3rem;
        margin-bottom: 2rem;
    }

    input {
    padding: 0.5rem 1rem;
    border: 1px solid #d4a017;
    border-radius: 0.5rem;
    background-color: #0d0d1a;
    color: #f0e6c8;
    font-size: 1rem;
    width: 20rem;
    margin-bottom: 1rem;
}
`