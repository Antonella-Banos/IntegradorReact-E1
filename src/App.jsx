import Navbar from "./components/Navbar/Navbar"
import Layout from "./components/Layout/Layout"
import Hero from "./components/Hero/Hero"
import Categorias from "./components/Categorias/Categorias"
import ProductsCard from "./components/Productos/ProductsCard"
import Footer from "./components/Footer/Footer"
import { BurgerMenu } from "./components/Navbar/BurgerMenuContext"

function App() {
  
  return (
    <>
     <BurgerMenu>
      <Navbar/>
     </BurgerMenu>
    <Layout>
      <Hero/>
      <Categorias/>
      <ProductsCard/>
    </Layout>
    <Footer/>
    </>
  )
}

export default App
