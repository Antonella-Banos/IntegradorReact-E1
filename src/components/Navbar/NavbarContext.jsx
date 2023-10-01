import { createContext, useContext, useEffect, useState } from "react";


const NavbarContext = createContext();

const useNavbarContext = () => useContext(NavbarContext);

const NavbarProvider = ({ children }) => {
    const [burgerMenuClass, setBurgerMenuClass] = useState('close');
    const [cartClass, setCartClass] = useState('close'); 
    const [modalCartClass, setModalCartClass] = useState('close');


    const closeNavbar = () => {
        setBurgerMenuClass('close');
        setCartClass('close'); 
        setModalCartClass('close');
    }

    useEffect(() => {
        const handleClickOutside = () => {
            if (burgerMenuClass === 'open' || cartClass === 'open' || modalCartClass === 'open') {
                closeNavbar();
            }
        };

        document.addEventListener('click', handleClickOutside); 

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [burgerMenuClass, cartClass, modalCartClass]);

    return (
        <NavbarContext.Provider value={{ burgerMenuClass, cartClass, modalCartClass, setBurgerMenuClass, setCartClass, setModalCartClass, closeNavbar}}>
          {children} 
        </NavbarContext.Provider>
    ); 
}; 

export {NavbarContext, useNavbarContext, NavbarProvider} 