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
                case "closeModalCart": 
                return {
                    ...state,
                    isModalCartOpen: false,
                };    
            default:
                return state; 

        }
    }

    const [state, dispatch] = useReducer(contextReducer, initialState)

    useEffect(() => {
        const handleOutsideClick = (event) => {
          const isClickInsideModalCart = event.target.closest(".modal-cart");
          if (!isClickInsideModalCart) {
            dispatch({ type: "closeModalCart" });
          }
        }; 

        document.addEventListener("click", handleOutsideClick);

        return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
      }, []);

    return(
     <Contexto.Provider value={{state, dispatch}}>
      {children}
     </Contexto.Provider>
    );
};

export {Contexto, ModalCart};