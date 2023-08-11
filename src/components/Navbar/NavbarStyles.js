import styled from "styled-components";

export const NavbarContainerStyled = styled.header`
    height: 90px;
    background-color: #7ca1d5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;

    @media (max-width: 768px) {
        img {
            height: 82px;
        }
    }

    @media (max-width: 576px) {
        padding: 1rem 2rem;
    }

    @media (max-width: 320px) {
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
    gap: 15px;

    a {
        padding: 0.5rem;
        display: flex;
        justify-content: center;
		align-items: center;
        gap: 8px;
    }

    a:hover {
        text-decoration: underline #f7cac9;
    }
`;

export const LinkContainerStyled = styled.div`
    font-size: 20px;
    font-family: 'Pathway Gothic One', sans-serif;
    color: ${(props) => (props.icons ? "#f7cac9" : "#ffdcdb")};
    display: flex;
    align-items: center;
    letter-spacing: 2px;
    cursor: pointer;
`;


export const UserContainerStyled = styled(LinkContainerStyled)`
    @media (max-width: 768px) {
		display: none;
	}

`;
export const ContactContainerStyled = styled(LinkContainerStyled)`
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
    cursor: pointer;
    @media (max-width: 768px) {
		display: flex;
	}
`;
