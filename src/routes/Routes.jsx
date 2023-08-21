import React from 'react'
import { BrowserRouter, Routes as ReactDomRoutes, Route } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import Home from '../pages/Home/Home'
import Albumes from '../pages/Albumes/Albumes'
import Nosotros from '../pages/Nosotros/Nosotros'
import Contacto from '../pages/Contacto/Contacto'


const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ReactDomRoutes>
          <Route path='/' element={<Home/>}/>
          <Route path='albumes' element={<Albumes/>}/>
          <Route path='store' element={<Nosotros/>}/>
          <Route path='contacto' element={<Contacto/>}/>

          <Route path='*' element={ <h2>Página no encontrada</h2> }/>

        </ReactDomRoutes>
      </Layout> 
    </BrowserRouter>
  )
}

export default Routes