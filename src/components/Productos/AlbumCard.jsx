import React from 'react'
import { ProductCard } from './ProductsCardStyles'
import Button from '../UI/Button/Button'

const AlbumCard = ({img, title, release, price}) => {
  return (
    <ProductCard>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h3>Fecha de lanzamiento</h3>
        <p>{release}</p>
        <h3>Precio</h3>
        <p>${price}</p>
        <Button radius='18'>Comprar</Button>
    </ProductCard>
  )
}

export default AlbumCard