import styled from "styled-components";

export const NavbarWrapper = styled.header`
    width: 100%;
    position: fixed;
    z-index: 2;
`;

export const NavbarContainerStyled = styled.nav`
    height: 80px;
    background-color: #7ca1d5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    top: 0;

    @media (max-width: 768px) {
        padding: 1rem 2rem;

        img {
            height: 82px;
        }
    }

    @media (max-width: 320px) {
        padding: 1rem 1.2rem;

        img {
            height: 75px;
        }
    }
`;

export const MenuStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MenuContainer = styled.div`
    display: none;

    @media (max-width: 768px) {
		display: flex;
        font-size: 2rem;
        color: ${(props) => (props.icon ? "#f7cac9" : "#ffdcdb")};  
        cursor: pointer;

        &:hover {
            transform: scale(0.9);
            transition: all 0.7s; 
        }
    }
`;

export const NavLinksWrapper = styled.ul`
    display: flex;
    gap: 25px;
    padding: 0;
    
    @media (max-width: 768px) {

        display: none;

        &.open {
            position: absolute;
            z-index: 2;
            top: 80px;
            right: 14%;
            width: 300px;
            flex-direction: column;
            background-color: #7ca1d5;
            align-items: center;
            padding: 20px;
            gap: 30px;
            margin-top: 1rem;
        }
    }
`;

export const NavLinks = styled.li`
    color: #fff;
    font-size: 20px;
    font-family: 'Pathway Gothic One', sans-serif;
    display: flex;
    align-items: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    gap: 40px;

    &:hover {
        color: #f7cac9;
    }
`;

export const UserYCartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    gap: 10px;
`;

export const UserContainer = styled.div`
    color: ${(props) => (props.icon ? "#f7cac9" : "#ffdcdb")};   
    cursor: pointer;
    font-size: 25px;

    &:hover {
    transform: scale(1.1);
    transition: all 0.7s;  
    }
`;

export const CartContainer = styled.div`
    color: ${(props) => (props.icon ? "#f7cac9" : "#ffdcdb")};   
    cursor: pointer;
    font-size: 25px;

    &:hover {
    transform: scale(1.1);
    transition: all 0.7s;  
    }
`;
