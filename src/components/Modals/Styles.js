import styled from "styled-components" 

export const ConfirmationModalContainer = styled.div`
  z-index: 1000;
  position: fixed;
  width: 320px;
  max-width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem; 
  display: flex;
  align-items: center; 
  justify-content: center;
  flex-direction: column;
  border: 3px solid #ef94bd;
  background: #fff;
  gap: 1rem;
`;

export const ModalMessageText = styled.h2`
  font-size: 1.2rem;
  font-family: 'Pathway Gothic One', sans-serif;
  text-align: center;
  color: #ef94bd;
  -webkit-text-fill-color: #ef94bd;
`;

export const ModalButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;
