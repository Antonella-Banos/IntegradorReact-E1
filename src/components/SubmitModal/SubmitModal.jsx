import React from 'react';
import { ConfirmationModalContainer, ModalButtonsContainer, ModalMessageText } from '../Modals/Styles';
import ModalButton from '../UI/ModalButton/ModalButton';


  const SuccessfulDataModal = () => {

    return (
      <ConfirmationModalContainer>

         <ModalMessageText>
          Datos cargados correctamente
         </ModalMessageText>

         <ModalButtonsContainer>
           <ModalButton>
            Cerrar
           </ModalButton>
         </ModalButtonsContainer>
      </ConfirmationModalContainer>
    );
  }

  export default SuccessfulDataModal;

