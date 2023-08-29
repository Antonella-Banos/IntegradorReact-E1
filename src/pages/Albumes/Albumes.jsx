import React from 'react'
import { ProductsContainer, ProductsWrapper } from '../Home/Productos/ProductsCardStyles'
import { AlbumCard } from '../Home/Productos/AlbumCard'
import { allAlbums } from './data/AllAlbums'

function AllAlbums() {
    return (
        <ProductsWrapper>
           <h2 style={{marginTop: "6rem"}}>álbumes</h2>
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