import React from 'react'
import { CategoriesCard } from './CategoriasStyles'

const Category = ({title, selected, onClick}) => {
  return (
    <CategoriesCard 
    whileTap={{scale: 0.90}}
    selected={selected}
    onClick={onClick}
    >
        <p>{title}</p>
    </CategoriesCard>
  )
}

export default Category