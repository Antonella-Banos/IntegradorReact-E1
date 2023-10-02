import { createContext, useReducer } from "react";


export const Contexto = createContext();

export const BurgerMenu = ({children}) => {
    const initialState = {
        isBurgerMenuOpen: false,
    }

   const contextReducer = (state, action) => {
    switch (action.type) {
        case "openBurgerMenu":
            return {
                ...state,
                isBurgerMenuOpen: !state.isBurgerMenuOpen,
            };
        case "closeBurgerMenu":
            return {
                ...state,
                isBurgerMenuOpen: false,
            };
        default:
            return state;    
    }
}; 

const [state, dispatch] = useReducer(contextReducer, initialState) 

return(
 <Contexto.Provider value={{state, dispatch}}>
     {children}
 </Contexto.Provider>
);
}

export default {Contexto, BurgerMenu}