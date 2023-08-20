import styled from "styled-components";

export const HeroContainerStyled = styled.section`
    display: flex;
	justify-content: space-around;
	align-items: center;
	max-width: 1200px;
	margin-top: 7rem;
	gap: 30px;
	h1 {
		margin-bottom: 2rem;
	}
	@media (max-width: 1000px) {
		flex-direction: column;
	}
`; 

export const HeroTextContainerStyled = styled.div`
    display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 50%;
    margin-top: 4rem;
	h1 {
		font-size: 4rem;
        font-family: 'Pathway Gothic One', sans-serif;
        font-weight: 700;
        letter-spacing: 3px;
        color: #7e9dd4;
		margin: 10px 0;
	}
	p {
		font-size: 1.5rem;
        font-family: 'Pathway Gothic One', sans-serif;
        letter-spacing: 0.5px;
		margin: 10px 0;
        margin-bottom: 1.5rem;
		color: #333;
	}
	@media (max-width: 1000px) {
		width: 80%;
		align-items: center;
		text-align: center;
	}
`;

export const HeroImageContainerStyled = styled.div`
    	width: 45%;
	img {
		width: 100%;
		padding-top: 75px;
	}
	@media (max-width: 1000px) {
		display: none;
	}

`;