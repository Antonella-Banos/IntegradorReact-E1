import React from 'react'
import { ProductsContainer, ProductsWrapper } from '../Home/Productos/ProductsCardStyles'
import { AlbumCard } from '../Home/Productos/AlbumCard'
import { allAlbums } from './data/AllAlbums'
import { CategoriesContainer, CategoriesWrapper } from '../Home/Categorias/CategoriasStyles'
import Category from '../Home/Categorias/Category'
import { categories } from '../../data/Categories'
import { ButtonsContainerStyled } from './AlbumesStyles'
import Button from '../../components/UI/Button/Button'



function AllAlbums() {
    return (
        <>
         <ProductsWrapper>
           <h2 style={{marginTop: "6rem", marginBottom: "unset"}}>álbumes</h2>

           <CategoriesWrapper>
            <CategoriesContainer>
            {
               categories.map((category) => {
                  return <Category key={category.id} {...category}/>
            })
            }
            </CategoriesContainer>
           </CategoriesWrapper>

           <ProductsContainer>
              {
                allAlbums.map((album) => {
                    return <AlbumCard key={album.id} {...album}/>
                })
              }
           </ProductsContainer>
        </ProductsWrapper>
        
        <ButtonsContainerStyled>
           <Button
           radius='18'
           >
            Ver más
           </Button>
           <Button
           radius='18'
           secondary='true'
           >
            Ver menos
            </Button>
        </ButtonsContainerStyled>

        </>
    )
}

export default AllAlbums