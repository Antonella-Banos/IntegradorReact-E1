import React from "react"
import { CategoriesContainer, CategoriesWrapper } from "./CategoriasStyles"
import { categories } from "../../../data/Categories"
import Category from "Category"

const Categorias = () => {
  return (
    <CategoriesWrapper>
        <h2>Categorias</h2>
      <CategoriesContainer>
        {
          categories.map((category) => {
             return <Category key={category.id} {...category}/>
          })
        }
      </CategoriesContainer>
    </CategoriesWrapper>
  )
}

export default Categorias 