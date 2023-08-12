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

export const NavLinksContainerStyled = styled.div`
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;

    a {
        padding: 0.5rem;
        display: flex;
        justify-content: center;
		align-items: center;
        gap: 8px;
    }

    a:hover {
        color: #f7cac9;
    }

    @media (max-width: 768px) {
        gap: 10px;
    }
`;

export const LinkContainerStyled = styled.div`
    font-size: 20px;
    font-family: 'Pathway Gothic One', sans-serif;
    display: flex;
    align-items: center;
    letter-spacing: 2px;
    cursor: pointer;
`;

export const ContactContainerStyled = styled(LinkContainerStyled)`
    @media (max-width: 768px) {
		display: none;
	}

`;

export const AboutContainerStyled = styled(LinkContainerStyled)`
    @media (max-width: 768px) {
		display: none;
	}

`;

export const AlbumsContainerStyled = styled(LinkContainerStyled)`
    @media (max-width: 768px) {
		display: none;
	}

`;

export const HomeContainerStyled = styled(LinkContainerStyled)`
    @media (max-width: 768px) {
		display: none;
	}

`;

export const MenuContainerStyled = styled(LinkContainerStyled)`
    display: none;
    font-size: 30px;
    color: ${(props) => (props.icon ? "#f7cac9" : "#ffdcdb")};  
    cursor: pointer;
    @media (max-width: 768px) {
		display: flex;
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
`;

export const CartContainer = styled.div`
    color: ${(props) => (props.icon ? "#f7cac9" : "#ffdcdb")};   
    cursor: pointer;
    font-size: 25px;
`;
