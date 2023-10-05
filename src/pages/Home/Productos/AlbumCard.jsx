import React from 'react'
import { ProductCard } from './ProductsCardStyles'
import { Button } from "../../../components/UI/Button/Button"
import { useDispatch } from "react-redux"
import { agregarAlCarrito } from '../../../redux/carrito/carritoSlice'

export const AlbumCard = ({img, title, release, price, category, id}) => {

  const dispatch = useDispatch();

  return (
    <ProductCard>
        <img src={img} alt={category} />
        <h2>{title}</h2>
        <h3>Fecha de lanzamiento</h3>
        <p>{release}</p>
        <h3>Precio</h3>
        <p>${price}</p>
        <Button 
        radius='18'
        onClick={() => dispatch(agregarAlCarrito({img, title, release, price, category, id}))}
        >Comprar</Button>
    </ProductCard>
  )
}

export default AlbumCard