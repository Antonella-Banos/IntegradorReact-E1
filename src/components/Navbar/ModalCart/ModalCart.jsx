import { AnimatePresence } from "framer-motion";
import { cartToggle } from "../../../redux/carrito/carritoSlice";
import Button from "../../UI/Button/Button";
import { InvisibleScreen } from "../NavbarStyles";
import ModalCartCard from "./ModalCartCard";
import { CloseButtonStyled, ModalContainerStyled, Divider, MainProductContainer, ProductsWrapperStyled, TotalPriceContainer, CloseButtonContainer, MainTitleStyled } from "./ModalCartStyles";
import {AiOutlineClose} from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"

const ModalCart = () => {

   const dispatch = useDispatch();

   const closedCart = useSelector((state) => state.carrito.closed)

   return (
    <>
     {!closedCart && (
       <InvisibleScreen
       onClick={() => dispatch(cartToggle())}
       isClosed={closedCart}
       />
     )}

    <AnimatePresence>
     {!closedCart && (
     <ModalContainerStyled
     key="modal-del-carrito"
     initial={{ translateX: 500 }}
     animate={{ translateX: 0 }}
     exit={{ translateX: 500 }}
     transition={{ type: "tween", duration: 0.9 }}
     >

        <CloseButtonContainer>
          <CloseButtonStyled 
          whileTap={{scale: 0.90}}
          onClick={() => dispatch(cartToggle())}
          >
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

        <Button 
        radius='18'
        onClick={() => dispatch(cartToggle())}
        >Finalizar compra</Button>
        
     </ModalContainerStyled> 
     )}
    </AnimatePresence>
    </> 
   );
};

export default ModalCart