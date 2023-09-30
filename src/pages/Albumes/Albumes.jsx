import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductsWrapper } from '../Home/Productos/ProductsCardStyles'
import { AlbumCard } from '../Home/Productos/AlbumCard'
// import { allAlbums } from './data/AllAlbums'
import { CategoriesContainer, CategoriesWrapper } from '../Home/Categorias/CategoriasStyles'
import Category from '../Home/Categorias/Category'
// import { categories } from '../../data/Categories'
import { AlbumsCardContainer } from './AlbumesStyles'
import { selectCategory, clearCategoryFilter } from '../../redux/categorias/categoriasSlice'



const AllAlbums = () => {

    const {albumes} = useSelector((state) => state.albumes)

    const {categorias, selectedCategory} = useSelector((state) => state.categorias) 

    const dispatch = useDispatch(); 

    const handleCategoryClick = (category) => {
      if (selectedCategory && selectedCategory.id === category.id) {
        dispatch(clearCategoryFilter());
      } else {
        dispatch(selectCategory(category));
      }
    };

    const filteredAlbums =
    selectedCategory === null
      ? albumes
      : albumes.filter((album) => album.category === selectedCategory.category);

    return (
        <>
         <ProductsWrapper>
           <h2 style={{marginTop: "6rem", marginBottom: "unset"}}>álbumes</h2>

           <CategoriesWrapper>
            <CategoriesContainer>
            {
               categorias.map((category) => {
                  return <Category key={category.id} 
                  {...category} 
                  selected={category === selectedCategory} 
                  onClick={() => handleCategoryClick(category)}/>
            })
            }
            </CategoriesContainer>
           </CategoriesWrapper>

           <AlbumsCardContainer>
           {
              filteredAlbums.map((album) => {
                  return <AlbumCard key={album.id} {...album} />;
           })
           }
           </AlbumsCardContainer>
        </ProductsWrapper>
        </>
    )
}

export default AllAlbums