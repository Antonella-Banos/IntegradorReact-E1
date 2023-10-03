import {createSlice} from "@reduxjs/toolkit"

const INITIAL_STATE = {
    cartItem: [],
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
    }
})

export const {
    cartToggle
} = carritoSlice.actions

export default carritoSlice.reducer