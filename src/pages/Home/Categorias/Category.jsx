import React from 'react'
import { CategoriesCard } from './CategoriasStyles'

const Category = ({title}) => {
  return (
    <CategoriesCard whileTap={{scale: 0.90}}>
        <p>{title}</p>
    </CategoriesCard>
  )
}

export default Category