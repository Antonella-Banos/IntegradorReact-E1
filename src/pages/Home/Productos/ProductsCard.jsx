import React from "react"
import { ButtonContainer, ProductsContainer, ProductsWrapper } from "./ProductsCardStyles"
import AlbumCard from "./AlbumCard"
import { Button }  from "../../../components/UI/Button/Button"
import { albumesDestacados } from "../../../data/AlbumesDestacados" 
import { useNavigate } from "react-router-dom"

const ProductsCard = () => {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/albumes')
  }
  return (
    <ProductsWrapper>
         <h2>Álbumes Destacados</h2>
         <ProductsContainer>
            {
              albumesDestacados.map((album) => {
                return <AlbumCard key={album.id} {...album}/>
              })
            } 
         </ProductsContainer>
         <ButtonContainer>
           <Button 
           radius='18'
           onClick={handleClick}
           >Ver todos</Button>
         </ButtonContainer>
    </ProductsWrapper>
  )
}

export default ProductsCard