import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductsWrapper } from '../Home/Productos/ProductsCardStyles'
import { AlbumCard } from '../Home/Productos/AlbumCard'
// import { allAlbums } from './data/AllAlbums'
import { CategoriesContainer, CategoriesWrapper } from '../Home/Categorias/CategoriasStyles'
import Category from '../Home/Categorias/Category'
// import { categories } from '../../data/Categories'
import { AlbumsCardContainer } from './AlbumesStyles'
import { filterAlbums } from '../../redux/albumes/albumesSlice'
import { selectCategory } from '../../redux/categorias/categoriasSlice'



const AllAlbums = () => {

    const {albumes, filteredAlbums} = useSelector((state) => state.albumes)

    const {categorias, selectedCategory} = useSelector((state) => state.categorias) 

    const dispatch = useDispatch()

    const handleCategorySelect = (category) => {
       dispatch(selectCategory(category));
       dispatch(filterAlbums());
    };

    return (
        <>
         <ProductsWrapper>
           <h2 style={{marginTop: "6rem", marginBottom: "unset"}}>álbumes</h2>

           <CategoriesWrapper>
            <CategoriesContainer>
            {
               categorias.map((category) => {
                  return <Category key={category.id} {...category} onClick={() => handleCategorySelect(category.category)}/>
            })
            }
            </CategoriesContainer>
           </CategoriesWrapper>

           <AlbumsCardContainer>
              { selectedCategory
              ? filteredAlbums.map((album) => {
                return <AlbumCard key={album.id} {...album}/>
              })
              : albumes.map((album) => {
                    return <AlbumCard key={album.id} {...album}/>
                })
              }
           </AlbumsCardContainer>
        </ProductsWrapper>
        </>
    )
}

export default AllAlbums