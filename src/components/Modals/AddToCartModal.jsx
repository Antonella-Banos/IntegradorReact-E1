import React from 'react';
import { ConfirmationModalContainer, ModalButtonsContainer, ModalMessageText } from './Styles';
import ModalButton from '../UI/ModalButton/ModalButton';


const AddToCartModal = ({ onConfirm, onCancel }) => {

  return (
    <ConfirmationModalContainer>

       <ModalMessageText>
        ¿Desea agregar este álbum al carrito?
       </ModalMessageText>

       <ModalButtonsContainer>
           <ModalButton onClick={onConfirm}>
            Aceptar
           </ModalButton>
           
           <ModalButton onClick={onCancel}>
            Cancelar 
           </ModalButton>
       </ModalButtonsContainer>

    </ConfirmationModalContainer>
  );
};

export default AddToCartModal;
