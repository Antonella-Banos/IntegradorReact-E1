import styled from "styled-components";
import { motion } from "framer-motion";

export const CategoriesWrapper = styled.section`
    display: flex;
	flex-direction: column;
    align-items: center;
	max-width: 1200px;
	width: 100%;
	margin: 5rem 1rem;
    h2 {
        color: #7e9dd4;
        font-family: 'Pathway Gothic One', sans-serif;
        font-weight: 700;
        letter-spacing: 3px;
        text-transform: uppercase;
        font-size: 3.1rem;
    }
	@media (max-width: 768px) {
		padding-top: 30px;
		text-align: center;
	}
`;

export const CategoriesContainer = styled.div`
    display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	gap: 40px;
	user-select: none;
`;

export const CategoriesCard = styled(motion.div)`
    display: flex;
	justify-content: center;
	align-items: center;
	width: 180px;
	height: 15px;
	border-radius: 1rem;
	padding: 25px 10px;
	gap: 10px;
	background: ${({ selected }) => selected ? '#f7cac9' : 'linear-gradient(100deg, #92a8d1, #f7cac9)'};
    cursor: pointer;
	&:hover {
		opacity: 90%;
	}
    p {
		font-size: 1.5rem;
		font-family: 'Pathway Gothic One', sans-serif;
		color: #fff;
	}
	&:focus {
		border: none;
	}
`;