import styled from "styled-components";
import { motion } from "framer-motion";

export const CountButtonStyled = styled(motion.button)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: linear-gradient(100deg, #92a8d1, #f7cac9);
    border: 0.1px solid #f7cac9;
    border-radius: 0.5rem;
    font-size: 0.8rem;
    font-weight: 800;
    color: white;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

