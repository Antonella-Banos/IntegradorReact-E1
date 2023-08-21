import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { BurgerMenu } from '../Navbar/BurgerMenuContext';

const LayoutWrapper = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentContainer = styled.div``;

const Layout = ({children}) => {
  return (
    <LayoutWrapper>
        <BurgerMenu>
          <Navbar/>
        </BurgerMenu>
       {children}
        <Footer/>
    </LayoutWrapper>
  )
}

export default Layout 