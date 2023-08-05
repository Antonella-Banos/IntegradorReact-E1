import React from 'react'
import { ButtonContainer, ProductsContainer, ProductsWrapper } from './ProductsCardStyles'
import { albumesDestacados } from '../../data/AlbumesDestacados'
import AlbumCard from './AlbumCard'
import Button from '../UI/Button/Button'

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
          <Button radius='18'>Ver todos </Button>
        </ButtonContainer>
    </ProductsWrapper>
  )
}

export default ProductsCard