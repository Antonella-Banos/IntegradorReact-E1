import { FaShoppingCart } from "react-icons/fa";
import { UserContainer } from "../NavbarStyles";



const Cart = () => {
  return (
    <UserContainer>
        <FaShoppingCart/>
        <span>0</span>
    </UserContainer>
  );
};

export default Cart 