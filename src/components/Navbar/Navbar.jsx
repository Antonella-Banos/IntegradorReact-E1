import React from 'react'
import { AboutContainerStyled, AlbumsContainerStyled, CartContainer, ContactContainerStyled, HomeContainerStyled, LinkContainerStyled, 
MenuContainerStyled, NavItemsContainerStyled, NavLinksWrapper, NavbarContainerStyled, NavbarWrapper, UserContainer, UserYCartContainer } from './NavbarStyles'

import {motion} from "framer-motion"


import {FaUser} from "react-icons/fa"
import {FaShoppingCart} from "react-icons/fa"
import {SlMenu} from "react-icons/sl"

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarContainerStyled>
        <div>
            <a href="/#"> 
               <img src="https://s3-ap-northeast-1.amazonaws.com/pf-web/fanclubs/15/assets/17/images/ofs_menu.png" alt="Logo" /> 
            </a> 
        </div>
        <NavItemsContainerStyled>

             <NavLinksWrapper>
             <HomeContainerStyled>
              <motion.div whileTap={{scale: 0.90}}> 
                <a href="/#">
                   <LinkContainerStyled> 
                      HOME
                   </LinkContainerStyled>
                </a>
              </motion.div> 
            </HomeContainerStyled>

            <AlbumsContainerStyled>
              <motion.div whileTap={{scale: 0.90}}>
                <a href="/#">
                  <LinkContainerStyled> 
                    ÁLBUMES
                  </LinkContainerStyled>
                </a>
              </motion.div>
            </AlbumsContainerStyled> 

            <AboutContainerStyled>
              <motion.div whileTap={{scale: 0.90}}>
                <a href="/#">
                  <LinkContainerStyled>
                    STORE
                  </LinkContainerStyled>
                </a>
              </motion.div>
            </AboutContainerStyled>

            <ContactContainerStyled>
              <motion.div whileTap={{scale: 0.90}}>
                <a href="/#">
                  <LinkContainerStyled>
                    CONTACTO
                  </LinkContainerStyled>
                </a>
              </motion.div>
            </ContactContainerStyled>
             </NavLinksWrapper>

            <motion.div whileTap={{scale: 0.90}}>
              <MenuContainerStyled icon>
                <SlMenu/>
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