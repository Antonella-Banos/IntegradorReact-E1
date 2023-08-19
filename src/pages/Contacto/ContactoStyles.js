import styled from "styled-components";
import { StyledButton } from "../../components/UI/Button/ButtonStyles";

export const ContactFormContainer = styled.div`
    max-width: 320px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`;

export const ContactCard = styled.div`
    background: #b4c8ea;
    width: 300px;
    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;

    img {
        width: 100%;
        align-items: center;
    }
`;

export const ContactForm = styled.form`
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
        font-family: 'Nanum Gothic Coding', sans-serif;
        font-size: 1rem;
    }

    & textarea {
        width: 100%;
        border: none;
        outline: none;
        background: #fff;
        color: #444;
        font-family: 'Nanum Gothic Coding', sans-serif;
        font-size: 1rem;
    }
`;

export const ContactFormButton = styled(StyledButton)`
    display: flex;
    justify-content: center;
`;