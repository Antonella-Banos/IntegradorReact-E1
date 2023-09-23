import React from 'react'
import { CartBubble, MenuContainer, MenuStyled, NavLinks, NavLinksWrapper, NavbarContainerStyled, NavbarWrapper, UserContainer, UserYCartContainer } from './NavbarStyles'

import { useContext } from "react" 
import { Contexto } from './BurgerMenuContext'

import {FaUser} from "react-icons/fa"
// import {FaShoppingCart} from "react-icons/fa"
import {SlMenu} from "react-icons/sl"
import Cart from './Cart/Cart'


const Navbar = () => {
  
  const {state, dispatch} = useContext(Contexto);
  
  return (

    <NavbarWrapper>
      <NavbarContainerStyled>
        
        <img src="https://s3-ap-northeast-1.amazonaws.com/pf-web/fanclubs/15/assets/17/images/ofs_menu.png" alt="Logo" /> 

          <MenuStyled>
            <MenuContainer icon onClick={() => dispatch({ type: "openBurgerMenu" })}> 
              <SlMenu/> 
            </MenuContainer>

            <NavLinksWrapper className={state.isBurgerMenuOpen ? "open" : "close"}> 

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

                <CartBubble>
                 <Cart/>
                </CartBubble>

            </UserYCartContainer>

    </NavbarContainerStyled>
    </NavbarWrapper>
  )
}

export default Navbar