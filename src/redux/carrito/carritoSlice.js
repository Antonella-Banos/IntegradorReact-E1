import {createSlice} from "@reduxjs/toolkit"
import { addAlbumToCart, removeAlbumFromCart } from "./funciones-del-carrito"

const INITIAL_STATE = {
    cartItems: [],
    closed: true
}


const carritoSlice = createSlice({
    name: 'carrito',
    initialState: INITIAL_STATE,
    reducers: {
        cartToggle: (state) => {
            return {
                ...state,
                closed: !state.closed
            }
        },
        agregarAlCarrito: (state, action) => {
            return {
                ...state,
                cartItems: addAlbumToCart(state.cartItems, action.payload)
            }
        },
        removerDelCarrito: (state, action) => {
            return {
                ...state,
                cartItems: removeAlbumFromCart(state.cartItems, action.payload)
            }
        },
        vaciarCarrito: (state) => {
            return {
                ...state,
                cartItems: []
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