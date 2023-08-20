import React from "react"
import { ButtonContainer, ProductsContainer, ProductsWrapper } from "./ProductsCardStyles"
import AlbumCard from "./AlbumCard"
import { Button }  from "../../../components/UI/Button/Button"
import { albumesDestacados } from "../../../data/AlbumesDestacados" 

const ProductsCard = () => {
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
           <Button radius='18'>Ver todos</Button>
         </ButtonContainer>
    </ProductsWrapper>
  )
}

export default ProductsCard