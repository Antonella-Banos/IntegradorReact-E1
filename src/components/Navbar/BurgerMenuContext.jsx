import { createContext, useEffect, useReducer } from "react";


const Contexto = createContext();

const BurgerMenu = ({children}) => {
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

    useEffect(() => {
        const handleOutsideClick = (event) => {
          const isClickInsideMenu = event.target.closest(".burger-menu");
          if (!isClickInsideMenu) {
            dispatch({ type: "closeBurgerMenu" });
          }
        }; 

        document.addEventListener("click", handleOutsideClick);

        return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
      }, []);

    return(
     <Contexto.Provider value={{state, dispatch}}>
      <div className="burger-menu">{children}</div>
     </Contexto.Provider>
    );
};

export {Contexto, BurgerMenu};