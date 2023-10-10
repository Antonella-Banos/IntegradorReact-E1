import { motion } from "framer-motion";
import { styled } from "styled-components";

export const ModalButtonStyled = styled(motion.button)`
    padding: 0.8rem 2rem;
	outline: none;
	border: none;
	border-radius: 18px;
    background: #ef94bd;
    color: #fff;
    text-transform: uppercase;
    font-family: 'Pathway Gothic One', sans-serif;
    font-size: 20px;
	font-weight: 500;
    letter-spacing: 1.5px;
	cursor: pointer;
`;