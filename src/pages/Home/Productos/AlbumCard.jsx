import React, {useState} from 'react'
import { ProductCard } from './ProductsCardStyles'
import { Button } from "../../../components/UI/Button/Button"
import { useDispatch } from "react-redux"
import { agregarAlCarrito } from '../../../redux/carrito/carritoSlice'
import AddToCartModal from '../../../components/Modals/AddToCartModal'

export const AlbumCard = ({img, title, release, price, category, id}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleAddToCart = () => {
    dispatch(agregarAlCarrito({ img, title, release, price, category, id }));
    handleCloseModal();
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
        onClick={handleOpenModal}
        >Comprar</Button>
        
        <AddToCartModal
        open={isModalOpen}
        onClose={handleCloseModal}
        onAccept={handleAddToCart}
        />
    </ProductCard>
  )
}

export default AlbumCard