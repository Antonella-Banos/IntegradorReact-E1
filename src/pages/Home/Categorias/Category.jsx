import React from 'react'
import { CategoriesCard } from './CategoriasStyles'

const Category = ({title}) => {
  return (
    <CategoriesCard 
    whileTap={{scale: 0.90}}
    selected={null}
    onClick={(e) => e.preventDefault}
    >
        <p>{title}</p>
    </CategoriesCard>
  )
}

export default Category