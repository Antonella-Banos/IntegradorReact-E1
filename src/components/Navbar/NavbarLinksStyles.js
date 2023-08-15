import styled from "styled-components";


export const LinkContainer = styled.div`
    color: #fff;
    font-size: 20px;
    font-family: 'Pathway Gothic One', sans-serif;
    display: flex;
    align-items: center;
    letter-spacing: 2px;
    cursor: pointer;
    gap: 25px;
`;

export const LinkStyled = styled(LinkContainer)`
    @media (max-width: 768px) {
		display: column;
	}
`;



