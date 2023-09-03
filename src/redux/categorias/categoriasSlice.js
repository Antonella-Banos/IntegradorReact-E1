import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/Categories";

const INITIAL_STATE = {
    categorias: categories,
}

export const categoriasSlice = createSlice({
    name: "categorias",
    initialState: INITIAL_STATE,
    reducers: {
        getCategorias: state => {
            return state
        }
    }
})

export const {
    getCategorias
} = categoriasSlice.actions


export default categoriasSlice.reducer