import React from 'react'
import { useSelector } from 'react-redux'
import { ProductsWrapper } from '../Home/Productos/ProductsCardStyles'
import { AlbumCard } from '../Home/Productos/AlbumCard'
// import { allAlbums } from './data/AllAlbums'
import { CategoriesContainer, CategoriesWrapper } from '../Home/Categorias/CategoriasStyles'
import Category from '../Home/Categorias/Category'
// import { categories } from '../../data/Categories'
import { AlbumsCardContainer, ButtonsContainerStyled } from './AlbumesStyles'
import Button from '../../components/UI/Button/Button'




function AllAlbums() {

    const {albumes} = useSelector((state) => state.albumes)

    const {categorias} = useSelector((state) => state.categorias) 

    // console.log(albumes);

    return (
        <>
         <ProductsWrapper>
           <h2 style={{marginTop: "6rem", marginBottom: "unset"}}>álbumes</h2>

           <CategoriesWrapper>
            <CategoriesContainer>
            {
               categorias.map((category) => {
                  return <Category key={category.id} {...category}/>
            })
            }
            </CategoriesContainer>
           </CategoriesWrapper>

           <AlbumsCardContainer>
              {
                albumes.map((album) => {
                    return <AlbumCard key={album.id} {...album}/>
                })
              }
           </AlbumsCardContainer>
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