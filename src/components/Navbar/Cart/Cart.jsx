import { FaShoppingCart } from "react-icons/fa";
import { CartContainer } from "../NavbarStyles";
import { useContext } from "react";
import { NavbarContext } from "../NavbarContext";


const Cart = () => {
  
  const { dispatch, setModalCartClass } = useContext(NavbarContext);
  
  const handleCartClick = () => {
    dispatch({ type: 'openCart' });
    setModalCartClass('open');
};
  
  return (
    <CartContainer icon>
        <FaShoppingCart/>
        <span>0</span>
    </CartContainer>
  );
};

export default Cart 