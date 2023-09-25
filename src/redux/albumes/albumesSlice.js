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
        clearCategoryFilter: (state) => {
            return {
              ...state,
              selectedCategory: null,
            };
          },  
    }
})

export const {
    getAlbums, 
    clearCategoryFilter,
} = albumesSlice.actions


export default albumesSlice.reducer