import React from 'react'
import { CartContainer, MenuContainer, MenuStyled, NavLinks, NavLinksWrapper, NavbarContainerStyled, NavbarWrapper, UserContainer, UserYCartContainer } from './NavbarStyles'

import { useContext } from "react" 
import { Contexto } from './BurgerMenuContext'

import {FaUser} from "react-icons/fa"
import {FaShoppingCart} from "react-icons/fa"
import {SlMenu} from "react-icons/sl"


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

            <NavLinksWrapper className={state.isBurgerMenuOpen ? "open" : ""}> 

            <NavLinks>Home</NavLinks>
            <NavLinks>Álbumes</NavLinks>
            <NavLinks>Store</NavLinks>
            <NavLinks>Contacto</NavLinks>

            </NavLinksWrapper>
          </MenuStyled>
            
            <UserYCartContainer>
                <UserContainer icon>
                 <FaUser/>
                </UserContainer>

                <CartContainer icon>
                 <FaShoppingCart/> 
                </CartContainer>
            </UserYCartContainer>

    </NavbarContainerStyled>
    </NavbarWrapper>
  )
}

export default Navbar