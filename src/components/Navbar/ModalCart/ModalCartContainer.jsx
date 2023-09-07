import { CloseButtonStyled, ContainerStyled, MainContainer, ProductsWrapperStyled } from "./ModalCartStyles";
import {AiOutlineClose} from "react-icons/ai"


const ModalCartContainer = () => {
   return (
    <ContainerStyled>

        <CloseButtonContainer>
          <CloseButtonStyled>
            <AiOutlineClose/>
          </CloseButtonStyled>
        </CloseButtonContainer>

        <MainContainer>
          <ProductsWrapperStyled>
            
          </ProductsWrapperStyled>
        </MainContainer>
    </ContainerStyled>
   );
};

export default ModalCartContainer