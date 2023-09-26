import { createContext, useContext, useEffect, useState } from "react";


const NavbarContext = createContext();

export const useNavbarContext = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }) => {
    const [burgerMenuClass, setBurgerMenuClass] = useState('close');
    const [cartClass, setCartClass] = useState('close'); 


    const closeNavbar = () => {
        setBurgerMenuClass('close');
        setCartClass('close'); 
    }

    useEffect(() => {
        const handleClickOutside = () => {
            if (burgerMenuClass === 'open' || cartClass === 'open') {
                closeNavbar();
            }
        };

        document.addEventListener('click', handleClickOutside); 

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [burgerMenuClass, cartClass]);

    return (
        <NavbarContext.Provider value={{ burgerMenuClass, cartClass, setBurgerMenuClass, setCartClass, closeNavbar}}>
          {children} 
        </NavbarContext.Provider>
    ); 
}; 

export {NavbarContext, useNavbarContext, NavbarProvider} 