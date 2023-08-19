import React from 'react'
import AlbumCard from '../../components/Productos/AlbumCard'
import { ProductsContainer, ProductsWrapper } from '../../components/Productos/ProductsCardStyles'
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