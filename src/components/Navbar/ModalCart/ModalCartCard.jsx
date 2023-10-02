import CountButton from "../../UI/CountButton/CountButton";
import Counter from "../../UI/Counter/Counter";
import { AlbumPriceStyled, AlbumTextStyled, AlbumTitleStyled, ProductContainerStyled, QuantityContainerStyled, TextContainerStyled } from "./ModalCartStyles";

import {BsPlusLg} from "react-icons/bs"
import {AiOutlineMinus} from "react-icons/ai"


const ModalCartCard = () => {
  return (
    <ProductContainerStyled>
        <img 
        src="https://pledis.co.kr/_data/file/bbsData/d53b65d4bc5928fe1674c6d504d2d9bd.png" 
        alt="album" />
       <TextContainerStyled>
         <AlbumTitleStyled></AlbumTitleStyled>
         <AlbumTextStyled></AlbumTextStyled>
         <AlbumPriceStyled></AlbumPriceStyled>
       </TextContainerStyled>

       <QuantityContainerStyled>
         <CountButton button>
          <AiOutlineMinus style={{fontSize: "1.2rem"}}/>
         </CountButton>

         <Counter>0</Counter>

         <CountButton>
           <BsPlusLg style={{fontSize: "1.2rem"}}/>
         </CountButton>
       </QuantityContainerStyled>
    </ProductContainerStyled>
  );
};

export default ModalCartCard