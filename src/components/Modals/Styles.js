import { motion } from "framer-motion";
import styled from "styled-components" 


export const ConfirmationModalContainer = styled.div`
  z-index: 1000;
  position: fixed;
  width: 800px;
  max-width: 100%;
  top: -50px;
  left: -50px;
  transform: translate(-50%, -50%);
  padding: 2rem; 
  display: flex;
  align-items: center; 
  justify-content: center;
  border: 3px solid #ef94bd;
  background: #fff;
`;

export const ModalMessageText = styled.h2`
  color: #ef94bd;
  font-size: 1.2rem;
  font-family: 'Pathway Gothic One', sans-serif;
  text-align: center;
`;

export const ModalButtonsContainer = styled.div``;

export const ModalButtons = styled(motion.button)``;