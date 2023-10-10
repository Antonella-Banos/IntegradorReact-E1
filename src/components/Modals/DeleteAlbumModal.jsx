import React from 'react';
import { ConfirmationModalContainer, ModalButtonsContainer, ModalMessageText } from './Styles';
import ModalButton from '../UI/ModalButton/ModalButton';

const DeleteAlbumModal = () => {

  return (
    <ConfirmationModalContainer>

       <ModalMessageText>
        ¿Quitar álbum del carrito?
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

export default DeleteAlbumModal;
