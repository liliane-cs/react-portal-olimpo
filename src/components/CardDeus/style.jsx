import styled from "styled-components";

export const Card = styled.div`
    background-color: #1a1a2e;
    border: 1px solid gold;
    border-radius: 0.5rem;
    padding: 1rem;
    margin: 0.5rem;
    color: #f0e6c8;
    width: 11.25rem;
    text-align: center;
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.5);

    img {
        width: 100%;
        height: 10.625rem;
        object-fit: cover;
    }

    button {
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #d4a017;
    color: #1a1a2e;
    font-weight: bold;
    cursor: pointer;
    width: 100%;
}
`

