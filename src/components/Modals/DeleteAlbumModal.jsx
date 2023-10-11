import React from 'react';
import { ConfirmationModalContainer, ModalButtonsContainer, ModalMessageText } from './Styles';
import ModalButton from '../UI/ModalButton/ModalButton';

const DeleteAlbumModal = ({ onClose, onAccept }) => {

  return (
    <ConfirmationModalContainer>

       <ModalMessageText>
        ¿Quitar álbum del carrito?
       </ModalMessageText>

       <ModalButtonsContainer>
           <ModalButton onClick={() => { onAccept(); onClose(); }}>
            Aceptar
           </ModalButton>
           
           <ModalButton onClick={onClose}>
            Cancelar 
           </ModalButton>
       </ModalButtonsContainer>

    </ConfirmationModalContainer>
  );
};

export default DeleteAlbumModal;
