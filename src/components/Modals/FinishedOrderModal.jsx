import React from 'react';
import { ConfirmationModalContainer, ModalButtonsContainer, ModalMessageText } from './Styles';
import ModalButton from '../UI/ModalButton/ModalButton';


const FinishedOrderModal = () => {

  return (
    <ConfirmationModalContainer>

    <ModalMessageText>
     ¿Desea finalizar su compra?
    </ModalMessageText>

    <ModalButtonsContainer>
        <ModalButton>
         Aceptar
        </ModalButton>
        
        <ModalButton>
         Cancelar 
        </ModalButton>
    </ModalButtonsContainer>

 </ConfirmationModalContainer>
  );
};

export default FinishedOrderModal;
