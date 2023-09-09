import Button from "../../UI/Button/Button";
import { CloseButtonStyled, ModalContainerStyled, Divider, MainProductContainer, ProductsWrapperStyled, TotalPriceContainer } from "./ModalCartStyles";
import {AiOutlineClose} from "react-icons/ai"


const ModalCartContainer = () => {
   return (
    <ModalContainerStyled>

        <CloseButtonContainer>
          <CloseButtonStyled>
            <AiOutlineClose/>
          </CloseButtonStyled>
        </CloseButtonContainer>

        <MainProductContainer>
          <ProductsWrapperStyled>
            
          </ProductsWrapperStyled>
        </MainProductContainer>

        <Divider/>
        <TotalPriceContainer>
          <p>Total:</p>
          <span>0</span>
        </TotalPriceContainer>

        <Button radius='18'>Finalizar compra</Button>
        
    </ModalContainerStyled>
   );
};

export default ModalCartContainer