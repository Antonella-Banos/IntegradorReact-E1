import React from 'react';
import { ConfirmationModalContainer, ModalButtonsContainer, ModalMessageText } from './Styles';
import ModalButton from '../UI/ModalButton/ModalButton';


const FinishedOrderModal = ({ onClose }) => {

  const handleAccept = () => {
    onClose();
  };
  const handleCancel = () => {
    onClose();
  }

  return (
    <ConfirmationModalContainer>

    <ModalMessageText>
     ¿Desea finalizar su compra?
    </ModalMessageText>

    <ModalButtonsContainer>
        <ModalButton onClick={handleAccept}>
         Aceptar
        </ModalButton>
        
        <ModalButton onClick={handleCancel}>
         Cancelar 
        </ModalButton>
    </ModalButtonsContainer>

 </ConfirmationModalContainer>
  );
};

export default FinishedOrderModal;
