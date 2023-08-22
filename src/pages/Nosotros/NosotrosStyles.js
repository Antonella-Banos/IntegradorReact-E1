import styled from "styled-components";

export const AboutContainer = styled.section`
    max-width: 1200px;
    width: 100%;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 7rem;

    img {
        width: 100%;
        align-items: center;
    }
`;

export const AboutTextContainer = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 1.5rem;
    padding: 0 1rem;
    h1 {
        font-size: 4rem;
        font-family: 'Pathway Gothic One', sans-serif;
        font-weight: 700;
        letter-spacing: 3px;
        color: #7e9dd4;
        margin: 10px 0;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-wrap: wrap;
    }

    p {
        font-size: 1.5rem;
        font-family: 'Pathway Gothic One', sans-serif;
        letter-spacing: 0.5px;
        margin: 10px 0;
        margin-bottom: 1.5rem;
        color: #333;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-wrap: wrap;
    }
`;


export const PaymentMethodContainer = styled.div`
    display: flex;
	flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
	max-width: 1200px;
	width: 100%;
	margin: 5rem 1rem;
    padding: 0 1rem;

    h2 {
        color: #7e9dd4;
        font-family: 'Pathway Gothic One', sans-serif;
        font-weight: 700;
        letter-spacing: 3px;
        text-transform: uppercase;
        font-size: 3.1rem;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-wrap: wrap;
    }
	@media (max-width: 768px) {
		padding-top: 30px;
		text-align: center;
	}

`;

export const PaymentMethodCardContainer = styled.div`
    display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	gap: 50px;
`;

export const PaymentMethodCards = styled.div`
    display: flex;
	justify-content: center;
	align-items: center;
    background: #b4c8ea;
    width: 270px;
    border-radius: 1rem;
    padding: 1rem;

    h3 {
       color: #fff;
       font-weight: 600;
       font-family: 'Nanum Gothic Coding', sans-serif;
       text-transform: uppercase;
       letter-spacing: 1px;
    }
`;

export const PaymentMethodText = styled.p`
    font-size: 1.5rem;
    font-family: 'Pathway Gothic One', sans-serif;
    letter-spacing: 0.5px;
    margin: 10px 0;
    margin-bottom: 1.5rem;
    color: #333;
`;


export const SocialMediaContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
	max-width: 1200px;
	width: 100%;
	margin: 5rem 1rem;

    h2 {
        color: #7e9dd4;
        font-family: 'Pathway Gothic One', sans-serif;
        font-weight: 700;
        letter-spacing: 3px;
        text-transform: uppercase;
        font-size: 2rem;
    }
`;

export const SocialMediaLinksContainer = styled.div`
    p {
        font-size: 1.5rem;
        font-family: 'Pathway Gothic One', sans-serif;
        letter-spacing: 0.5px;
        margin: 10px 0;
        margin-bottom: 1.5rem;
        color: #333;
    }
`;

export const WhatsappContainer = styled(SocialMediaLinksContainer)``;


