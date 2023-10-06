import {createSlice} from "@reduxjs/toolkit"
import { addAlbumToCart, removeAlbumFromCart } from "./funciones-del-carrito"

const INITIAL_STATE = {
    cartItems: [],
    closed: true,
}


const carritoSlice = createSlice({
    name: 'carrito',
    initialState: INITIAL_STATE,
    reducers: {
        agregarAlCarrito: (state, action) => {
            return {
                ...state,
                cartItems: addAlbumToCart(state.cartItems,action.payload)
            }
        },
        removerDelCarrito: (state, action) => {
            return {
                ...state,
                cartItems: removeAlbumFromCart(state.cartItems,action.payload)
            }
        },
        vaciarCarrito: (state) => {
            return {
                ...state,
                cartItems: []
            }
        },
        cartToggle: (state) => {
            return {
                ...state,
                closed: !state.closed
            }
        }
    }
})

export const {
    cartToggle,
    agregarAlCarrito,
    removerDelCarrito,
    vaciarCarrito
} = carritoSlice.actions

export default carritoSlice.reducer