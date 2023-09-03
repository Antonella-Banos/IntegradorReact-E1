import React from "react"
import { useSelector } from "react-redux"
import { CategoriesContainer, CategoriesWrapper } from "./CategoriasStyles"
// import { categories } from "../../../data/Categories"
import Category from "./Category"

const Categorias = () => {

  const {categorias} = useSelector((state) => state.categorias) 

  return (
    <CategoriesWrapper>
        <h2>Categorias</h2>
      <CategoriesContainer>
        {
          categorias.map((category) => {
             return <Category key={category.id} {...category}/>
          })
        }
      </CategoriesContainer>
    </CategoriesWrapper>
  )
}

export default Categorias 