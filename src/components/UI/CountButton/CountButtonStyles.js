import styled from "styled-components";
import { motion } from "framer-motion";

export const CountButtonStyled = styled(motion.button)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: ${(props) => (props.color ? "#f7cac9" : "linear-gradient(100deg, #92a8d1, #f7cac9)")};
    border: none;
    border-radius: 1rem;
    font-size: 1rem;
    font-weight: 800;
    color: white;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

