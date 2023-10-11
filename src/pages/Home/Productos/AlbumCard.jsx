import React, {useState} from 'react'
import { ProductCard } from './ProductsCardStyles'
import { Button } from "../../../components/UI/Button/Button"
import { useDispatch } from "react-redux"
import { agregarAlCarrito } from '../../../redux/carrito/carritoSlice'
import AddToCartModal from '../../../components/Modals/AddToCartModal'


export const AlbumCard = ({img, title, release, price, category, id}) => {
  
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuyButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    dispatch(agregarAlCarrito({ img, title, release, price, category, id }));
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
        onClick={handleBuyButtonClick}
        >Comprar</Button>

        {isModalOpen && <AddToCartModal onConfirm={handleConfirm} onCancel={handleCancel}/>}
        
    </ProductCard>
  )
}

export default AlbumCard