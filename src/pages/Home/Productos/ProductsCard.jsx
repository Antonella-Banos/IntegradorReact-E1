import React from "react"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { ButtonContainer, ProductsContainer, ProductsWrapper } from "./ProductsCardStyles"
import AlbumCard from "./AlbumCard"
import { Button }  from "../../../components/UI/Button/Button"
// import { albumesDestacados } from "../../../data/AlbumesDestacados" 
import { useNavigate } from "react-router-dom"

const ProductsCard = () => {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/albumes')
  }

  const {destacados} = useSelector((state) => state.destacados)

  return (
    <ProductsWrapper>
         <h2>Álbumes Destacados</h2>
         <ProductsContainer>
            {
              destacados.map((album) => {
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