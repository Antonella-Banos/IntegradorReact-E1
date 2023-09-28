import styled from "styled-components";
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
    width: 270px;
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
`;

export const ContactFormButton = styled(FormButton)`
    display: flex;
    justify-content: center;
`;