import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { NavbarContext } from '../Navbar/NavbarContext';

const LayoutWrapper = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Layout({children}) {
  return (
    <LayoutWrapper>
        <NavbarContext>
          <Navbar/>
        </NavbarContext>
        {children}
        <Footer/>
    </LayoutWrapper>
  )
}

export default Layout 