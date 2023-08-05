import React from 'react'
import { FooterContainerStyled, FooterLogoContainerStyled } from './FooterStyles'


const Footer = () => {
  return (
    <FooterContainerStyled>
       <FooterLogoContainerStyled>
         <div>
            <a href="/#">
                <img src="https://s3-ap-northeast-1.amazonaws.com/pf-web/fanclubs/15/assets/17/images/ofs_menu.png" alt="Logo" />
            </a>
         </div>
         <h2>© SEVENTEEN STORE - Todos los derechos reservados</h2>
       </FooterLogoContainerStyled>
    </FooterContainerStyled>
  )
}

export default Footer