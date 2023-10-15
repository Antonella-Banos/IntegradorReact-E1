import React from 'react';
import { ConfirmationModalContainer, ModalButtonsContainer, ModalMessageText } from '../Modals/Styles';
import ModalButton from '../UI/ModalButton/ModalButton';


  const SuccessfulDataModal = ({ closeModal }) => {

    return (
      <ConfirmationModalContainer>

         <ModalMessageText>
          Datos cargados correctamente
         </ModalMessageText>

         <ModalButtonsContainer>
           <ModalButton onClick={closeModal}>
            Cerrar
           </ModalButton>
         </ModalButtonsContainer>
      </ConfirmationModalContainer>
    );
  }

  export default SuccessfulDataModal;

