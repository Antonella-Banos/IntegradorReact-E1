import React from 'react'
import { CartContainer, MenuContainerStyled, NavItemsContainerStyled, NavLinksWrapper, NavbarContainerStyled, NavbarWrapper, UserContainer, UserYCartContainer } from './NavbarStyles'
import { links } from './LinksData/LinksData'
import { NavbarLinks } from './NavbarLinks'


import { useContext } from "react" 
import { Contexto } from './BurgerMenuContext'
import {motion} from "framer-motion"

import {FaUser} from "react-icons/fa"
import {FaShoppingCart} from "react-icons/fa"
import {SlMenu} from "react-icons/sl"

const Navbar = () => {
  
  const {state, dispatch} = useContext(Contexto);
  
  return (

    <NavbarWrapper>
      <NavbarContainerStyled>
        <div>
            <a href="/#"> 
               <img src="https://s3-ap-northeast-1.amazonaws.com/pf-web/fanclubs/15/assets/17/images/ofs_menu.png" alt="Logo" /> 
            </a> 
        </div>
        <NavItemsContainerStyled>

        <motion.div whileTap={{scale: 0.90}}> 
              <MenuContainerStyled icon onClick={() => dispatch({ type: "openBurgerMenu" })}>
                <SlMenu/>
                
              <NavLinksWrapper className={state.isBurgerMenuOpen ? "open" : ""}>


              

             </NavLinksWrapper>

              </MenuContainerStyled>
            </motion.div> 


            <UserYCartContainer>
              <motion.div whileTap={{scale: 0.90}}>
                <UserContainer icon>
                 <FaUser/>
                </UserContainer>
              </motion.div>

              <motion.div whileTap={{scale: 0.90}}>
                <CartContainer icon>
                  <FaShoppingCart/> 
                </CartContainer>
              </motion.div>
            </UserYCartContainer>

        </NavItemsContainerStyled>

    </NavbarContainerStyled>
    </NavbarWrapper>
  )
}

export default Navbar