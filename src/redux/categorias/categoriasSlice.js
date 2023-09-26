import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/Categories";

const INITIAL_STATE = {
    categorias: categories,
    selectedCategory: null
}

export const categoriasSlice = createSlice({
    name: "categorias",
    initialState: INITIAL_STATE,
    reducers: {
        selectCategory : (state, action) => {
          return {
            ...state,
            selectedCategory: action.payload !== state.selectedCategory ? 
            action.payload : null,
          };
        },
        clearCategoryFilter: (state) => {
          return {
            ...state,
            selectedCategory: null,
          };
        },
    }
})

export const {
    selectCategory,
    clearCategoryFilter, 
} = categoriasSlice.actions


export default categoriasSlice.reducer