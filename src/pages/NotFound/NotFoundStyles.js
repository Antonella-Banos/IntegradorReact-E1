import styled from 'styled-components';

export const NotFoundContainer = styled.div`
   max-width: 1200px;
   width: 100%;
   flex-direction: column;
   align-items: center;
   flex-wrap: wrap;
   margin-top: 7rem;
`;

export const NotFoundContent = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 3rem;
    padding: 0 1rem;
    h1 {
        font-size: 3.5rem;
        font-family: 'Pathway Gothic One', sans-serif;
        font-weight: 700;
        letter-spacing: 3px;
        color: #7e9dd4;
        margin: 20px 0;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-wrap: wrap;
        text-transform: uppercase;
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

export const MusicVideo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 6rem;
    margin-bottom: 2rem;
    padding: 0 1rem;

    h2 {
        font-size: 3.5rem;
        font-family: 'Pathway Gothic One', sans-serif;
        font-weight: 700;
        letter-spacing: 3px;
        color: #7e9dd4;
        margin: 10px 0;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-wrap: wrap;
        text-transform: uppercase;
        margin-bottom: 2.7rem;
    }

    iframe {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;

        @media (max-width: 576px) {
           width: 450px;
           height: 300px;
        }

        @media (max-width: 470px) {
            width: 310px;
            height: 260px;
        }
    }
`;

export const ButtonContainer = styled.div`
   display: flex;
   justify-content: center;
   margin-bottom: 3rem;
`;