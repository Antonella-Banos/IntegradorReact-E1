import { createContext, useReducer } from "react";

const Contexto = createContext();

const ModalCart = ({children}) => {
    const initialState = {
        isModalCartOpen: false,
    }

    const contextReducer = (state, action) => {
        switch (action.type) {
            case "openModalCart":
                return {
                    ...state,
                    isModalCartOpen: !state.isModalCartOpen,
                };
            default:
                return state; 

        }
    }

    const [state, dispatch] = useReducer(contextReducer, initialState)

    return(
     <Contexto.Provider value={{state, dispatch}}>
      {children}
     </Contexto.Provider>
    );
};

export {Contexto, ModalCart};