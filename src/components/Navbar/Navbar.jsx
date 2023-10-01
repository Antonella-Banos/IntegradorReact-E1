import React from 'react'
import { CartBubble, MenuContainer, MenuStyled, NavLinks, NavLinksWrapper, NavbarContainerStyled, NavbarWrapper, UserContainer, UserYCartContainer } from './NavbarStyles'

import { useContext } from "react" 
import { NavbarContext } from './NavbarContext'
import {FaUser} from "react-icons/fa"
import {SlMenu} from "react-icons/sl"
import Cart from './Cart/Cart'
import ModalCart from './ModalCart/ModalCart'


const Navbar = () => {
  
  const {state, dispatch, setModalCartClass} = useContext(NavbarContext);

  const handleMenuClick = () => {
    dispatch({ type: 'openBurgerMenu' });
    setModalCartClass('close'); // cierra el modal del carrito al abrir el menú
  };

  const handleCartClick = () => {
    dispatch({ type: 'closeBurgerMenu' }); // cierra el menú hamburguesa al abrir el carrito
    setModalCartClass(state.cartClass === 'open' ? 'close' : 'open'); // toggle modal del carrito
  };
  
  return (

    <NavbarWrapper>
      <NavbarContainerStyled>
        
        <img src="https://s3-ap-northeast-1.amazonaws.com/pf-web/fanclubs/15/assets/17/images/ofs_menu.png" alt="Logo" /> 

          <MenuStyled>
            <MenuContainer icon onClick={handleMenuClick}> 
              <SlMenu/> 
            </MenuContainer>

            <NavLinksWrapper className={state.burgerMenuClass}> 

            <NavLinks to='/'>Home</NavLinks>
            <NavLinks to='/albumes'> Álbumes</NavLinks>
            <NavLinks to='/store'>Store</NavLinks>
            <NavLinks to='/contacto'>Contacto</NavLinks>

            </NavLinksWrapper>
          </MenuStyled>
            
            <UserYCartContainer>
                <UserContainer icon>
                 <FaUser/>
                </UserContainer>

                <CartBubble onClick={handleCartClick}>
                 <Cart /> 
                </CartBubble>

                <ModalCart/>

            </UserYCartContainer>

    </NavbarContainerStyled>
    </NavbarWrapper>
  )
}

export default Navbar