import styled from "styled-components";


export const FooterContainerStyled = styled.footer`
    display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem 0 1rem 0;
    margin-top: 2rem;
    width: 100%;
    background-color: #7ca1d5;

    @media (max-width: 460px) {
        img {
            height: 75px;
        }
    }
`;

export const FooterLogoContainerStyled = styled.div`
    display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 1rem;
    h2 {
        color: #fff;
        font-size: 1.5rem;
        font-family: 'Pathway Gothic One', sans-serif;
        text-transform: uppercase;
        letter-spacing: 0.2px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 460px) {
        h2 {
            font-size: 1rem;
        }
    }
`;
