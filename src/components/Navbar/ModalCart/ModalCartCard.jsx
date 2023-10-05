import CountButton from "../../UI/CountButton/CountButton";
import Counter from "../../UI/Counter/Counter";
import { AlbumPriceStyled, AlbumTextStyled, AlbumTitleStyled, ProductContainerStyled, QuantityContainerStyled, TextContainerStyled } from "./ModalCartStyles";

import {BsPlusLg} from "react-icons/bs"
import {AiOutlineMinus} from "react-icons/ai"
import { useDispatch } from "react-redux";
import { agregarAlCarrito, removerDelCarrito } from "../../../redux/carrito/carritoSlice";


const ModalCartCard = ({img, title, release, price, category, quantity, id}) => {

  const dispatch = useDispatch();

  return (
    <ProductContainerStyled>
        <img 
        src={img}
        alt={category} />
       <TextContainerStyled>
         <AlbumTitleStyled>{title}</AlbumTitleStyled>
         <AlbumTextStyled>{release}</AlbumTextStyled>
         <AlbumPriceStyled>${price}</AlbumPriceStyled>
       </TextContainerStyled>

       <QuantityContainerStyled>
         <CountButton 
         button
         onClick={() => dispatch(removerDelCarrito(id))}
         >
          <AiOutlineMinus style={{fontSize: "1.2rem"}}/>
         </CountButton>

         <Counter>{quantity}</Counter>

         <CountButton
         onClick={() => dispatch(agregarAlCarrito({img, title, release, price, category, quantity, id}))}
         >
           <BsPlusLg style={{fontSize: "1.2rem"}}/>
         </CountButton>
       </QuantityContainerStyled>
    </ProductContainerStyled>
  );
};

export default ModalCartCard