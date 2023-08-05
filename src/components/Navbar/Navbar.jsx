import React from 'react'
import { AlbumsContainerStyled, HomeContainerStyled, LinkContainerStyled, MenuContainerStyled, NavLinksContainerStyled, NavbarContainerStyled, UserContainerStyled } from './NavbarStyles'

import {motion} from "framer-motion"

import {AiFillHome} from "react-icons/ai"
import {BiSolidAlbum} from "react-icons/bi"
import {FaUser} from "react-icons/fa"
import {SlMenu} from "react-icons/sl"

const Navbar = () => {
  return (
    <NavbarContainerStyled>
        <div>
            <a href="/#"> 
               <img src="https://s3-ap-northeast-1.amazonaws.com/pf-web/fanclubs/15/assets/17/images/ofs_menu.png" alt="Logo" /> 
            </a> 
        </div>
        <NavLinksContainerStyled>
            <HomeContainerStyled>
              <motion.div whileTap={{scale: 0.90}}> 
                <a href="/#">
                   <LinkContainerStyled icons> 
                      <AiFillHome/>
                   </LinkContainerStyled>
                   HOME
                </a>
              </motion.div> 
            </HomeContainerStyled>

            <AlbumsContainerStyled>
              <motion.div whileTap={{scale: 0.90}}>
                <a href="/#">
                  <LinkContainerStyled icons> 
                    <BiSolidAlbum/>
                  </LinkContainerStyled>
                  ÁLBUMES
                </a>
              </motion.div>
            </AlbumsContainerStyled> 

            <UserContainerStyled>
              <motion.div whileTap={{scale: 0.90}}>
                <a href="/#">
                  <LinkContainerStyled icons>
                    <FaUser/>
                  </LinkContainerStyled>
                  INICIAR SESIÓN
                </a>
              </motion.div>
            </UserContainerStyled>  

            <motion.div whileTap={{scale: 0.90}}>
              <MenuContainerStyled icons>
                <SlMenu/>
              </MenuContainerStyled>
            </motion.div>         
        </NavLinksContainerStyled>
    </NavbarContainerStyled>
  )
}

export default Navbar