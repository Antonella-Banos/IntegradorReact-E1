import React from 'react';
import { ConfirmationModalContainer, ModalButtonsContainer, ModalMessageText } from './Styles';
import ModalButton from '../UI/ModalButton/ModalButton';


const AddToCartModal = () => {

  return (
    <ConfirmationModalContainer>

       <ModalMessageText>
        ¿Desea agregar este álbum al carrito?
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

export default AddToCartModal;
