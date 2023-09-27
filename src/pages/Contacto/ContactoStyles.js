import styled from "styled-components";
// import Button from "../../components/UI/Button/Button";
import FormButton from "../../components/UI/FormButton/FormButton";

export const ContactFormContainer = styled.div`
    max-width: 320px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    margin-top: 11rem;
    margin-bottom: 3rem;
`;

export const ContactCard = styled.div`
    background: #b4c8ea;
    width: 280px;
    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

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
        height: 35px;
        border-radius: 0.8rem;
        border: none;
        outline: none;
        background: #fff;
        color: #444;
        font-family: 'Pathway Gothic One', sans-serif;
        font-size: 1.1rem;
        letter-spacing: 0.3px;

        &::placeholder {
            padding-left: 10px;
        }

        &:focus {
            border: 2.5px solid #7ca1d5;
        }
    }

    & textarea {
        width: 100%;
        border-radius: 0.8rem;
        border: none;
        outline: none;
        background: #fff;
        color: #444;
        font-family: 'Pathway Gothic One', sans-serif;
        font-size: 1.1rem;
        letter-spacing: 0.3px;

        &::placeholder {
            padding-left: 10px;
        } 
        
        &:focus {
            border: 2.5px solid #7ca1d5;
        }
    }
`;

export const ContactFormButton = styled(FormButton)`
    display: flex;
    justify-content: center;
`;