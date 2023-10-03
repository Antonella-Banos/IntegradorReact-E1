import { FaShoppingCart } from "react-icons/fa";
import { CartContainer } from "../NavbarStyles";
import { useDispatch } from "react-redux";
import { cartToggle } from "../../../redux/carrito/carritoSlice";


const Cart = () => {
  
  const dispatch = useDispatch()
  
  return (
    <CartContainer icon onClick={() => dispatch(cartToggle())}>
        <FaShoppingCart/>
        <span>0</span>
    </CartContainer>
  );
};

export default Cart 