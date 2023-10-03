import Button from "../../UI/Button/Button";
import ModalCartCard from "./ModalCartCard";
import { CloseButtonStyled, ModalContainerStyled, Divider, MainProductContainer, ProductsWrapperStyled, TotalPriceContainer, CloseButtonContainer, MainTitleStyled } from "./ModalCartStyles";
import {AiOutlineClose} from "react-icons/ai"


const ModalCart = () => {
   return (
    <>
     <ModalContainerStyled>

        <CloseButtonContainer>
          <CloseButtonStyled whileTap={{scale: 0.90}}>
            <AiOutlineClose/>
          </CloseButtonStyled>
        </CloseButtonContainer>

        <MainProductContainer>
          
          <MainTitleStyled>
            <h2>Tus álbumes</h2>
          </MainTitleStyled>

          <ProductsWrapperStyled>
            <ModalCartCard/>
          </ProductsWrapperStyled>
        </MainProductContainer>

        <Divider/>
        <TotalPriceContainer>
          <p>Total:</p>
          <span>0</span>
        </TotalPriceContainer>

        <Button radius='18'>Finalizar compra</Button>
        
    </ModalContainerStyled> 
    </>
   
   );
};

export default ModalCart