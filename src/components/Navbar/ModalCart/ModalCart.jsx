import { AnimatePresence } from "framer-motion";
import { cartToggle, vaciarCarrito } from "../../../redux/carrito/carritoSlice";
import Button from "../../UI/Button/Button";
import { InvisibleScreen } from "../NavbarStyles";
import ModalCartCard from "./ModalCartCard";
import { CloseButtonStyled, ModalContainerStyled, Divider, ProductsWrapperStyled, TotalPriceContainer, CloseButtonContainer, MainTitleStyled, ButtonContainer } from "./ModalCartStyles";
import {AiOutlineClose} from "react-icons/ai"
import {BiSolidTrashAlt} from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import FinishedOrderModal from "../../Modals/FinishedOrderModal"
import { useState } from "react";


const ModalCart = () => {

   const dispatch = useDispatch();
   const [showFinishedOrderModal, setShowFinishedOrderModal] = useState(false);

   const {cartItems} = useSelector((state) => state.carrito)

   const closedCart = useSelector((state) => state.carrito.closed)

   const precioTotal = cartItems.reduce((acc, item) => {
      return (acc += item.price * item.quantity)
    }, 0);

    const handleFinalizarCompra = () => {
      setShowFinishedOrderModal(true);
    };
  
    const handleCloseModals = () => {
      setShowFinishedOrderModal(false);
      dispatch(cartToggle());
    };

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
     transition={{ type: "tween", duration: 0.7 }}
     >

        <CloseButtonContainer>
          <CloseButtonStyled 
          whileTap={{scale: 0.90}}
          onClick={() => dispatch(cartToggle())}
          >
            <AiOutlineClose/>
          </CloseButtonStyled>
        </CloseButtonContainer>

          
          <MainTitleStyled>
            <h2>Tus álbumes</h2>
          </MainTitleStyled>

          <ProductsWrapperStyled>
            {
              cartItems.length ? (
                cartItems.map((item) => {
                   return <ModalCartCard key={item.id} {...item}/>
                })
              ) : (
                <p>¿No querés comprar un álbum?</p>
              )
            }
            
          </ProductsWrapperStyled>

        <Divider/>
        <TotalPriceContainer>
          <p>Total:</p>
          <span>${precioTotal}</span>
        </TotalPriceContainer>

        <ButtonContainer>

         <Button 
        radius='18'  
        onClick={handleFinalizarCompra}
        >Finalizar compra</Button>

        <Button
        radius='18'
        onClick={() => dispatch(vaciarCarrito())}
        disabled={!cartItems.length}
        >
        <BiSolidTrashAlt/>
        </Button> 
        </ButtonContainer>

        

        {showFinishedOrderModal && (
              <FinishedOrderModal onClose={handleCloseModals} />
        )}
        
     </ModalContainerStyled> 
     )}
    </AnimatePresence>
    </> 
   );
};

export default ModalCart