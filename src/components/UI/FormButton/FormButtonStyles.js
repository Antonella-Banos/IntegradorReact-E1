import { styled } from "styled-components";
import { motion } from "framer-motion";

export const FormButton = styled(motion.button)`
    padding: 0.8rem 2rem;
	outline: none;
	border: none;
	border-radius: ${({ radius }) => `${radius}px`};
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
	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
`;