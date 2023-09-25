import { createSlice } from "@reduxjs/toolkit";
import { allAlbums } from "../../data/AllAlbums";

const INITIAL_STATE = {
    albumes: allAlbums,
}

export const albumesSlice = createSlice({
    name: "albumes",
    initialState: INITIAL_STATE,
    reducers: {
        getAlbums: state => {
            return state
        },
        filterAlbums: (state, action)  => {
            const { selectedCategory } = state.categorias;
            const filteredAlbums = selectedCategory
              ? state.albumes.filter((album) => album.category === selectedCategory)
              : state.albumes;
            return { ...state, filteredAlbums };
        }    
    }
})

export const {
    getAlbums, 
    filterAlbums,
} = albumesSlice.actions


export default albumesSlice.reducer