import fundoPortal from "../../assets/fundo-portal.png"
import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-image: url(${fundoPortal});
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    color: #f0e6c8;
    padding: 6rem 2rem;
   

    h1 {
        color: #d4a017;
        font-size: 3rem;
        text-shadow: 2px 2px 8px rgba(0,0,0,0.9);
        margin-bottom: 1rem;
    }

    h3 {
        min-width: 37rem;
        font-size: 1.2rem;
        text-shadow: 2px 2px 8px rgba(0,0,0,0.9);
        margin-bottom: 2rem;
    }

    button {
        padding: 0.8rem 2rem;
        border: none;
        border-radius: 0.5rem;
        background-color: #d4a017;
        color: #1a1a2e;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
    }
`
