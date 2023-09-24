import { createSlice } from "@reduxjs/toolkit";
import { albumesDestacados } from "../../data/AlbumesDestacados";

const INITIAL_STATE = {
    destacados: albumesDestacados,
}

export const destacadosSlice = createSlice({
    name: "destacados",
    initialState: INITIAL_STATE,
    reducers: {
        getDestacados: state => {
            return state
        }
    }

})

export const {
    getDestacados
} = destacadosSlice.actions

export default destacadosSlice.reducer 