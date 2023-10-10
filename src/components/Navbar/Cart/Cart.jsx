import { FaShoppingCart } from "react-icons/fa";
import { CartContainer } from "../NavbarStyles";
import { useDispatch, useSelector } from "react-redux";
import { cartToggle } from "../../../redux/carrito/carritoSlice";


const Cart = () => {
  const totalCartItems = useSelector((state) => state.carrito.cartItems).reduce((acc, item) => (acc += item.quantity), 0)
  
  const dispatch = useDispatch()
  
  return (
    <CartContainer icon onClick={() => dispatch(cartToggle())}>
        <FaShoppingCart/>
        <span>{totalCartItems}</span>
    </CartContainer>
  );
};

export default Cart 