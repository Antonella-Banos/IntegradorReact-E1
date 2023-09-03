import { createSlice } from "@reduxjs/toolkit";
import { allAlbums } from "../../pages/Albumes/data/AllAlbums";

const INITIAL_STATE = {
    albumes: allAlbums,
}

export const albumesSlice = createSlice({
    name: "albumes",
    initialState: INITIAL_STATE,
    reducers: {
        getAlbums: state => {
            return state
        }
    }
})

export const {
    getAlbums
} = albumesSlice.actions


export default albumesSlice.reducer