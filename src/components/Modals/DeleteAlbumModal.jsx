import React from 'react';
import { ConfirmationModalContainer, ModalButtonsContainer, ModalMessageText } from './Styles';
import ModalButton from '../UI/ModalButton/ModalButton';

const DeleteAlbumModal = ({ onAccept, onCancel }) => {

  return (
    <ConfirmationModalContainer>

       <ModalMessageText>
        ¿Quitar álbum del carrito?
       </ModalMessageText>

       <ModalButtonsContainer>
           <ModalButton onClick={onAccept}>
            Aceptar
           </ModalButton>
           
           <ModalButton onClick={onCancel}>
            Cancelar 
           </ModalButton>
       </ModalButtonsContainer>

    </ConfirmationModalContainer>
  );
};

export default DeleteAlbumModal;
