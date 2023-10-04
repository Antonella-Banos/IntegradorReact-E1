import {combineReducers, configureStore} from "@reduxjs/toolkit"
import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/lib/persistStore"
import storage from "redux-persist/lib/storage"

import categoriesReducer from "./categorias/categoriasSlice"
import albumesReducer from "./albumes/albumesSlice"
import destacadosReducer from "./destacados/destacadosSlice"
import carritoReducer from "./carrito/carritoSlice"

const reducers = combineReducers({
    categorias: categoriesReducer,
    albumes: albumesReducer,
    destacados: destacadosReducer,
    carrito: carritoReducer,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["carrito"]
}

const reducerPersistido = persistReducer(persistConfig, reducers);


export const store = configureStore({
    reducer: reducerPersistido
});

export const persistor = persistStore(store)
