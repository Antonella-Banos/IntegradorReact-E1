import styled from "styled-components";
import { motion } from "framer-motion";
import { Form } from "formik";


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

export const ContactForm = styled(Form)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px; 
`;

export const Input = styled.input`
    width: 100%;
    height: 35px;
    border-radius: 0.8rem;
    border: none;
    border: 2.5px solid ${(props) => (props.isError ? "red" : "none")};
    outline: none;
    background: #fff;
    font-family: 'Pathway Gothic One', sans-serif;
    font-size: 1.1rem;
    letter-spacing: 0.3px;
    padding-left: 10px;
    align-items: center;
    justify-content: center;

  &:focus {
            border: 2.5px solid #7ca1d5;
        }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 35px;
  border-radius: 0.8rem;
  border: none;
  border: 2.5px solid ${(props) => (props.isError ? "red" : "none")};
  outline: none;
  background: #fff;
  font-family: 'Pathway Gothic One', sans-serif;
  font-size: 1.1rem;
  letter-spacing: 0.3px;
  padding: 10px 0 50px 0; 
  padding-left: 10px;

  &:focus {
            border: 2.5px solid #7ca1d5;
        }
`;

export const FormButton = styled(motion.button)`
    display: flex;
    justify-content: center;
    padding: 0.8rem 2rem;
	outline: none;
	border: none;
	border-radius: 18px;
	background: linear-gradient(100deg, #92a8d1, #f7cac9);
	color: #fff;
	text-transform: uppercase;
    font-family: 'Pathway Gothic One', sans-serif;
    font-size: 20px;
	font-weight: 500;
    letter-spacing: 1.5px;
	cursor: pointer;
    display: flex;
    justify-content: center;
	&:hover {
		opacity: 90%;
	}
    &:focus {
		border: none; 
	} 
`;

export const StyledErrorMessage = styled.p`
  margin: 0;
  margin-top: 5px;
  color: red;
  font-family: 'Pathway Gothic One', sans-serif;
  font-size: 15px;
  letter-spacing: 0.2px;
`;