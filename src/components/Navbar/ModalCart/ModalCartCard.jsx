import CountButton from "../../UI/CountButton/CountButton";
import Counter from "../../UI/Counter/Counter";
import { AlbumPriceStyled, AlbumTextStyled, AlbumTitleStyled, ProductContainerStyled, QuantityContainerStyled, TextContainerStyled } from "./ModalCartStyles";

import {BsPlusLg} from "react-icons/bs"
import {AiOutlineMinus} from "react-icons/ai"


const ModalCartCard = () => {
  return (
    <ProductContainerStyled>
        <img 
        src="" 
        alt="" />
       <TextContainerStyled>
         <AlbumTitleStyled></AlbumTitleStyled>
         <AlbumTextStyled></AlbumTextStyled>
         <AlbumPriceStyled></AlbumPriceStyled>
       </TextContainerStyled>

       <QuantityContainerStyled>
         <CountButton color>
          <AiOutlineMinus/>
         </CountButton>

         <Counter></Counter>

         <CountButton>
           <BsPlusLg/>
         </CountButton>
       </QuantityContainerStyled>
    </ProductContainerStyled>
  );
};

export default ModalCartCard