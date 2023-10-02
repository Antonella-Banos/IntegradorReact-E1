import { FaShoppingCart } from "react-icons/fa";
import { CartContainer } from "../NavbarStyles";



const Cart = () => {
  
  
  return (
    <CartContainer icon>
        <FaShoppingCart/>
        <span>0</span>
    </CartContainer>
  );
};

export default Cart 