import styled from "styled-components";

export const ContactFormContainer = styled.div`
    max-width: 320px;
    margin: 0 auto;

`;

export const ContactCard = styled.div`
    background: #b4c8ea;
    width: 300px;
    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
`;

export const ContactForm = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;

    & input {
        width: 100%;
        border: none;
        outline: none;
        background: #fff;
        color: #444;
    }
`;

export const ContactFormButton = styled.div`
    display: flex;
    justify-content: center;
`;