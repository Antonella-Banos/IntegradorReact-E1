import styled from "styled-components";


export const ProductsWrapper = styled.section`
  	display: flex;
	flex-direction: column;
    justify-content: center;
    align-items: center;
	max-width: 1200px;
	margin: 5rem 1rem;
    h2 {
        color: #7e9dd4;
        font-family: 'Pathway Gothic One', sans-serif;
        font-weight: 700;
        letter-spacing: 3px;
        text-transform: uppercase;
        font-size: 3.1rem;
        text-align: center;
    }
`;

export const ProductsContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 1rem 0;
    display: flex;
    place-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
`;

export const ProductCard = styled.div`
    background: #b4c8ea;
    width: 270px;
    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    img {
        width: 100%;
        margin-bottom: 1rem;
        transition: transform 0.4s ease;

        &:hover {
         transform: scale(0.97);
         cursor: pointer;
        }  
    }
    h2 {
        color: #fff;
        font-weight: 600;
        font-size: 1.5rem;
        margin: 0.5rem;
    }
    h3 {
        color: #fff;
        font-weight: 600;
        font-family: 'Nanum Gothic Coding', sans-serif;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 0.5rem;
    }
    p {
        color: #fff;
        font-weight: 500;
		font-size: 20px;
        font-family: 'Pathway Gothic One', sans-serif;
        text-transform: uppercase;
        letter-spacing: 0.8px;
        margin: 5px;
    }

    & p:last-of-type {
        margin-bottom: 18px;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2.3rem;
`;