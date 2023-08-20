import React from 'react'
import { ProductsContainer, ProductsWrapper } from '../Home/Productos/ProductsCardStyles'
import { AlbumCard } from '../Home/Productos/AlbumCard'
import { allAlbums } from './data/AllAlbums'

const AllAlbums = () => {
    return (
        <ProductsWrapper>
           <h2>Todos los álbumes</h2>
           <ProductsContainer>
              {
                allAlbums.map((album) => {
                    return <AlbumCard key={album.id} {...album}/>
                })
              }
           </ProductsContainer>
        </ProductsWrapper>
    )
}

export default AllAlbums