export const addAlbumToCart = (cartItems, album) => {
    const albumInCart = cartItems.find((item) => {
      return item.id === album.id 
    })

    if(albumInCart) {
       return cartItems.map((item) => {
          return item.id === albumInCart.id 
          ? {
            ...item,
            quantity: item.quantity + 1
            }
          : item  
        }) 
    } else {
        return [
            ...cartItems,
            {
                ...album,
                quantity: 1
            }
        ]
    }
}

export const removeAlbumFromCart = (cartItems, id) => {
    const albumToRemove = cartItems.find((item) => item.id === id);

    if (albumToRemove.quantity > 1) {
       return cartItems.map((item) => {
           return item.id === albumToRemove.id 
           ? {
              ...item,
              quantity: item.quantity - 1,
             }
           : item
       });
    } else {
      return cartItems.filter((item) => item.id !== albumToRemove.id)
    }
}